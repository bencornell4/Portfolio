import React, {useState, useEffect} from "react";
import Typewriter from "@components/Typewriter";
import FadeIn from "@components/FadeIn";
import Delay from "@components/Delay";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AnimatedButton from "@components/AnimatedButton";
import CodeBackground from "@components/CodeBackground";

const Fullstack: React.FC = () => {
    const [choiceJob, setChoiceJob] = useState<string>(". . .");
    const [fadeOut, setFadeOut] = useState<boolean>(false);
    const gradientText = "bg-gradient-to-tr from-blue-400 to-blue-800 text-transparent bg-clip-text";
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
            }
        }

        if (choice == `/fullstack`) {
            path = "/";
            typeDelay = 0;
            const timeoutId = setTimeout(() => {
                setFadeOut(true);
                navigatePage(path);
            }, typeDelay);
    
            return () => clearTimeout(timeoutId);
        } else {
            setChoiceJob(choice || ". . .");
        }
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
            <CodeBackground/>
            <div className={'fixed top-0 left-2 mx-auto text-base font-bold p-4 z-50 font-sans text-white'}>
                <h2 className="inline-flex">bencornell</h2>
                <AnimatedButton onClick={(e) => handleButtonClick(e)} className={gradientText} mode="size">
                    /fullstack
                </AnimatedButton>
            </div>
            <div className="container px-4 h-screen font-sans text-white mx-auto">
                <div>
                    <div className="flex items-center h-screen">
                        <div className="mx-auto text-2xl font-bold">
                            <div>
                                <Typewriter className="inline-flex" delay={4}>I made&nbsp;</Typewriter>
                                <Delay className="inline-flex" duration={14}>
                                    <Typewriter key={choiceJob} className={gradientText}>{choiceJob}</Typewriter>
                                </Delay>
                            </div>
                            <FadeIn className="mt-10" delay={18}>
                                <div className="text-center">
                                    <div>
                                        <AnimatedButton onClick={(e) => handleButtonClick(e)} className="choice-button text-base border-2 p-2 rounded-lg" mode="color" textColor="hover:text-blue-400" borderColor="hover:border-blue-400">
                                            Ovia
                                        </AnimatedButton>
                                    </div>
                                    <div className="mt-4">
                                        <AnimatedButton onClick={(e) => handleButtonClick(e)} className="choice-button text-base border-2 p-2 rounded-lg" mode="color" textColor="hover:text-blue-400" borderColor="hover:border-blue-400">
                                            Pangrams
                                        </AnimatedButton>
                                    </div>
                                    <div className="mt-4">
                                        <AnimatedButton onClick={(e) => handleButtonClick(e)} className="choice-button text-base border-2 p-2 rounded-lg" mode="color" textColor="hover:text-blue-400" borderColor="hover:border-blue-400">
                                            Portfolio
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
