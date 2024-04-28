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
            <PageHeader path="fullstack" currentPage="/resume" handleButtonClick={handleButtonClick} choices={choices} gradientText={gradientText} includeResume={false}/>
            <div className="-mt-14 px-10 h-screen w-full font-mono text-white mx-auto">
                <div>
                    <div className="flex items-center h-screen">
                    <iframe
                        src="https://drive.google.com/file/d/1sFADEmq-aqg71Ph5aB84hF80aIVQ9ycS/preview" 
                        width="100%" 
                        height="61%"
                        className="sm:h-[80%] sm:mt-8 border-0 bg-none"
                    />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
