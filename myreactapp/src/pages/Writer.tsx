import React from "react";
import Typewriter from "@components/Typewriter";
import FadeIn from "@components/FadeIn";
import Delay from "@components/Delay";
import AnimatedButton from "@components/AnimatedButton";
import { ChoicePageProps } from "types";

const Fullstack: React.FC<ChoicePageProps> = ({handleButtonClick, choiceJob}) => {
    const gradientText = "bg-gradient-to-tr from-blue-800 to-blue-400 text-transparent bg-clip-text";
    const choices =
    [
        ["All Just Debts", "/writer/alljustdebts"],
        ["Anything I like?", "/writer/anythingilike"],
        ["Piss drunk, too", "/writer/pissdrunktoo"],
    ]

    return (
        <div>
            <div className={'fixed top-0 left-2 mx-auto text-base font-bold p-4 z-50 font-mono '}>
                <h2 className="inline-flex">bencornell</h2>
                <AnimatedButton onClick={(e) => handleButtonClick("/", choices)} className={gradientText} mode="size">
                    /writer
                </AnimatedButton>
            </div>
            <div className="bg-gradient-to-tr from-gray-100 to-gray-50 px-4 h-screen w-full font-mono text-gray-800 mx-auto">
                <div className="flex items-center h-screen">
                    <div className="mx-auto text-2xl font-bold whitespace-nowrap">
                        <div>
                            <Typewriter className="inline-flex" delay={4}>I wrote&nbsp;</Typewriter>
                            <Delay className="inline-flex" duration={14}>
                                <Typewriter key={choiceJob} className={gradientText}>{choiceJob}</Typewriter>
                            </Delay>
                        </div>
                        <FadeIn className="mt-10" delay={18}>
                            <div className="text-center">
                                <div>
                                    <AnimatedButton onClick={(e) => handleButtonClick(choices[0][0], choices)} className="choice-button text-base" mode="color" textColor="hover:text-blue-700">
                                        "All Just Debts"
                                    </AnimatedButton>
                                </div>
                                <div className="mt-4">
                                    <AnimatedButton onClick={(e) => handleButtonClick(choices[1][0], choices)} className="choice-button text-base" mode="color" textColor="hover:text-blue-700">
                                        "Anything I like?"
                                    </AnimatedButton>
                                </div>
                                <div className="mt-4">
                                    <AnimatedButton onClick={(e) => handleButtonClick(choices[2][0], choices)} className="choice-button text-base" mode="color" textColor="hover:text-blue-700">
                                        "Piss drunk, too"
                                    </AnimatedButton>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fullstack;
