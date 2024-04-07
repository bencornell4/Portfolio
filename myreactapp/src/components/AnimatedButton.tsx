import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedButtonProps {
    className?: string;
    children: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    mode?: string;
    color?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({children, className, onClick, mode, color}) => {
    const [animationMode, setAnimationMode] = useState<string>("");

    useEffect(() => {
        if (mode == "color") {
            setAnimationMode("hover:text-" + color + " hover:border-" + color + " transition-colors duration-150");
        } else if (mode == "size") {
            setAnimationMode("transform hover:scale-105 transition-transform duration-300 ");
        }
    }, [])

    return (
        <motion.button
            className={animationMode + className}
            onClick={onClick}    
        >
            {children}
        </motion.button>
    )
}

export default AnimatedButton;