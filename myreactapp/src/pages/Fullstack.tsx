import React from "react";
import Typewriter from "@components/Typewriter";
import FadeIn from "@components/FadeIn";
import Delay from "@components/Delay";
import AnimatedButton from "@components/AnimatedButton";
import CodeBackground from "@components/CodeBackground";
import { ChoicePageProps } from "types";
import PageHeader from "@components/PageHeader";

const Fullstack: React.FC<ChoicePageProps> = ({handleButtonClick, choiceJob}) => {
    const gradientText = "bg-gradient-to-tr from-blue-400 to-blue-800 text-transparent bg-clip-text";
    const choices =
    [
        ["Ovia", "/fullstack/ovia"],
        ["this portfolio", "/fullstack/portfolio"],
    ]

    return (
        <div className="overflow-y-scroll md:overflow-y-hidden overflow-x-hidden">
            <CodeBackground/>
            <PageHeader path="" currentPage="/fullstack" handleButtonClick={handleButtonClick} choices={choices} gradientText={gradientText}/>
            <div>
                <div className="container h-screen font-sans text-white mx-auto">
                    <div className="flex items-center">
                        <div className="mt-0 mb-10 mx-auto text-2xl font-bold whitespace-nowrap">
                            <div className="mt-10 text-center">
                                <Typewriter className="inline-flex" delay={4}>I made&nbsp;</Typewriter>
                                <Delay className="inline-flex" duration={14}>
                                    <Typewriter key={choiceJob} className={gradientText}>{choiceJob}</Typewriter>
                                </Delay>
                            </div>
                            <FadeIn inFrame={true} className="mt-5" delay={18}>
                                <div className="md:flex mt-14">
                                    <div className="mt-10 md:mt-0 md:mr-0">
                                        <div className="flex justify-center">
                                            <AnimatedButton onClick={(e) => handleButtonClick(choices[0][0], choices)} className="pulse-lg choice-button flex overflow-none border-2 rounded-lg h-[300px] md:h-[350px] w-[100%] sm:w-[20rem] mx-10 overflow-y-hidden" mode="size">
                                                <video preload="none" loop autoPlay muted playsInline src="ovia/OviaFeedPreview.mov" title="Ovia" className="flex-grow border-none w:100% pointer-events-none -mt-48"/>
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
                                    <div className="mt-14 md:mt-0 md:mr-0">
                                        <div className="flex justify-center">
                                            <AnimatedButton onClick={(e) => handleButtonClick(choices[1][0], choices)} className="pulse-lg choice-button overflow-none border-2 rounded-lg w-[100%] sm:w-[20rem] mx-10 overflow-y-hidden" mode="size">
                                                <iframe scrolling="no" src="https://bencornell.dev" title="Portfolio" className="flex-grow border-none h-[300px] md:h-[350px] pointer-events-none"/>
                                            </AnimatedButton>
                                        </div>
                                        <div className="choice-button flex justify-center items-center space-x-2 mt-4 mb-20">
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
        </div>
    );
};

export default Fullstack;
