import React, { lazy } from "react";
import Typewriter from "@components/Typewriter";
import FadeIn from "@components/FadeIn";
import Delay from "@components/Delay";
import AnimatedButton from "@components/AnimatedButton";
import CodeBackground from "@components/CodeBackground";
import { ChoicePageProps } from "types";
import MediaAndText from "@components/MediaAndText";
import { link } from "fs";

const Ovia: React.FC<ChoicePageProps> = ({handleButtonClick, choiceJob}) => {
    const gradientText = "bg-gradient-to-tr from-blue-400 to-blue-800 text-transparent bg-clip-text";
    const choices =
    [
        ["Ovia", "/fullstack/ovia"],
        ["this portfolio", "/fullstack/portfolio"],
    ]

    return (
        <div>
            <CodeBackground/>
            <div className={'fixed top-0 left-2 mx-auto text-base font-bold p-4 z-50 font-sans text-white'}>
                <h2 className="inline-flex">bencornell/fullstack</h2>
                <AnimatedButton onClick={(e) => handleButtonClick("/fullstack", choices)} className={gradientText} mode="size">
                    /ovia
                </AnimatedButton>
            </div>
            <div className="overflow-y-scroll overflow-x-hidden">
                <div className="container h-screen font-sans text-white mx-auto">
                    <div className="flex items-center">
                        <div className="mt-10 mb-10 mx-auto text-2xl font-bold whitespace-nowrap">
                            <div className="mt-12 text-center">
                                <FadeIn>
                                    <img className="m-auto w-52" src="/ovia/OviaLogo.png"/>
                                    <Typewriter className={"text-base relative bottom-5 " + gradientText}>social media for gamers</Typewriter>
                                </FadeIn>
                            </div>
                            <FadeIn delay={20}>
                                <img src="scrollicon1.gif" className="w-40 mt-20 m-auto"/>
                            </FadeIn>
                            <FadeIn className="mt-20" delay={20} inFrame={true}>
                                <MediaAndText mediaPath="ovia/OviaFeedPreview.mov" mediaTitle="Cloud Streaming" bulletPoints={
                                    ["Infinite scrolling", 
                                    "Video keys fetched from a PostgreSQL database",
                                    "Files fetched from cloud hosting",
                                    "Third party API integration"]
                                }/>
                                <MediaAndText className="mt-36" mediaPath="ovia/OviaLoginPreview.mov" mediaTitle="Authentication" bulletPoints={
                                    ["Passwords hashed, stored and fetched securely", 
                                    "JWTs and cookies for authenticating routes"]
                                } flipOrientation = {true}/>
                                <MediaAndText className="mt-36" mediaPath="ovia/OviaFeedPreview.mov" mediaTitle="Custom Profiles" bulletPoints={
                                    ["Profile data stored securely", 
                                    "Custom profile pics, bios, and display names"]
                                }/>
                                <MediaAndText className="mt-36" mediaPath="ovia/OviaFeedPreview.mov" mediaTitle="Cloud Uploading" bulletPoints={
                                    ["Video data stored securely in a PostgreSQL database", 
                                    "Files uploaded to third party cloud hosting"]
                                } flipOrientation = {true}/>
                            </FadeIn>
                            <FadeIn>
                                <AnimatedButton onClick={(e) => window.open("https://www.ovia.live")} className="block m-auto choice-button text-base border-2 p-2 rounded-lg mt-24" mode="color" textColor="hover:text-blue-400" borderColor="hover:border-blue-400">
                                    www.ovia.live
                                </AnimatedButton>
                                <div className="choice-button flex justify-center items-center space-x-2 mt-10 mb-32">
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
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ovia;
