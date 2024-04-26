import React, {useState, useEffect} from "react";
import FadeIn from "./FadeIn";

type MediaAndTextProps = {
    className?: string;
    mediaPath: string;
    mediaTitle: string;
    bulletPoints: string[];
    flipOrientation?: boolean;
}

const MediaAndText: React.FC<MediaAndTextProps> = ({className, mediaPath, mediaTitle, bulletPoints, flipOrientation = false}) => {

    const mediaContent = (  <div className={`${flipOrientation ? "mr-5" : "ml-5"} sm:mx-5 inline-flex text-center`}>
                                <video className="max-h-[80vh] max-w-[40vw] sm:max-w-52" preload="none" loop autoPlay muted playsInline src={mediaPath}/>
                            </div> );
    const textContent = (   <div className="m-auto sm:mx-5 inline-flex relative">
                                <div className={`mx-5 max-w-[50vw] sm:w-60 ${flipOrientation ? "text-right": "text-left"}`}>
                                    <h2 className={`text-center text-base sm:text-2xl white border-b-4 bg-gradient-to-tr from-blue-400 to-blue-800 p-1 px-4 mb-7 sm:mb-10 rounded-sm border-transparent bg-clip-border bg-transparent`}>
                                        {mediaTitle}
                                    </h2>
                                    {bulletPoints.map((item, index) => (
                                        <p key={index} className={`mt-5 sm:mt-10 text-sm sm:text-base whitespace-normal`}>
                                            {item}
                                        </p>
                                    ))}
                                </div>        
                            </div> );
    
    return(
        <FadeIn className={"flex m-auto justify-center max-h-[80vh] sm:max-w-[50vw] max-w-[30vw] " + className}>
            {!flipOrientation && mediaContent}
            {!flipOrientation && textContent}
            {flipOrientation && textContent}
            {flipOrientation && mediaContent}
        </FadeIn>
    );
}

export default MediaAndText;