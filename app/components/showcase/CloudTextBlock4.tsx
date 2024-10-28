'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

const texts = [
  'Moderne Webseiten',
  'KI-Lösungen',
  'App-Entwicklung',
  'Custom Plugins',
]

const gradients = [
  'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500',
  'bg-gradient-to-r from-green-400 via-blue-500 to-purple-500',
  'bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500',
  'bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500',
  'bg-gradient-to-r from-red-400 via-yellow-500 to-pink-500',
]

const calculatePosition = (index: number, total: number, radius: number) => {
  const angle = (2 * Math.PI / total) * index - Math.PI / 2
  const x = 50 + radius * Math.cos(angle)
  const y = 50 + radius * Math.sin(angle)
  return { top: `${y}%`, left: `${x}%` }
}

const CloudTextBlock: React.FC = () => {
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
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.3,
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
  'Moderne Webseiten',
  'KI-Lösungen',
  'App-Entwicklung',
  'Custom Plugins',
];

const gradients = [
  'bg-gradient-to-r from-purple-400 via-pink-500 to-red-500',
  'bg-gradient-to-r from-green-400 via-blue-500 to-purple-500',
  'bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500',
  'bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500',
  'bg-gradient-to-r from-red-400 via-yellow-500 to-pink-500',
];

const calculatePosition = (index: number, total: number, radius: number) => {
  const angle = (2 * Math.PI / total) * index - Math.PI / 2;
  const x = 50 + radius * Math.cos(angle);
  const y = 50 + radius * Math.sin(angle);
  return { top: \`\${y}%\`, left: \`\${x}%\` };
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
              className={\`absolute text-3xl md:text-5xl font-bold text-transparent \${gradients[index % gradients.length]} bg-clip-text\`}
              style={{
                top: position.top,
                left: position.left,
                transform: 'translate(-50%, -50%)',
                opacity: 0,
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.3,
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

export default CloudTextBlock;`

  return (
    <div className=" ">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Cloud-Pulse-Animation</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8">
          <CloudTextBlock />
        </div>
        <div className="mt-6 text-center text-gray-600 max-w-2xl mx-auto">
          <p>
            Diese Cloud-Pulse-Animation zeigt wichtige Begriffe aus dem Bereich der Technologie und Innovation. 
            Die Wörter erscheinen, pulsieren und verblassen in einer wolkenähnlichen Formation. 
            Jedes Wort hat eine zufällige Position und Größe, was einen dynamischen und lebendigen Effekt erzeugt. 
            Diese Animation eignet sich hervorragend, um Schlüsselkonzepte oder Themenbereiche auf eine 
            ansprechende und interaktive Weise zu präsentieren.
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
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
                    {showCode ? 'Code ausblenden' : ' Code anzeigen'}
          </button>
          {copied && (
          <p className="text-green-500 mt-2 text-center">Code in die Zwischenablage kopiert!</p>
        )}
          {showCode && (
            <div className="mt-4 border rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-100 p-4 relative">
                <pre className="language-typescript overflow-x-auto">
                  <code>{codeString}</code>
                </pre>
                <button
                  className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-1 px-2 rounded"
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