import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";


type TypewriterProps = {
    children: string;
    className?: string;
    typeSpeed?: number;
    delay?: number;
};

//create a typewriter animation and one blinking caret
const Typewriter: React.FC<TypewriterProps> = ({ children, className, typeSpeed = 100, delay = 0}) => {
    const [index, setIndex] = useState(-delay);
    
    useEffect(() => {
        if (index < children.length) {
            setTimeout(() => {
                setIndex((prevIndex) => prevIndex + 1);
            }, typeSpeed);
        }
    }, [index, children, typeSpeed]);

    return (
        <motion.span 
            className={className}
        >
            {children.substring(0, index)}
        </motion.span>
    );
}

export default Typewriter;
