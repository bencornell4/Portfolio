import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface Star {
  id: string;
  size: number;
  x: number;
  y: number;
}

const generateStars = (count: number): Star[] => {
  return Array.from({ length: count }, (_, index) => ({
    id: `star-${index}`,
    size: Math.random() * 3 + 1, // Random size between 1 and 4
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
  }));
};

const StarBackground: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(generateStars(200)); // Generate 100 stars
  }, []);

  return (
    <div className="absolute -z-10 bg-gradient-to-t from-gray-800 to-gray-900 w-full h-screen overflow-hidden">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          initial={{ opacity: 0, x: star.x, y: star.y }}
          animate={{ opacity: 1, y: [star.y, star.y + 1000] }}
          transition={{
            duration: Math.random() * 5 + 2, // Random duration between 2 and 7 seconds
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute"
          style={{
            width: star.size,
            height: star.size,
            backgroundColor: 'white',
            borderRadius: '50%',
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
