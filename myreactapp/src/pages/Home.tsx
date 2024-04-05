import React, {useState, useEffect} from "react";
import Typewriter from "@components/Typewriter";
import FadeIn from "@components/FadeIn";
import Delay from "@components/Delay";
import StarBackground from "../components/StarBackground";

const Home: React.FC = () => {
    const [choiceJob, setChoiceJob] = useState<string>(". . .");
    const [choiceMade, setChoiceMade] = useState<boolean>(false);
    const gradientText = "bg-gradient-to-tr from-blue-800 to-indigo-500 text-transparent bg-clip-text";

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const choice = event.currentTarget.textContent;
        setChoiceJob(choice || ". . .");
        setChoiceMade(true);
    };

    return (
        <div>
            <StarBackground />
            <div className="container p-4 h-screen font-sans text-white mx-auto">
                <div>
                    <div className="flex items-center h-screen">
                        <div className=" min-w-[11rem] mx-auto text-2xl font-bold">
                            <Typewriter className="mt-8 inline-flex" delay={10}>I'm&nbsp;</Typewriter>
                            <Typewriter className={"inline-flex " + gradientText} delay={14}>Ben Cornell</Typewriter>
                            <div>
                                <Typewriter className="inline-flex" delay={30}>I'm a&nbsp;</Typewriter>
                                <Delay className="inline-flex" duration={38}>
                                    <Typewriter key={choiceJob} className={gradientText}>{choiceJob}</Typewriter>
                                </Delay>
                            </div>
                            <FadeIn className="mt-10" delay={42}>
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
        </div>
    );
};

export default Home;
