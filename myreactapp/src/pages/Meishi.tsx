import React from "react";
import Typewriter from "@components/Typewriter";
import FadeIn from "@components/FadeIn";
import AnimatedButton from "@components/AnimatedButton";
import CodeBackground from "@components/CodeBackground";
import { ChoicePageProps } from "types";
import MediaAndText from "@components/MediaAndText";
import PageHeader from "@components/PageHeader";

const Meishi: React.FC<ChoicePageProps> = ({handleButtonClick, choiceJob}) => {
    const gradientText = "bg-gradient-to-tr from-blue-400 to-blue-800 text-transparent bg-clip-text";
    const choices =
    [
        []
    ]

    return (
        <div className="h-screen overflow-y-scroll">
            <CodeBackground/>
            <PageHeader path="" currentPage="/meishi" handleButtonClick={handleButtonClick} choices={choices} gradientText={gradientText}/>
            <div>
                <div className="font-sans text-white mx-auto">
                    <div className="flex items-center">
                        <div className="mt-10 mb-10 mx-auto text-2xl font-bold whitespace-nowrap">
                            <div className="mt-12 text-center">
                                <FadeIn>
                                    <h2 className="m-auto w-52 mb-5"> Meishi </h2>
                                    <Typewriter className={"text-base relative bottom-5 " + gradientText}>AI generated business cards</Typewriter>
                                </FadeIn>
                            </div>
                            <FadeIn delay={20}>
                                <button className="flex w-40 mt-20 m-auto cursor-pointer" onClick={(e)=>document.getElementById('firstElement')?.scrollIntoView({block:'center', behavior: 'smooth'})}>
                                    <img src="scrollicon1.gif"/>
                                </button>
                            </FadeIn>
                            <FadeIn className="mt-40 sm:mt-40" delay={30} inFrame={true}>
                                <MediaAndText id="firstElement" mediaPath="meishi/MeishiGenPreview.mp4" mediaTitle="Generative AI" bulletPoints={
                                    ["DALL-E 3 integration", 
                                    "Custom prompts & live display"]
                                } scrollTo="secondElement"/>
                                <MediaAndText id="secondElement" className="mt-36" mediaPath="ovia/OviaLoginPreview.mp4" mediaTitle="AI Layout Assistant" bulletPoints={
                                    ["GPT-4o integration", 
                                    "Edits html and css in real time",
                                    "Endless customization"]
                                } scrollTo="lastElement" flipOrientation = {true}/>
                            </FadeIn>
                            <FadeIn>
                                <div id="lastElement" className="flex justify-center">
                                    <AnimatedButton onClick={(e) => handleButtonClick("/fullstack", choices)} className="pulse-m inline-flex mx-2 choice-button text-base border-2 p-2 rounded-lg mt-24" mode="color" textColor="hover:text-blue-400" borderColor="hover:border-blue-400">
                                        other projects
                                    </AnimatedButton>
                                </div>
                                <div className="choice-button flex justify-center items-center space-x-2 mt-10 mb-20">
                                    <AnimatedButton mode="size">
                                        <img src="fullstackicons/typescript.png" alt="typescript" title="typescript" className="h-7"/>
                                    </AnimatedButton>
                                    <AnimatedButton mode="size">
                                        <img src="fullstackicons/django.png" alt="django" title="django" className="h-7"/>
                                    </AnimatedButton>
                                    <AnimatedButton mode="size">
                                        <img src="fullstackicons/angular.png" alt="angular" title="angular" className="h-7"/>
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

export default Meishi;
