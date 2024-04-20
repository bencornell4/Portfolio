import React, {useContext} from "react";
import Typewriter from "@components/Typewriter";
import FadeIn from "@components/FadeIn";
import Delay from "@components/Delay";
import AnimatedButton from "@components/AnimatedButton";
import { ChoicePageProps } from "types";

const Home: React.FC<ChoicePageProps> = ({handleButtonClick, choiceJob}) => {
    const gradientText = "bg-gradient-to-tr from-blue-400 to-blue-800 text-transparent bg-clip-text";
    const choices =
    [
        ["Fullstack Developer", "/fullstack"],
    ]

    return (
        <div className="container px-4 h-screen font-sans text-white mx-auto">
            <div className="flex items-center h-screen">
                <div className="min-w-[11rem] mx-auto text-2xl font-bold">
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
                                <AnimatedButton onClick={(e) => handleButtonClick(choices[0][0], choices)} className="choice-button text-base border-2 p-2 rounded-lg" mode="color" textColor="hover:text-blue-400" borderColor="hover:border-blue-400">
                                    Fullstack Developer
                                </AnimatedButton>    
                            </div>
                            {/*<div className="mt-4">
                                <AnimatedButton onClick={(e) => handleButtonClick("Writer", choices)} className="choice-button text-base border-2 p-2 rounded-lg" mode="color" textColor="hover:text-blue-400" borderColor="hover:border-blue-400">
                                    Writer
                                </AnimatedButton>
                            </div>*/}
                        </div>
                    </FadeIn>
                </div>
            </div>
        </div>
    );
};

export default Home;
