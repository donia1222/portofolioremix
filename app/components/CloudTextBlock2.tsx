'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const texts = [
  'Moderne Webseiten',
  'KI-Lösungen',
  'App-Entwicklung',
  'Custom Plugins',
]

const glitchColors = [
  'text-red-500',
  'text-blue-500',
  'text-green-500',
  'text-yellow-500',
]

export default function TypewriterGlitchText() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const animateText = async () => {
      const currentText = texts[currentTextIndex]

      // Typewriter effect
      for (let i = 0; i <= currentText.length; i++) {
        setDisplayedText(currentText.slice(0, i))
        await new Promise((resolve) => setTimeout(resolve, 100))
      }

      // Wait before glitch effect
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Glitch effect
      setIsGlitching(true)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsGlitching(false)

      // Clear text and move to next
      setDisplayedText('')
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }

    timeout = setTimeout(animateText, 500)

    return () => clearTimeout(timeout)
  }, [currentTextIndex])

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="relative text-4xl font-bold text-white">
        <AnimatePresence>
          {isGlitching ? (
            <motion.div
              key="glitch"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {glitchColors.map((color, index) => (
                <motion.span
                  key={color}
                  className={`absolute ${color}`}
                  animate={{
                    x: [0, -4, 4, -4, 0],
                    y: [0, 2, -2, 2, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: index * 0.1,
                  }}
                >
                  {displayedText}
                </motion.span>
              ))}
            </motion.div>
          ) : (
            <motion.span
              key="text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {displayedText}
            </motion.span>
          )}
        </AnimatePresence>
        <motion.span
          className="inline-block w-2 h-8 ml-1 bg-white"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>
    </div>
  )
}