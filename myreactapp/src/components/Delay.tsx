import React, {useState, useEffect} from "react";

type DelayProps = {
    children: React.ReactNode;
    className?: string;
    duration?: number;
}

const Delay: React.FC<DelayProps> = ({children, duration = 1, className}) => {
    const [display, setDisplay] = useState(false);
    
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDisplay(true);
        }, 100 * duration);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className={className}>
            {display && children}
        </div>
    );
};

export default Delay;
