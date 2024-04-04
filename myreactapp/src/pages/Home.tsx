import React, {useState, useEffect} from "react";
import { motion, useAnimation } from 'framer-motion';
import Typewriter from "../components/Typewriter";
import FadeIn from "../components/FadeIn";

const Home: React.FC = () => {

    const [choiceJob, setChoiceJob] = useState<string>("");
    const gradientText = "bg-gradient-to-tr from-blue-800 to-indigo-500 text-transparent bg-clip-text";

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const choice = event.currentTarget.textContent;
        setChoiceJob(choice || "");
    };

    return (
        <div>
            <div className="flex items-center h-screen">
                <div className="mx-auto text-2xl font-bold">
                    <h2 className="inline-flex">I'm&nbsp;</h2>
                    <Typewriter className={"inline-flex " + gradientText}>Ben Cornell</Typewriter>
                    <div>
                        <Typewriter className="inline-flex" delay={12}>I'm a . . .</Typewriter>
                    </div>
                    <div className="mt-4">
                        <FadeIn className="mt-8" delay={20}>
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
