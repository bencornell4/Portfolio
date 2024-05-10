import React from "react";
import Typewriter from "@components/Typewriter";
import FadeIn from "@components/FadeIn";
import AnimatedButton from "@components/AnimatedButton";
import CodeBackground from "@components/CodeBackground";
import { ChoicePageProps } from "types";
import MediaAndText from "@components/MediaAndText";
import PageHeader from "@components/PageHeader";

const Portfolio: React.FC<ChoicePageProps> = ({handleButtonClick, choiceJob}) => {
    const gradientText = "bg-gradient-to-tr from-blue-400 to-blue-800 text-transparent bg-clip-text";
    const choices =
    [
        []
    ]

    return (
        <div className="h-screen overflow-y-scroll">
            <CodeBackground/>
            <PageHeader path="fullstack" currentPage="/portfolio" handleButtonClick={handleButtonClick} choices={choices} gradientText={gradientText}/>
            <div>
                <div className="font-sans text-white mx-auto">
                    <div className="flex items-center">
                        <div className="mt-10 mb-10 mx-auto text-2xl font-bold whitespace-nowrap">
                            <div className="mt-12 text-center">
                                <FadeIn>
                                    <h2 className="text-xl relative bottom-5">Made with React</h2>
                                    <Typewriter className={"text-base relative bottom-5 whitespace-pre-wrap " + gradientText}>Typescript, Tailwind, and Framer Motion</Typewriter>
                                </FadeIn>
                            </div>
                            <FadeIn>
                                <div id="lastElement" className="flex justify-center">
                                    <AnimatedButton onClick={(e) => handleButtonClick("/fullstack", choices)} className="pulse-m inline-flex mx-2 choice-button text-base border-2 p-2 rounded-lg mt-24" mode="color" textColor="hover:text-blue-400" borderColor="hover:border-blue-400">
                                        other projects
                                    </AnimatedButton>
                                </div>
                                <div className="choice-button mt-10 flex justify-center items-center space-x-2 mb-20">
                                    <AnimatedButton mode="size">
                                        <img src="fullstackicons/typescript.png" alt="typescript" title="typescript" className="h-7"/>
                                    </AnimatedButton>
                                    <AnimatedButton mode="size">
                                        <img src="fullstackicons/react.png" alt="react" title="react" className="h-7"/>
                                    </AnimatedButton>
                                    <AnimatedButton mode="size">
                                        <img src="fullstackicons/tailwind.png" alt="tailwind" title="tailwind" className="h-7"/>
                                    </AnimatedButton>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
