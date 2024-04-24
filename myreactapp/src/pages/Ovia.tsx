import React, { lazy } from "react";
import Typewriter from "@components/Typewriter";
import FadeIn from "@components/FadeIn";
import Delay from "@components/Delay";
import AnimatedButton from "@components/AnimatedButton";
import CodeBackground from "@components/CodeBackground";
import { ChoicePageProps } from "types";
import MediaAndText from "@components/MediaAndText";

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
                                    <Typewriter className={"text-base relative bottom-5 " + gradientText}>a social media app for gamers</Typewriter>
                                </FadeIn>
                            </div>
                            <FadeIn className="mt-40" delay={20} inFrame={true}>
                                <MediaAndText mediaPath="ovia/OviaFeedPreview.mov" mediaTitle="Cloud Streaming" bulletPoints={
                                    ["Infinitely scrolling feed", 
                                    "Video data stored securely in a PostgreSQL database", 
                                    "Files stored and fetched from third party Cloudinary API"]
                                }/>
                                <MediaAndText mediaPath="ovia/OviaLoginPreview.mov" mediaTitle="Authentication" bulletPoints={
                                    ["Passwords hashed, stored and fetched securely", 
                                    "JWTs and cookies for authenticating routes"]
                                }/>
                                {/*<FadeIn>
                                    <div className="inline-flex">
                                        <div className="text-center ml-5 lg:mr-10">
                                            <video className="h-[80vh]" loop autoPlay muted playsInline src="ovia/OviaFeedPreview.mov"/>
                                        </div>
                                    </div>
                                    <div className="inline-flex">
                                        <div className="relative text-left ml-10 mr-10 lg:ml-10 w-52 bottom-[24rem]">
                                            <h2 className={"text-left text-xl white bg-gradient-to-tr from-blue-400 to-blue-800 p-1 pl-4 mr-5 mb-20 rounded-lg"}>
                                                Cloud Streaming
                                            </h2>
                                            <p className="text-sm whitespace-normal">
                                                Infinitely scrolling feed
                                            </p>
                                            <p className="mt-10 text-sm whitespace-normal">
                                                Video data stored securely in a PostgreSQL database
                                            </p>
                                            <p className="mt-10 text-sm whitespace-normal">
                                                Files stored and fetched from third party API
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>*/}
                                <FadeIn>
                                    <div className="inline-flex md:flex">
                                        <div className="relative text-center mr-5 w-52 bottom-[23rem]">
                                            <h2 className={"text-2xl white bg-gradient-to-tr from-blue-400 to-blue-800 p-1 mb-20 rounded-lg"}>
                                                Authentication
                                            </h2>
                                            <p className="text-base whitespace-normal">
                                                Passwords hashed, stored and fetched securely
                                            </p>
                                            <p className="mt-10 text-base whitespace-normal">
                                                JWTs and cookies for authenticating routes
                                            </p>
                                        </div>
                                    </div>
                                    <div className="inline-flex md:flex">
                                        <div className="text-center">
                                            <video className="h-[80vw]" loop autoPlay muted playsInline src="ovia/OviaLoginPreview.mov"/>
                                        </div>
                                    </div>
                                </FadeIn>
                                <div>
                                    <div className="md:flex mt-20">
                                        <FadeIn className="text-center m-auto w-96">
                                            <video loop autoPlay muted playsInline src="ovia/OviaLoginPreview.mov"/>
                                            <h2 className={"m-auto text-3xl z-10 relative bottom-[15rem] white bg-gradient-to-tr from-blue-400 to-blue-800 p-2 mx-16 rounded-lg"}>Authentication</h2>
                                        </FadeIn>
                                    </div>
                                    <div className="md:flex">
                                        <FadeIn className="text-center m-auto w-52">
                                            <p className="text-base whitespace-normal">
                                                Passwords hashed, stored and fetched securely.
                                            </p>
                                            <p className="mt-10 text-base whitespace-normal">
                                                JWTs and cookies for authenticating routes.
                                            </p>
                                        </FadeIn>
                                    </div>
                                </div>
                                <div>
                                    <div className="md:flex mt-20">
                                        <FadeIn className="text-center m-auto w-96">
                                            <video loop autoPlay muted playsInline src="/ovia/OviaFeedPreview.mov"/>
                                            <h2 className={"m-auto text-3xl z-10 relative bottom-[15rem] white drop-shadow-md bg-gradient-to-tr from-blue-400 to-blue-800 p-2 mx-16 rounded-lg"}>Custom Profiles</h2>
                                        </FadeIn>
                                    </div>
                                    <div className="md:flex">
                                        <FadeIn className="text-center m-auto w-52">
                                            <p className="text-base whitespace-normal">
                                                Profile data stored securely.
                                            </p>
                                            <p className="mt-10 text-base whitespace-normal">
                                                Custom profile pics, bios, and display names.
                                            </p>
                                        </FadeIn>
                                    </div>
                                </div>
                                <div>
                                    <div className="md:flex mt-20">
                                        <FadeIn className="text-center m-auto w-96">
                                            <video loop autoPlay muted playsInline src="/ovia/OviaFeedPreview.mov"/>
                                            <h2 className={"m-auto text-3xl z-10 relative bottom-[15rem] white drop-shadow-md bg-gradient-to-tr from-blue-400 to-blue-800 p-2 mx-16 rounded-lg"}>Cloud Uploading</h2>
                                        </FadeIn>
                                    </div>
                                    <div className="md:flex">
                                        <FadeIn className="text-center m-auto w-52">
                                            <p className="text-base whitespace-normal">
                                                Upload to the cloud.
                                            </p>
                                        </FadeIn>
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

export default Ovia;
