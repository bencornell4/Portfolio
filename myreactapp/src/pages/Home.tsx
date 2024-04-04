import React, {useState, useEffect} from "react";
import { motion, useAnimation } from 'framer-motion';
import Typewriter from "../components/Typewriter";
import FadeIn from "../components/FadeIn";

const Home: React.FC = () => {

    const [choiceJob, setChoiceJob] = useState<string>("");
    const controls = useAnimation();
    const gradientText = "bg-gradient-to-tr from-blue-800 to-indigo-500 text-transparent bg-clip-text";
    
    useEffect(() => {
        controls.start(i => ({
            opacity: 1,
            transition: {delay: i * 0.5}
        }));
    }, [controls]);

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const choice = event.currentTarget.textContent;
        setChoiceJob(choice || "");
        //hide choices
    };

    return (
        <div>
            <div className="flex items-center h-screen">
                <div className="mx-auto text-2xl font-bold">
                    <h2 className="inline-flex">I'm&nbsp;</h2>
                    <Typewriter className={"inline-flex " + gradientText}>Ben Cornell</Typewriter>
                    <div>
                        <FadeIn className="mt-4 inline-flex">I'm a&nbsp;</FadeIn>
                        <Typewriter className="inline-flex">. . .</Typewriter>
                    </div>
                    <div className="mt-4">
                        <FadeIn className="mt-8">
                            <div className="rounded-md bg-gradient-to-tr from-blue-800 to-indigo-500 bg-clip-text">
                                <div>
                                    <button onClick={(e) => handleButtonClick(e)} className="text-base text-transparent">Software Developer</button>
                                </div>
                                <div className="mt-4">
                                    <button onClick={(e) => handleButtonClick(e)} className="text-base text-transparent">Writer</button>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
