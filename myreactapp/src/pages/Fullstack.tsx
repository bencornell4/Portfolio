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
        ["this portfolio", "/fullstack/portfolio"],
        ["haiku.best", "/fullstack/haiku"],
        ["Ovia", "/fullstack/ovia"],
    ]
    const descriptions =
    [
        "Animated with Framer Motion",
        "Integrated LLM using Meta Llama3",
        "Cloud Streaming and User Authentication"
    ]

    return (
        <div className="overflow-y-scroll sm:overflow-y-hidden overflow-x-hidden">
            <CodeBackground/>
            <PageHeader path="" currentPage="/fullstack" handleButtonClick={handleButtonClick} choices={choices} gradientText={gradientText}/>
            <div>
                <div className="container font-sans text-white mx-auto">
                    <div className="flex items-center">
                        <div className="mt-0 mb-10 mx-auto text-2xl font-bold whitespace-nowrap">
                            <div id="choiceReadOut" className="mt-10 text-center">
                                <Typewriter className="inline-flex" delay={4}>I made&nbsp;</Typewriter>
                                <Delay className="inline-flex" duration={14}>
                                    <Typewriter key={choiceJob} className={gradientText}>{choiceJob}</Typewriter>
                                </Delay>
                                <Delay duration={14} className="mt-4">
                                    <FadeIn key={descriptionIndex} className="text-sm text-white">{descriptions[descriptionIndex]}</FadeIn>
                                </Delay>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FadeIn className=" w-[22rem] sm:w-96 m-auto select-none">
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
                                <img src="cardcovers/portfolioCardCover.jpeg" title="Portfolio Card" className="rounded-lg h-[50vh]"/>
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center">
                            <button onClick={(e) => handleButtonClick(choices[1][0], choices)} className="pulse-lg choice-button overflow-visible border-2 rounded-lg">
                                <img src="cardcovers/haikuCardCover.jpeg" title="Haiku Card" className="rounded-lg h-[50vh]"/>
                            </button>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex justify-center">
                            <button onClick={(e) => handleButtonClick(choices[2][0], choices)} className="pulse-lg choice-button overflow-visible border-2 rounded-lg">
                                <video loop autoPlay playsInline muted src="ovia/OviaFeedPreview.mp4" title="Ovia Card" className="rounded-lg h-[50vh]"/>
                            </button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </FadeIn>
        </div>
    );
};

export default Fullstack;
