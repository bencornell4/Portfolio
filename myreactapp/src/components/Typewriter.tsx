import React, {useState, useEffect} from "react";
import { motion, AnimatePresence } from "framer-motion";


type TypewriterProps = {
    children: string;
    className?: string;
    typeSpeed?: number;
    delay?: number;
};

//create a typewriter animation and one blinking caret
const Typewriter: React.FC<TypewriterProps> = ({ children, className, typeSpeed = 100, delay = 1000 }) => {
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        if (index < children.length) {
            console.log(children);

            setTimeout(() => {
                setIndex((prevIndex) => prevIndex + 1);
            }, typeSpeed);
        }
    }, [index, children, typeSpeed]);

    return (
        <AnimatePresence>
            <motion.span 
                key={children}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: index === children.length ? delay : 0 }}
                className={className}
            >
                {children.substring(0, index)}
            </motion.span>
        </AnimatePresence>
    );
}

export default Typewriter;
