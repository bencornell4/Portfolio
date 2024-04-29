import { useEffect, useState } from "react";

type QuietErrorsProps = {
    children: React.ReactNode;
    className?: string;
}

const QuietError: React.FC<QuietErrorsProps> = ({children, className}) => {
    const [errorThrown, setErrorThrown] = useState(false);
    
    const handleError = () => {
        console.log("test");
        setErrorThrown(true);
    };

    window.addEventListener('error', handleError);

    try {
        return(
            <div className={className}>
                {children}
            </div>
        );
    } catch (error) {
        return(
            <div/>
        );
    }
}

export default QuietError;