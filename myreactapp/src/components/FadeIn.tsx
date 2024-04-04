import React, {useEffect} from "react";
import {motion, useAnimation} from 'framer-motion';

type FadeInProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
}

const FadeIn: React.FC<FadeInProps> = ({children, className, delay = 0, duration = 2}) => {
    const controls = useAnimation();

    useEffect(() => {
        const timer = setTimeout(() => {
            controls.start({opacity:1});
        }, 100 * delay);

        return () => clearTimeout(timer);
    }, [controls, delay]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={ controls }
            transition={{ duration: duration }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;