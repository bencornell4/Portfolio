import React, {useEffect, useRef} from "react";

type TypewriterProps = {
    text: string;
    className: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, className }) => {
    const elementRef = useRef<HTMLHeadingElement>(null);
    
    useEffect(() => {
        const element = elementRef.current;
        if (element) {
            const contentWidth = `${element.scrollWidth}px`;
            element.style.width = '0px';
            element.style.overflow = 'hidden';
            
            const typing = [
                {width: '0px'},
                {width: contentWidth}
            ];

            const blink = [
                {offset: 0.2, borderColor: "transparent"},
                {offset: 1, borderColor: "white"}
            ];

            element.animate(typing, {
                duration: 1200,
                fill:'forwards',
                easing: 'steps(20,end)'
            });

            element.animate(blink, {
                duration: 800,
                iterations: Infinity
            });
        }
    }, [text])

    return (
        <h2 ref={elementRef} className={`w-[max-content] overflow-hidden whitespace-nowrap border-r-4 pr-2 border-r-white ${className}`}>
            {text}
        </h2>
    );
}

export default Typewriter;
