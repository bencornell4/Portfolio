import React, {useState, useEffect} from "react";
import Typewriter from "../components/Typewriter";

const Home: React.FC = () => {

    const [choiceJob, setChoiceJob] = useState<string>("...");
    const gradientText = "bg-gradient-to-tr from-blue-800 to-indigo-500 text-transparent bg-clip-text";
    useEffect(() => {
        setChoiceJob(". . .");
    }, []);

    const handleButtonClick = (choice: EventTarget) => {
        setChoiceJob(choice.textContent);
        //hide choices
    }

    return (
        <div>
            <div className="flex items-center h-screen">
                <div className="mx-auto text-2xl font-bold">
                    <h2 className="inline-flex">I'm&nbsp;</h2>
                    <Typewriter text={"Ben Cornell"} className={"inline-flex " + gradientText}/>
                    <h2 className="mt-4">I'm a . . .</h2>
                    <div className="mt-4">
                        <div className="rounded-md bg-gradient-to-tr from-blue-800 to-indigo-500 bg-clip-text">
                            <div className="mt-8">
                                <button onClick={(e) => handleButtonClick(e.target)} className="text-base text-transparent">Software Developer</button>
                            </div>
                            <div className="mt-4">
                                <button onClick={(e) => handleButtonClick(e.target)} className="text-base text-transparent">Writer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
