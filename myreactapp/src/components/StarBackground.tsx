import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

interface Star {
  id: string;
  size: number;
  x: number;
  y: number;
}

const generateStars = (count: number): Star[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: `star-${index}`,
    size: Math.random() * 2 + 4, // Random size between 4 and 6
    x: Math.random() * window.screen.width,
    y: (Math.random() * window.screen.height) - window.screen.height,
  }));
};

const StarBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/"))
    {
      const timeoutId = setTimeout(() => {
        setStars(generateStars(0));
      }, 300);

      return () => clearTimeout(timeoutId);
    } else {
      setStars(generateStars(50)); // Generate x stars 
    }
  }, [location]);

  return (
    <div className="absolute -z-10 bg-gradient-to-t from-gray-800 to-gray-900 w-full h-screen overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ x: star.x, y: star.y }}
          animate={{ y: [star.y, star.y + 2 * window.screen.height] }}
          transition={{
            duration: Math.random() * 5 + 5, // Random duration between 2 and 7 seconds
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bg-white"
          style={{
            width: star.size,
            height: star.size,
            opacity: Math.random() / 2,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
