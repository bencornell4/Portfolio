import React, {useState} from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AnimatedButton from "@components/AnimatedButton";

const Fullstack: React.FC = () => {
    const [fadeOut, setFadeOut] = useState<boolean>(false);
    const gradientText = "bg-gradient-to-tr from-blue-400 to-blue-800 text-transparent bg-clip-text";
    const navigate = useNavigate();


    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        var typeDelay = 0;
        var path = "/writer";
        const choice = event.currentTarget.textContent;
        
        const timeoutId = setTimeout(() => {
            setFadeOut(true);
            navigatePage(path);
        }, typeDelay);

        return () => clearTimeout(timeoutId);
    };

    function navigatePage(path: string) {
        const timeoutId = setTimeout(() => {
            navigate(path);
        }, 1000);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: "50%" }} // Initial position (below the viewport)
            animate={{ opacity: 1, y: !fadeOut ? "0%" : "-100%"}} // Final position (slide up into view)
            exit={{ opacity: 0, y: "-50%" }} // Exit animation (slide up and fade out)
            transition={{ duration: 1 }} // Animation duration
        >
            <div className={'fixed top-0 left-2 mx-auto text-base text-white font-bold p-4 z-50 font-mono '}>
                <h2 className="inline-flex">bencornell/writer</h2>
                <AnimatedButton onClick={(e) => handleButtonClick(e)} className={gradientText} mode="size">
                    /faces
                </AnimatedButton>
            </div>
            <div className={'fixed text-right top-0 right-2 mx-auto text-base text-white font-bold p-4 z-50 font-mono'}>
                <h2 className="inline-flex">650-421-5868</h2>
                <h2 className="">bencornell44@gmail.com</h2>
            </div>
            <div className="px-4 h-screen w-full font-mono text-white mx-auto">
                <div>
                    <div className="flex items-center h-screen">
                    <iframe 
                        src="https://drive.google.com/file/d/1-qspm6856dm44tHVQI06AS2iuzbrqT5n/preview" 
                        loading="lazy"
                        width="100%" 
                        height="80%"
                        className="mt-8 border-0 bg-none"
                    />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Fullstack;
