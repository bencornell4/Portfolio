import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedButtonProps {
    className?: string;
    children: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    mode?: string;
    textColor?: string;
    borderColor?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({children, className, onClick, mode, textColor, borderColor}) => {
    const [animationMode, setAnimationMode] = useState<string>("");

    useEffect(() => {
        if (mode == "color") {
            setAnimationMode(" " + textColor + " " + borderColor + " transition-colors duration-150");
        } else if (mode == "size") {
            setAnimationMode(" transform hover:scale-105 transition-transform duration-300");
        }
    }, [])

    return (
        <motion.button
            className={className + animationMode}
            onClick={onClick}
            type="button"
        >
            {children}
        </motion.button>
    )
}

export default AnimatedButton;