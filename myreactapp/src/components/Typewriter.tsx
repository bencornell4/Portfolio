import React, {ReactNode, createContext, useContext, useEffect, useRef, useState} from "react";

interface TypewriterContextProps {
    activeTypewriter: string | null;
    setActiveTypewriter: (id: string | null) => void;
}

//create context for Typewriter
const TypewriterContext = createContext<TypewriterContextProps>({
    activeTypewriter: null,
    setActiveTypewriter: () => {},
});

interface TypewriterProviderProps {
    children: ReactNode;
}

//create a provider that can set context
export const TypewriterProvider: React.FC<TypewriterProviderProps> = ({ children }) => {
    const [activeTypewriter, setActiveTypewriter] = useState<string | null>(null);

    return (
        <TypewriterContext.Provider value={{ activeTypewriter, setActiveTypewriter}}>
            {children}
        </TypewriterContext.Provider>
    )
};

type TypewriterProps = {
    children: React.ReactNode;
    className?: string;
    id: string;
};

//create a typewriter animation and one blinking caret
const Typewriter: React.FC<TypewriterProps> = ({ children, className, id }) => {
    const { activeTypewriter, setActiveTypewriter } = useContext(TypewriterContext);
    const elementRef = useRef<HTMLHeadingElement>(null);
    const blinkAnimationRef = useRef<Animation | null>(null);
    var border = "border-r-4";
    
    useEffect(() => {
        //typewriter animation
        const element = elementRef.current;
        if (element && element.textContent) {
            const textLength = element.textContent.length;
            const contentWidth = `${element.scrollWidth}px`;
            element.style.width = '0px';
            element.style.overflow = 'hidden';
            
            const typing = [
                {width: '0%'},
                {width: contentWidth}
            ];

            const blink = [
                {offset: 0.2, borderColor: "transparent"},
                {offset: 1, borderColor: "white"}
            ];

            element.animate(typing, {
                duration: textLength * 100,
                fill:'forwards',
                easing: `steps(${textLength},end)`
            })

            //blinking animation only if active type writer
            if (activeTypewriter === id) {
                blinkAnimationRef.current = element.animate(blink, {
                    duration: 800,
                    iterations: Infinity
                });
            }

            //set active typewriter
            setActiveTypewriter(id);
        }
    }, [children, activeTypewriter, setActiveTypewriter, id])

    useEffect(() => {
        if (activeTypewriter !== id) {
            blinkAnimationRef.current?.cancel();
            if (elementRef.current) {
                elementRef.current.className = `w-[max-content] whitespace-nowrap ${className}`;
                console.log(elementRef.current.className);
            }
        } else {
            if (elementRef.current) {
                elementRef.current.className = `w-[max-content] overflow-hidden whitespace-nowrap ${border} pr-2 border-r-white ${className}`;
            }
        }
    }, [activeTypewriter])

    return (
        <h2 ref={elementRef} className={`w-[max-content] overflow-hidden whitespace-nowrap ${border} pr-2 border-r-white ${className}`}>
            {children}
        </h2>
    );
}

export default Typewriter;
