import React from "react";
import CodeBackground from "@components/CodeBackground";
import PageHeader from "@components/PageHeader";
import { ChoicePageProps } from "types";

const Resume: React.FC<ChoicePageProps> = ({handleButtonClick, choiceJob}) => {
    const gradientText = "bg-gradient-to-tr from-blue-400 to-blue-800 text-transparent bg-clip-text";
    const choices = [[]];

    return (
        <div>
            <CodeBackground/>
            <PageHeader path="" currentPage="/resume" handleButtonClick={handleButtonClick} choices={choices} gradientText={gradientText} includeResume={false}/>
            <div className="-mt-14 px-10 h-screen w-full font-mono text-white mx-auto">
                <div>
                    <div className="flex items-center h-screen">
                        <iframe
                            src="https://pdflink.to/benfullstack/embed/"
                            className="border-none w-[100%] h-[61%] sm:h-[80%] sm:mt-8"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
