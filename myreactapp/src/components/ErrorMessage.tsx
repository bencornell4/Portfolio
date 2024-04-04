import React, { useState, useEffect } from 'react';
import { ErrorProps } from '../types';

const ErrorMessage: React.FC<ErrorProps> = ({ message, timeoutLength }) => {
    const [showError, setShowError] = useState(true);

    useEffect(() => {
        setShowError(true);

        const timeoutId = setTimeout(() => {
            setShowError(false);
        }, timeoutLength);

        return () => {
            clearTimeout(timeoutId);
        }
    }, [timeoutLength]);

    return (
        <div>
            {showError && (
                <div className='text-red-700 py-3' role="alert">
                    {message}
                </div>
            )}
        </div>
    );
};

export default ErrorMessage;
