import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import Typewriter from "@components/Typewriter";
import FadeIn from "@components/FadeIn";
import Delay from "@components/Delay";
import StarBackground from "../components/StarBackground";

const Home: React.FC = () => {
    const [choiceJob, setChoiceJob] = useState<string>(". . .");
    const [choiceMade, setChoiceMade] = useState<boolean>(false);
    const [fadeOut, setFadeOut] = useState<boolean>(false);
    const gradientText = "bg-gradient-to-tr from-blue-500 to-blue-800 text-transparent bg-clip-text";
    const navigate = useNavigate();


    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const choice = event.currentTarget.textContent;
        setChoiceJob(choice || ". . .");
        setChoiceMade(true);
        const timeoutId = setTimeout(() => {
            setFadeOut(true);
            navigatePage('/fullstack');
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
            initial={{ opacity: 0, y: "50%" }} // Initial position (below the viewport)
            animate={{ opacity: 1, y: !fadeOut ? "0%" : "-100%"}} // Final position (slide up into view)
            exit={{ opacity: 0, y: "-50%" }} // Exit animation (slide up and fade out)
            transition={{ duration: 1 }} // Animation duration
        >
            <div className="container px-4 h-screen font-sans text-white mx-auto">
                <div>
                    <div className="flex items-center h-screen">
                        <div className=" min-w-[11rem] mx-auto text-2xl font-bold">
                            <Typewriter className="mt-8 inline-flex" delay={4}>I'm&nbsp;</Typewriter>
                            <Typewriter className={"inline-flex " + gradientText} delay={8}>Ben Cornell</Typewriter>
                            <div>
                                <Typewriter className="inline-flex" delay={24}>I'm a&nbsp;</Typewriter>
                                <Delay className="inline-flex" duration={34}>
                                    <Typewriter key={choiceJob} className={gradientText}>{choiceJob}</Typewriter>
                                </Delay>
                            </div>
                            <FadeIn className="mt-10" delay={30}>
                                <div className="text-center">
                                    <div>
                                        <button onClick={(e) => handleButtonClick(e)} className={`text-base border-2 p-2 rounded-lg transition-opacity duration-500 ${
                                            choiceMade ? "opacity-0 pointer-events-none" : "opacity-100"
                                        }`}>
                                            Fullstack Developer
                                        </button>    
                                    </div>
                                    <div className="mt-4">
                                        <button onClick={(e) => handleButtonClick(e)} className={`text-base border-2 p-2 rounded-lg transition-opacity duration-500 ${
                                            choiceMade ? "opacity-0 pointer-events-none" : "opacity-100"
                                        }`}>
                                            Writer
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

export default Home;
