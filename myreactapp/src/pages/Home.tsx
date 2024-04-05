import React, {useState, useEffect} from "react";
import Typewriter from "../components/Typewriter";
import FadeIn from "../components/FadeIn";
import Delau from "../components/Delay";
import Delay from "../components/Delay";

const Home: React.FC = () => {
    const [choiceJob, setChoiceJob] = useState<string>(". . .");
    const gradientText = "bg-gradient-to-tr from-blue-800 to-indigo-500 text-transparent bg-clip-text";

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const choice = event.currentTarget.textContent;
        setChoiceJob(choice || ". . .");
    };

    return (
        <div>
            <div className="flex items-center h-screen">
                <div className=" min-w-[11rem] mx-auto text-2xl font-bold">
                    <FadeIn className="mt-8 inline-flex" duration={2} delay={10}><h2>I'm&nbsp;</h2></FadeIn>
                    <Typewriter className={"inline-flex " + gradientText} delay={14}>Ben Cornell</Typewriter>
                    <div>
                        <Typewriter className="inline-flex" delay={26}>I'm a&nbsp;</Typewriter>
                        <Delay className="inline-flex" duration={34}>
                            <Typewriter key={choiceJob} className={gradientText}>{choiceJob}</Typewriter>
                        </Delay>
                    </div>
                    <FadeIn className="mt-10" delay={34}>
                        <div className="text-center">
                            <div>
                                <button onClick={(e) => handleButtonClick(e)} className="text-base border-2 p-2 rounded-lg">Software Developer</button>
                            </div>
                            <div className="mt-4">
                                <button onClick={(e) => handleButtonClick(e)} className="text-base border-2 p-2 rounded-lg">Writer</button>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
};

export default Home;
