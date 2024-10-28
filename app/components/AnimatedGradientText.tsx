// app/components/AnimatedGradientText.tsx

import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

type AnimatedGradientTextProps = {
  texts: string[];
  className?: string;
};

const AnimatedGradientText: React.FC<AnimatedGradientTextProps> = ({
  texts,
  className = '',
}) => {
  const [text] = useTypewriter({
    words: texts,
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className={`text-4xl sm:text-5xl md:text-6xl font-bold ${className}`}>
      <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
        {text}
      </span>
      <Cursor cursorColor="#fff" />
    </div>
  );
};

export default AnimatedGradientText;
