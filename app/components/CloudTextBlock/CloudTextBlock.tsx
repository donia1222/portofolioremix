// app/components/CloudTextBlock.tsx

import React from 'react';
import { motion } from 'framer-motion';

const texts = [
  'Moderne Webseiten',
  'KI-Lösungen',
  'App-Entwicklung',
  'Custom Plugins',
  'Custom Komponenten',
];

const gradients = [
  'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500',
  'bg-gradient-to-r from-green-400 via-blue-500 to-purple-500',
  'bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500',
  'bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500',
  'bg-gradient-to-r from-red-400 via-yellow-500 to-pink-500',
  'bg-gradient-to-r from-green-400 via-teal-500 to-blue-500',
  'bg-gradient-to-r from-pink-400 via-red-500 to-yellow-500',
  'bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500',
  'bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-500',
  'bg-gradient-to-r from-orange-400 via-red-500 to-yellow-500',
];

const calculatePosition = (index: number, total: number, radius: number) => {
  const angle = (2 * Math.PI / total) * index - Math.PI / 2;
  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * Math.sin(angle);
  return { top: `${y}%`, left: `${x}%` };
};

const CloudTextBlock: React.FC = () => {
  const totalTexts = texts.length;
  const radius = 40;

  return (
    <div className="flex items-center justify-center py-20 mr-48">
      <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">
        {texts.map((text, index) => {
          const position = calculatePosition(index, totalTexts, radius);
          return (
            <motion.span
              key={index}
              className={`absolute text-3xl md:text-5xl font-bold text-transparent ${gradients[index % gradients.length]} bg-clip-text`}
              style={{
                top: position.top,
                left: position.left,
                transform: 'translate(-50%, -50%)',
                opacity: 0, // Oculto inicialmente
              }}
              animate={{
                y: [0, -10, 0],
                x: [0, 10, 0],
                opacity: [0, 1, 0], // Aparición progresiva con animación
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: index * 0.5,
                ease: 'easeInOut',
              }}
            >
              {text}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
};

export default CloudTextBlock;
