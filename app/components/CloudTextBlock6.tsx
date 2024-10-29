'use client'

import React, { useEffect } from 'react'
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

export default function TextCrossing() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start((i) => ({
      x: ['100%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 10,
          ease: 'linear',
          delay: i * 2,
        },
      },
    }))
  }, [controls])

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden flex flex-col justify-center">
      {texts.map((text, index) => (
        <motion.div
          key={index}
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r bg-clip-text ${
            gradients[index % gradients.length]
          } whitespace-nowrap`}
          style={{
            y: `${(index * 100) / texts.length}%`,
          }}
          initial={{ x: '100%' }}
          animate={controls}
          custom={index}
        >
          {text}
        </motion.div>
      ))}
    </div>
  )
}