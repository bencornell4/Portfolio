
import React from "react";
import AnimatedButton from "./AnimatedButton";

type PageHeaderProps = {
    path: string;
    currentPage: string;
    handleButtonClick: (buttonSelected: string, choices: Array<string[]>) => void;
    choices: string[][];
    gradientText: string;
    className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({currentPage, path, className, handleButtonClick, choices, gradientText}) => {

    return (
        <div className="h-[4rem]">
            <div className={'fixed top-2 left-2 text-base font-bold p-4 z-50 font-sans text-white'}>
                <h2 className="inline-flex">{`${(path=="") ? "bencornell" : "bencornell/"}` + path}</h2>
                <AnimatedButton onClick={(e) => handleButtonClick("/" + path, choices)} className={gradientText} mode="size">
                    {currentPage}
                </AnimatedButton>
            </div>
            <div className={'align-center fixed top-0 right-2 text-base font-bold p-4 z-50 font-sans text-white'}>
                <AnimatedButton onClick={(e) => handleButtonClick("/resume", choices)} className="pulse-m mx-2 text-sm border-2 p-2 rounded-lg" mode="color" textColor="hover:text-blue-400" borderColor="hover:border-blue-400">
                    resume
                </AnimatedButton>
            </div>
        </div>
    );
};

export default PageHeader;