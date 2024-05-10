import React, { useState } from "react";
import Typewriter from "@components/Typewriter";
import FadeIn from "@components/FadeIn";
import Delay from "@components/Delay";
import AnimatedButton from "@components/AnimatedButton";
import CodeBackground from "@components/CodeBackground";
import { ChoicePageProps } from "types";
import PageHeader from "@components/PageHeader";
import { EffectCards, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';

const Fullstack: React.FC<ChoicePageProps> = ({handleButtonClick, choiceJob}) => {
    const [descriptionIndex, setDescriptionIndex] = useState<number>(0);
    const gradientText = "bg-gradient-to-tr from-blue-400 to-blue-800 text-transparent bg-clip-text";
    const choices =
    [
        ["this portfolio", "/portfolio"],
        ["haiku.best", "/haiku"],
        ["Ovia", "/ovia"],
    ];
    const descriptions =
    [
        "Animated with Framer Motion",
        "LLM integration with Meta Llama3",
        "Cloud Streaming and User Authentication",
    ];
    const links =
    [
        "www.bencornell.dev",
        "www.haiku.best",
        "www.ovia.live",
    ];

    return (
        <div className="flex flex-col justify-center overflow-y-hidden overflow-x-hidden">
            <CodeBackground/>
            <PageHeader path="" currentPage="" handleButtonClick={handleButtonClick} choices={choices} gradientText={gradientText}/>
            <div className="flex container items-center font-sans text-white mx-auto">
                <div className="mt-0 mx-auto text-2xl font-bold whitespace-nowrap">
                    <div id="choiceReadOut" className="mt-10 text-center">
                        <Typewriter className="inline-flex" delay={4}>I made&nbsp;</Typewriter>
                        <Delay className="inline-flex" duration={14}>
                            <Typewriter key={choiceJob} className={gradientText}>{choiceJob}</Typewriter>
                        </Delay>
                        <FadeIn delay={14} className="mt-4">
                            <FadeIn key={descriptionIndex} className="text-sm text-white">{descriptions[descriptionIndex]}</FadeIn>
                            <AnimatedButton onClick={(e) => window.open("https://" + links[descriptionIndex])} className="pulse-m inline-flex mx-2 choice-button text-sm border-2 p-2 rounded-lg mt-10" mode="color" textColor="hover:text-blue-400" borderColor="hover:border-blue-400">
                                {links[descriptionIndex]}
                            </AnimatedButton>
                            <AnimatedButton onClick={(e) => handleButtonClick(choices[descriptionIndex][1], choices)} className="pulse-m inline-flex mx-2 choice-button text-sm border-2 p-2 rounded-lg mt-10" mode="color" textColor="hover:text-blue-400" borderColor="hover:border-blue-400">
                                project info
                            </AnimatedButton>
                        </FadeIn>
                    </div>
                </div>
            </div>
            <FadeIn delay={14} className="mt-[10vh] mx-2 sm:mx-[23vw] select-none" inFrame={true}>
                <Swiper
                    modules={[EffectCards, Navigation]}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1}
                    navigation
                    effect="cards"
                    cardsEffect={{slideShadows: false}}
                    initialSlide={1}
                    preventClicks={true}
                    loop={true}
                    style={{
                        "--swiper-navigation-color": "#fff",
                    }}
                    onSlideChange={(e) => { handleButtonClick(choices[e.realIndex][0], choices, true); setDescriptionIndex(e.realIndex);}}
                >
                    <SwiperSlide>
                        <div className="flex justify-center">
                            <button onClick={(e) => handleButtonClick(choices[0][0], choices)} className="pulse-lg choice-button overflow-visible border-2 rounded-lg">
                                <img src="cardcovers/portfolioCardCover.jpeg" title="Portfolio Card" className="rounded-lg h-[40vh] sm:h-[40vh]"/>
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center">
                            <button onClick={(e) => handleButtonClick(choices[1][0], choices)} className="pulse-lg choice-button overflow-visible border-2 rounded-lg">
                                <img src="cardcovers/haikuCardCover.jpeg" title="Haiku Card" className="rounded-lg h-[40vh] sm:h-[40vh]"/>
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center">
                            <button onClick={(e) => handleButtonClick(choices[2][0], choices)} className="pulse-lg choice-button overflow-visible border-2 rounded-lg">
                                <video loop autoPlay playsInline muted src="ovia/OviaFeedPreview.mp4" title="Ovia Card" className="rounded-lg h-[40vh] sm:h-[40vh]"/>
                            </button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </FadeIn>
        </div>
    );
};

export default Fullstack;
