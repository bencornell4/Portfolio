import React, {useState, useEffect} from "react";
import Typewriter from "@components/Typewriter";
import FadeIn from "@components/FadeIn";
import Delay from "@components/Delay";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AnimatedButton from "@components/AnimatedButton";

const Fullstack: React.FC = () => {
    const [choiceJob, setChoiceJob] = useState<string>(". . .");
    const [fadeOut, setFadeOut] = useState<boolean>(false);
    const gradientText = "bg-gradient-to-tr from-blue-800 to-blue-400 text-transparent bg-clip-text";
    const navigate = useNavigate();


    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        var typeDelay = 0;
        var path = "/";
        const choice = event.currentTarget.textContent;
        
        //fade out buttons
        const buttons = Array.from(document.getElementsByClassName('choice-button'));
        for (const button of buttons) {
            if (button instanceof HTMLElement) {
                button.style.opacity = '0'; // Set opacity to 0 (fully transparent)
                button.style.transition = 'opacity 0.5s ease-out'; // Apply transition to opacity
                button.setAttribute('disabled', '');
            }
        }

        if (choice == `"All Just Debts"`) {
            path = "/writer/alljustdebts";
            typeDelay = 2500;
            setChoiceJob(choice || ". . .");
        }
        else if (choice == `"Anything I like?"`) {
            path = "/writer/anythingilike";
            typeDelay = 2500;
            setChoiceJob(choice || ". . .");
        }
        else if (choice == `"Piss drunk, too"`) {
            path = "/writer/pissdrunktoo";
            typeDelay = 2500;
            setChoiceJob(choice || ". . .");
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
        }, 1000);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: "50%" }} // Initial position (below the viewport)
            animate={{ opacity: 1, y: !fadeOut ? "0%" : "-100%"}} // Final position (slide up into view)
            exit={{ opacity: 0, y: "-50%" }} // Exit animation (slide up and fade out)
            transition={{ duration: 1 }} // Animation duration
        >
            <div className={'fixed top-0 left-2 mx-auto text-base font-bold p-4 z-50 font-mono '}>
                <h2 className="inline-flex">bencornell</h2>
                <AnimatedButton onClick={(e) => handleButtonClick(e)} className={gradientText} mode="size">
                    /writer
                </AnimatedButton>
            </div>
            <div className="bg-gradient-to-tr from-gray-100 to-gray-50 px-4 h-screen w-full font-mono text-gray-800 mx-auto">
                <div>
                    <div className="flex items-center h-screen">
                        <div className="mx-auto text-2xl font-bold">
                            <div>
                                <Typewriter className="inline-flex" delay={4}>I wrote&nbsp;</Typewriter>
                                <Delay className="inline-flex" duration={14}>
                                    <Typewriter key={choiceJob} className={gradientText}>{choiceJob}</Typewriter>
                                </Delay>
                            </div>
                            <FadeIn className="mt-10" delay={18}>
                                <div className="text-center">
                                    <div>
                                        <AnimatedButton onClick={(e) => handleButtonClick(e)} className="choice-button text-base" mode="color" textColor="hover:text-blue-700">
                                            "All Just Debts"
                                        </AnimatedButton>
                                    </div>
                                    <div className="mt-4">
                                        <AnimatedButton onClick={(e) => handleButtonClick(e)} className="choice-button text-base" mode="color" textColor="hover:text-blue-700">
                                            "Anything I like?"
                                        </AnimatedButton>
                                    </div>
                                    <div className="mt-4">
                                        <AnimatedButton onClick={(e) => handleButtonClick(e)} className="choice-button text-base" mode="color" textColor="hover:text-blue-700">
                                            "Piss drunk, too"
                                        </AnimatedButton>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Fullstack;
