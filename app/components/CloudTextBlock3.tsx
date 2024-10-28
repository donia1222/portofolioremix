'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useAnimation, useMotionValue } from 'framer-motion'

const texts = ['Innovación', 'Creatividad', 'Tecnología', 'Futuro']

export default function SilentWaveText() {
  const [currentText, setCurrentText] = useState(texts[0])
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameId = useRef<number | null>(null)
  const controls = useAnimation()
  const distortion = useMotionValue(0)

  useEffect(() => {
    let time = 0
    const animate = () => {
      time += 0.05
      const value = Math.sin(time) * 0.5 + 0.5 // Oscillates between 0 and 1
      distortion.set(value)
      controls.start({ scale: 1 + value / 16 })
      animationFrameId.current = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current)
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText(texts[Math.floor(Math.random() * texts.length)])
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const createParticles = () => {
    return Array.from({ length: 50 }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-white rounded-full"
        animate={{
          x: [0, Math.random() * 200 - 100],
          y: [0, Math.random() * 200 - 100],
          opacity: [1, 0],
          scale: [1, 0],
        }}
        transition={{
          duration: Math.random() * 2 + 1,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      />
    ))
  }

  return (
    <div className="flex items-center justify-center h-screen bg-black overflow-hidden" ref={containerRef}>
      <motion.div className="relative text-6xl font-bold text-white" animate={controls}>
        {createParticles()}
        {currentText.split('').map((char, index) => (
          <motion.span
            key={index}
            style={{
              display: 'inline-block',
              filter: `blur(${distortion.get() * 5}px)`,
              transform: `translate(${Math.sin(index) * distortion.get() * 10}px, ${
                Math.cos(index) * distortion.get() * 10
              }px) rotate(${distortion.get() * 10}deg)`,
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}