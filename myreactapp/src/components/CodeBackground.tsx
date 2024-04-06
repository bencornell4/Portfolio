import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface FallingCode {
  id: string;
  size: number;
  x: number;
  y: number;
  digit: number;
}

const generateFallingCode = (count: number): FallingCode[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: `digit-${index}`,
    size: Math.random() * 2 + 2, // Random size between 1 and 4
    x: (Math.random() * window.screen.width) - window.screen.width,
    y: Math.random() * window.screen.height,
    digit: Math.random() < 0.5 ? 0 : 1,
  }));
};

const CodeBackground: React.FC = () => {
  const [fallingCode, setFallingCode] = useState<FallingCode[]>([]);

  useEffect(() => {
    setFallingCode(generateFallingCode(50)); // Generate x digits
  }, []);

  return (
    <div className="absolute -z-10 w-full h-screen overflow-hidden">
      {fallingCode.map((digit) => (
        <motion.div
          key={digit.id}
          initial={{ x: digit.x, y: digit.y }}
          animate={{ x: digit.x + 2 * window.screen.width }}
          transition={{
            duration: Math.random() * 7 + 7, // Random duration between 2 and 7 seconds
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute text-white font-mono -z-10"
          style={{
            opacity: (Math.random() / 2) -0.2,
          }}
        >
          {digit.digit}
        </motion.div> 
      ))}
    </div>
  );
};

export default CodeBackground;
