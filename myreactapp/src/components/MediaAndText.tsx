import React, {useState, useEffect} from "react";
import FadeIn from "./FadeIn";

type MediaAndTextProps = {
    className?: string;
    mediaPath: string;
    mediaTitle: string;
    bulletPoints: string[];
    orientation?: string;
}

const MediaAndText: React.FC<MediaAndTextProps> = ({className, mediaPath, mediaTitle, bulletPoints, orientation = "left"}) => {
    return(
        <FadeIn>
            <div className="inline-flex">
                <div className="text-center ml-5 lg:mr-10">
                    <video className="h-[80vh]" loop autoPlay muted playsInline src={mediaPath}/>
                </div>
            </div>
            <div className="inline-flex">
                <div className="relative text-left ml-10 mr-10 lg:ml-10 w-52 bottom-[24rem]">
                    <h2 className={"text-left text-xl white bg-gradient-to-tr from-blue-400 to-blue-800 p-1 pl-4 mr-5 mb-10 rounded-lg"}>
                        {mediaTitle}
                    </h2>
                    {bulletPoints.map((item) => (
                        <p className="mt-10 text-sm whitespace-normal">
                            {item}
                        </p>
                    ))}
                </div>
            </div>
        </FadeIn>
    );
}

export default MediaAndText;