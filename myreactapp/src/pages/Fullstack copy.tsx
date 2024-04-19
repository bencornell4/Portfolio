import React, {useState, useEffect, useRef} from "react";
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

    const handleButtonClick = (buttonSelected: string) => {
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

        if (choice == "Ovia") {
            path = "/fullstack/ovia";
            typeDelay = 1000;
            setChoiceJob(choice || ". . .");
        }
        else if (choice == "this portfolio") {
            path = "/fullstack/portfolio";
            typeDelay = 2000;
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

    function onIFrameError() {
        console.log("test");
        return;
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
                <AnimatedButton onClick={(e) => handleButtonClick("/fullstack")} className={gradientText} mode="size">
                    /fullstack
                </AnimatedButton>
            </div>
            <div className="overflow-y-scroll overflow-x-hidden">
                <div className="container h-screen font-sans text-white mx-auto">
                    <div className="flex items-center">
                        <div className="mt-10 mb-10 mx-auto text-2xl font-bold">
                            <div className="mt-12 text-center">
                                <Typewriter className="inline-flex" delay={4}>I made&nbsp;</Typewriter>
                                <Delay className="inline-flex" duration={14}>
                                    <Typewriter key={choiceJob} className={gradientText}>{choiceJob}</Typewriter>
                                </Delay>
                            </div>
                            <FadeIn className="mt-10" delay={18}>
                                <div className="md:flex mt-14">
                                    <div className="mt-10 md:mt-0 md:mr-0">
                                        <div className="flex justify-center">
                                            <AnimatedButton onClick={(e) => handleButtonClick("Ovia")} className="choice-button flex overflow-none border-2 rounded-lg w-[100%] sm:w-[20rem] mx-10 overflow-y-hidden" mode="size">
                                                <iframe scrolling="no" src="https://ovia.live/" title="Ovia" className="flex-grow border-none h-[400px] pointer-events-none" onError={onIFrameError}/>
                                            </AnimatedButton>
                                        </div>
                                        <div className="choice-button flex justify-center items-center space-x-2 mt-4">
                                            <AnimatedButton mode="size">
                                                <img src="fullstackicons/javascript.png" alt="javascript" title="javascript" className="h-7"/>
                                            </AnimatedButton>
                                            <AnimatedButton mode="size">
                                                <img src="fullstackicons/html.png" alt="html" title="html" className="h-7"/>
                                            </AnimatedButton>
                                            <AnimatedButton mode="size">
                                                <img src="fullstackicons/css.png" alt="css" title="css" className="h-7"/>
                                            </AnimatedButton>
                                            <AnimatedButton mode="size">
                                                <img src="fullstackicons/node.png" alt="node" title="node" className="h-7"/>
                                            </AnimatedButton>
                                            <AnimatedButton mode="size">
                                                <img src="fullstackicons/express.png" alt="express" title="express" className="h-7"/>
                                            </AnimatedButton>
                                            <AnimatedButton mode="size">
                                                <img src="fullstackicons/postgres.png" alt="postgreSQL"  title="postgreSQL" className="h-7"/>
                                            </AnimatedButton>
                                            <AnimatedButton mode="size">
                                                <img src="fullstackicons/cloudinary.png" alt="cloudinary"  title="cloudinary" className="h-7"/>
                                            </AnimatedButton>
                                        </div>
                                    </div>
                                    <div className="mt-20 md:mt-0 md:mr-0">
                                        <div className="flex justify-center">
                                            <AnimatedButton onClick={(e) => handleButtonClick("this portfolio")} className="choice-button overflow-none border-2 rounded-lg w-[100%] sm:w-[20rem] mx-10 overflow-y-hidden" mode="size">
                                                <iframe scrolling="no" src="https://bencornell.netlify.app/" title="Ovia" className="flex-grow border-none h-[400px] pointer-events-none" onError={onIFrameError}/>
                                            </AnimatedButton>
                                        </div>
                                        <div className="choice-button flex justify-center items-center space-x-2 mt-4">
                                            <AnimatedButton mode="size">
                                                <img src="fullstackicons/typescript.png" alt="typescript" title="typescript" className="h-7"/>
                                            </AnimatedButton>
                                            <AnimatedButton mode="size">
                                                <img src="fullstackicons/react.png" alt="react" title="react" className="h-7"/>
                                            </AnimatedButton>
                                            <AnimatedButton mode="size">
                                                <img src="fullstackicons/tailwind.png" alt="tailwind" title="tailwind" className="h-7"/>
                                            </AnimatedButton>
                                            <AnimatedButton mode="size">
                                                <img src="fullstackicons/cloudinary.png" alt="cloudinary"  title="cloudinary" className="h-7"/>
                                            </AnimatedButton>
                                        </div>
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
