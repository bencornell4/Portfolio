import React, {useEffect} from "react";
import {motion, useAnimation} from 'framer-motion';
import { useInView } from "react-intersection-observer";

type FadeInProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    inFrame?: boolean;
}

const FadeIn: React.FC<FadeInProps> = ({children, className, delay = 0, duration = 2, inFrame = false}) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.5
    });

    useEffect(() => {
        if (inView || inFrame) {
            const timeoutId = setTimeout(() => {
                controls.start({opacity:1});
            }, 100 * delay);
    
            return () => clearTimeout(timeoutId);
        } else {
            controls.start({opacity:0});
        }
    }, [controls, delay, inView]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={ controls }
            transition={{ duration: duration, ease: 'easeInOut' }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;