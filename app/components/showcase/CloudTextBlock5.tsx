'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const texts = [
  'Innovative Solutions',
  'AI Development',
  'Custom Plugins',
  'Modern Websites',
]

const gradients = [
  'bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500',
  'bg-gradient-to-r from-blue-400 via-indigo-500 to-teal-500',
  'bg-gradient-to-r from-yellow-400 via-red-500 to-purple-500',
  'bg-gradient-to-r from-green-400 via-blue-500 to-indigo-500',
]

const calculatePosition = (index: number, total: number, radius: number) => {
  const angle = (2 * Math.PI / total) * index - Math.PI / 2
  const x = 50 + radius * Math.cos(angle)
  const y = 50 + radius * Math.sin(angle)
  return { top: `${y}%`, left: `${x}%` }
}

const PrismTextBlock: React.FC = () => {
  const totalTexts = texts.length
  const radius = 40

  return (
    <div className="flex items-center justify-center py-20 mr-48">
      <div className="relative w-96 h-96 md:w-[500px] md:h-[500px]">
        {texts.map((text, index) => {
          const position = calculatePosition(index, totalTexts, radius)
          return (
            <motion.span
              key={index}
              className={`absolute text-3xl md:text-5xl font-bold text-transparent ${gradients[index % gradients.length]} bg-clip-text`}
              style={{
                top: position.top,
                left: position.left,
                transform: 'translate(-50%, -50%)',
                opacity: 0,
              }}
              animate={{
                scale: [0, 1, 1.2, 1],
                opacity: [0, 1, 1, 0],
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
          )
        })}
      </div>
    </div>
  )
}

export default function Component() {
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)

  const toggleCode = () => setShowCode(!showCode)

  const copyCode = () => {
    navigator.clipboard.writeText(codeString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const codeString = `import React from 'react';
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
  return { top: \`\${y}%\`, left: \`\${x}%\` };
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
              className={\`absolute text-3xl md:text-5xl font-bold text-transparent \${gradients[index % gradients.length]} bg-clip-text\`}
              style={{
                top: position.top,
                left: position.left,
                transform: 'translate(-50%, -50%)',
                opacity: 0,
              }}
              animate={{
                scale: [0, 1, 1.2, 1],
                opacity: [0, 1, 1, 0],
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

export default PrismTextBlock;`

  return (
    <div className="">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6  text-blue-600">Prismatische Textanimation</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8">
          <PrismTextBlock />
        </div>
        <div className="mt-6 text-center text-gray-600 max-w-2xl mx-auto">
          <p>
            Diese prismatische Textanimation präsentiert verschiedene Aspekte unserer Dienstleistungen 
            in einer dynamischen und fesselnden Weise. Jeder Text erscheint, skaliert sanft, 
            und verblasst wieder mit einem einzigartigen Unschärfeeffekt. Die Verwendung von 
            Farbverläufen und Bewegung erzeugt einen lebendigen, prismatischen Effekt, der die 
            Aufmerksamkeit des Betrachters fesselt.
          </p>
          <div className="font-bold">
          <p>
            TypeScript & Tailwind CSS
          </p>
          </div>
        </div>
        <div className="mt-8">
          <button
            onClick={toggleCode}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
                    {showCode ? 'Code ausblenden' : ' Code anzeigen'}
          </button>
          {copied && (
          <p className="text-green-500 mt-2 text-center">Code in die Zwischenablage kopiert!</p>
        )}
          {showCode && (
            <div className="mt-4 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-800 p-4 relative">
                <pre className="language-typescript overflow-x-auto text-gray-300">
                  <code>{codeString}</code>
                </pre>
                <button
                  className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded"
                  onClick={copyCode}
                  aria-label="Copiar código"
                >
        Code kopieren
                </button>
              </div>
            </div>
          )}
 
        </div>
      </div>
    </div>
  )
}