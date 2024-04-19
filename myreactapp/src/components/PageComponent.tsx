import React, {useContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import PageComponentContext from "./PageComponentContext";

type PageComponentProps = {
    children: React.ReactNode;
    className?: string;
}

const PageComponent: React.FC<PageComponentProps> = ({children, className}) => {
    const [choiceJob, setChoiceJob] = useState<string>(". . .");
    const [fadeOut, setFadeOut] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleButtonClick = (buttonSelected: string, choices: Array<string[]>) => {
        var typeDelay = 0;
        var path = "/";
        const choice = buttonSelected;
        
        //fade out buttons
        const buttons = Array.from(document.getElementsByClassName('choice-button'));
        for (const button of buttons) {
            if (button instanceof HTMLElement) {
                button.style.opacity = '0'; // Set opacity to 0 (fully transparent)
                button.style.transition = 'opacity 0.5s ease-out'; // Apply transition to opacity
                button.setAttribute('disabled', '');
            }
        }

        for (const item in choices) {
            if (choice === choices[item][0]) {
                path = choices[item][1];
                typeDelay = 150 * choice.length;
                setChoiceJob(choice || ". . .");
            }
        }
        
        const timeoutId = setTimeout(() => {
            setFadeOut(true);
            navigatePage(path);
        }, typeDelay);

        return () => clearTimeout(timeoutId);
    };

    function navigatePage(path: string) {
        const timeoutId = setTimeout(() => {
            navigate(path);
            setChoiceJob(". . .");
            setFadeOut(false);
        }, 1000);
    }

    return (
        <PageComponentContext.Provider value={{ choiceJob, setChoiceJob, handleButtonClick }}>
            <motion.div
                initial={{ opacity: 0, y: "50%" }} // Initial position (below the viewport)
                animate={{ opacity: 1, y: !fadeOut ? "0%" : "-100%"}} // Final position (slide up into view)
                exit={{ opacity: 0, y: "-50%" }} // Exit animation (slide up and fade out)
                transition={{ duration: 1 }} // Animation duration
                className={className}
            >
                {children}
            </motion.div>
        </PageComponentContext.Provider>
    );
};

export default PageComponent;
