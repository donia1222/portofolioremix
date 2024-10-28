// app/components/PrismTextBlock.tsx

import React from 'react';
import { motion } from 'framer-motion';

const texts = [
  'Innovative Solutions',
  'AI Development',
  'Custom Plugins',
  'Modern Websites',
];

const gradients = [
  'bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500',
  'bg-gradient-to-r from-blue-400 via-indigo-500 to-teal-500',
  'bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500',
  'bg-gradient-to-r from-green-400 via-blue-500 to-indigo-500',
];

const calculatePosition = (index: number, total: number, radius: number) => {
  const angle = (2 * Math.PI / total) * index - Math.PI / 2;
  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * Math.sin(angle);
  return { top: `${y}%`, left: `${x}%` };
};

const PrismTextBlock: React.FC = () => {
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
                scale: [0, 1, 1.2, 1],
                opacity: [0, 1, 1, 0], // Aparición y desaparición gradual
                filter: ['blur(10px)', 'blur(2px)', 'blur(0px)', 'blur(2px)'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.5,
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

export default PrismTextBlock;
