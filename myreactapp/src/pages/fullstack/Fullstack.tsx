import React, {useState, useEffect} from "react";
import Typewriter from "@components/Typewriter";
import FadeIn from "@components/FadeIn";
import Delay from "@components/Delay";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Fullstack: React.FC = () => {
    const [choiceJob, setChoiceJob] = useState<string>(". . .");
    const [choiceMade, setChoiceMade] = useState<boolean>(false);
    const [fadeOut, setFadeOut] = useState<boolean>(false);
    const gradientText = "bg-gradient-to-tr from-blue-800 to-blue-500 text-transparent bg-clip-text";
    const navigate = useNavigate();

    useEffect(() => {
        // Scroll to the top when the Home component mounts
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const choice = event.currentTarget.textContent;
        setChoiceJob(choice || ". . .");
        setChoiceMade(true);
        const timeoutId = setTimeout(() => {
            setFadeOut(true);
            navigatePage('/');
        }, 2000);
        return () => clearTimeout(timeoutId);
    };

    function navigatePage(path: string) {
        const timeoutId = setTimeout(() => {
            navigate(path);
        }, 1000);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: "100%" }} // Initial position (below the viewport)
            animate={{ opacity: 1, y: !fadeOut ? "0%" : "-100%"}} // Final position (slide up into view)
            exit={{ opacity: 0, y: "-100%" }} // Exit animation (slide up and fade out)
            transition={{ duration: 1 }} // Animation duration
        >
            <div className="bg-gradient-to-tr from-gray-200 to-gray-300 p-4 h-screen w-full font-mono text-gray-800 mx-auto bg-slate-300">
                <div>
                    <div className="flex items-center h-screen">
                        <div className=" min-w-[11rem] mx-auto text-2xl font-bold">
                            <div>
                                <Typewriter className="inline-flex" delay={4}>I wrote&nbsp;</Typewriter>
                                <Delay className="inline-flex" duration={14}>
                                    <Typewriter key={choiceJob} className={gradientText}>{choiceJob}</Typewriter>
                                </Delay>
                            </div>
                            <FadeIn className="mt-10" delay={18}>
                                <div className="text-center">
                                    <div>
                                        <button onClick={(e) => handleButtonClick(e)} className={`text-base transition-opacity duration-500 ${
                                            choiceMade ? "opacity-0 pointer-events-none" : "opacity-100"
                                        }`}>
                                            "All Just Debts"
                                        </button>    
                                    </div>
                                    <div className="mt-4">
                                        <button onClick={(e) => handleButtonClick(e)} className={`text-base transition-opacity duration-500 ${
                                            choiceMade ? "opacity-0 pointer-events-none" : "opacity-100"
                                        }`}>
                                            "Faces"
                                        </button>
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
