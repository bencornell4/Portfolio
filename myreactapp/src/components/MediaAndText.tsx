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
    
    const mediaContent = (  <div className="inline-flex">
                                <div className="text-center ml-5 mr-5">
                                    <video className="h-[80vh]" preload="none" loop autoPlay muted playsInline src={mediaPath}/>
                                </div>
                            </div> );
    const textContent = (   <div className="inline-flex relative bottom-[24rem]">
                                <div className="text-left ml-5 mr-5 w-52">
                                    <h2 className={"text-left text-xl white border-b-4 bg-gradient-to-tr from-blue-400 to-blue-800 p-1 pl-4 mr-5 mb-10 rounded-sm border-transparent bg-clip-border bg-transparent"}>
                                        {mediaTitle}
                                    </h2>
                                    {bulletPoints.map((item, index) => (
                                        <p key={index} className="mt-10 text-sm whitespace-normal">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </div> );
    
    return(
        <FadeIn className={"h-[80vh] " + className}>
            {!flipOrientation && mediaContent}
            {!flipOrientation && textContent}
            {flipOrientation && textContent}
            {flipOrientation && mediaContent}
        </FadeIn>
    );
}

export default MediaAndText;