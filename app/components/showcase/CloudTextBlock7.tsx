'use client'

import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

const texts = [
  'Moderne Webseiten',
  'KI-Lösungen',
  'App-Entwicklung',
  'Custom Plugins',
  'Custom Komponenten',
]

const gradients = [
  'from-purple-400 via-pink-500 to-yellow-500',
  'from-blue-400 via-indigo-500 to-teal-500',
  'from-yellow-400 via-red-500 to-purple-500',
  'from-green-400 via-blue-500 to-indigo-500',
]

const calculatePosition = (index: number, total: number, progress: number, isComplete: boolean) => {
  if (isComplete) {
    return { x: '0%', y: `${index * 120}%` }
  }
  const angle = ((2 * Math.PI) / total) * index + progress * 5
  const radius = 40 + Math.sin(progress * 2) * 20
  const x = 50 + radius * Math.cos(angle)
  const y = 50 + radius * Math.sin(angle)
  return { x: `${x}%`, y: `${y}%` }
}

function TextTornadoOnce() {
  const [progress, setProgress] = useState(0.01)
  const [animationComplete, setAnimationComplete] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    let interval: NodeJS.Timeout

    const animateTornado = async () => {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 2 * Math.PI) {
            clearInterval(interval)
            setAnimationComplete(true)
            return 2 * Math.PI
          }
          return prev + 0.1
        })
      }, 25)

      await controls.start({
        opacity: [0, 1, 1],
        scale: [0.5, 1.2, 1],
        rotate: [0, 720],
        transition: { duration: 2, ease: 'easeInOut' },
      })

      await controls.start((i) => ({
        x: '0%',
        y: `${i * 120}%`,
        transition: { duration: 0.5, ease: 'easeInOut' },
      }))
    }

    animateTornado()

    return () => clearInterval(interval)
  }, [controls])

  return (
    <div className="flex items-center justify-center p-40 mb-80">
      <div className="relative w-full max-w-lg">
        {texts.map((text, index) => {
          const position = calculatePosition(index, texts.length, progress, animationComplete)
          return (
            <motion.div
              key={index}
              className={`absolute text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r bg-clip-text ${
                gradients[index % gradients.length]
              }`}
              style={{
                x: position.x,
                y: position.y,
              }}
              animate={controls}
              initial={{
                opacity: 0,
                scale: 0.5,
                rotate: 0,
              }}
              custom={index}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
              }}
            >
              {text}
            </motion.div>
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

  const codeString = `'use client'

import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

const texts = [
  'Moderne Webseiten',
  'KI-Lösungen',
  'App-Entwicklung',
  'Custom Plugins',
  'Custom Komponenten',
]

const gradients = [
  'from-purple-400 via-pink-500 to-yellow-500',
  'from-blue-400 via-indigo-500 to-teal-500',
  'from-yellow-400 via-red-500 to-purple-500',
  'from-green-400 via-blue-500 to-indigo-500',
]

const calculatePosition = (index: number, total: number, progress: number, isComplete: boolean) => {
  if (isComplete) {
    return { x: '0%', y: \`\${index * 120}%\` }
  }
  const angle = ((2 * Math.PI) / total) * index + progress * 5
  const radius = 40 + Math.sin(progress * 2) * 20
  const x = 50 + radius * Math.cos(angle)
  const y = 50 + radius * Math.sin(angle)
  return { x: \`\${x}%\`, y: \`\${y}%\` }
}

export default function TextTornadoOnce() {
  const [progress, setProgress] = useState(0.01)
  const [animationComplete, setAnimationComplete] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    let interval: NodeJS.Timeout

    const animateTornado = async () => {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 2 * Math.PI) {
            clearInterval(interval)
            setAnimationComplete(true)
            return 2 * Math.PI
          }
          return prev + 0.1
        })
      }, 25)

      await controls.start({
        opacity: [0, 1, 1],
        scale: [0.5, 1.2, 1],
        rotate: [0, 720],
        transition: { duration: 2, ease: 'easeInOut' },
      })

      await controls.start((i) => ({
        x: '0%',
        y: \`\${i * 120}%\`,
        transition: { duration: 0.5, ease: 'easeInOut' },
      }))
    }

    animateTornado()

    return () => clearInterval(interval)
  }, [controls])

  return (
    <div className="flex items-center justify-center p-40 mb-80 bg-gray-800">
      <div className="relative w-full max-w-lg">
        {texts.map((text, index) => {
          const position = calculatePosition(index, texts.length, progress, animationComplete)
          return (
            <motion.div
              key={index}
              className={\`absolute text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r bg-clip-text \${
                gradients[index % gradients.length]
              }\`}
              style={{
                x: position.x,
                y: position.y,
              }}
              animate={controls}
              initial={{
                opacity: 0,
                scale: 0.5,
                rotate: 0,
              }}
              custom={index}
              transition={{
                type: 'spring',
                stiffness: 100,
                damping: 20,
              }}
            >
              {text}
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}`

  return (
    <div className="">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Tornado-Textanimation mit Farbverlauf</h1>
        <div className="rounded-lg shadow-lg overflow-hidden mb-8">
          <TextTornadoOnce />
        </div>
        <div className="mt-6 text-center text-gray-600 max-w-2xl mx-auto">
          <p>
            Diese Komponente zeigt eine dynamische Textanimation, bei der verschiedene Texte mit Farbverläufen 
            in einer Tornado-ähnlichen Bewegung animiert werden. Die Texte beginnen in einer kreisförmigen 
            Anordnung, drehen sich wie ein Tornado und landen schließlich in einer vertikalen Reihe. 
            Die Animation nutzt komplexe Berechnungen für die Positionierung und Framer Motion für 
            flüssige Übergänge, was einen fesselnden visuellen Effekt erzeugt.
          </p>
        </div>
        <div className="mt-8">
          <button
            onClick={toggleCode}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {showCode ? 'Code ausblenden' : 'Code anzeigen'}
          </button>
          {showCode && (
            <div className="mt-4 border rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-100 p-4 relative">
                <pre className="language-typescript overflow-x-auto">
                  <code>{codeString}</code>
                </pre>
                <button
                  className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-1 px-2 rounded"
                  onClick={copyCode}
                  aria-label="Code kopieren"
                >
                  Code kopieren
                </button>
              </div>
            </div>
          )}
          {copied && (
            <p className="text-green-500 mt-2">Code in die Zwischenablage kopiert!</p>
          )}
        </div>
      </div>
    </div>
  )
}