"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function CloudTextBlock5() {
  const [isVisible, setIsVisible] = useState(false)
  const digitaleLetters = "DIGITALE".split("")
  const innovationLetters = "INNOVATION".split("")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const renderAnimatedWord = (letters: string[], startDelay = 0) => {
    return letters.map((letter, index) => {
      // Solo algunas letras especiales giraran muy ocasionalmente
      const specialLetters = ["D", "I", "N", "O"] // Solo 4 letras
      const isSpecialLetter = specialLetters.includes(letter)
      const randomDelay = Math.random() * 20 + 15 // Entre 15-35 segundos (mucho más espaciado)

      return (
        <motion.span
          key={index}
          className="inline-block"
          style={{
            background: "linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899, #F59E0B)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          initial={{
            y: -100,
            opacity: 0,
            rotateX: 90,
          }}
          animate={
            isVisible
              ? {
                  y: 0,
                  opacity: 1,
                  rotateX: 0,
                  // Animación ocasional de giro más sutil
                  ...(isSpecialLetter && {
                    rotate: [0, 180, 0], // Solo media vuelta
                    scale: [1, 1.1, 1], // Escala más sutil
                  }),
                }
              : {}
          }
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: startDelay + index * 0.08,
            duration: 0.8,
            // Animación de giro ocasional más lenta
            ...(isSpecialLetter && {
              rotate: {
                duration: 2.5, // Más lento
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: randomDelay,
                ease: "easeInOut",
              },
              scale: {
                duration: 2.5, // Más lento
                repeat: Number.POSITIVE_INFINITY,
                repeatDelay: randomDelay,
                ease: "easeInOut",
              },
            }),
          }}
          whileHover={{
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.3 },
          }}
        >
          {letter}
        </motion.span>
      )
    })
  }

  return (
    <div className="relative overflow-hidden flex items-center justify-center px-4 mt-40 ">



      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Main Hero Title */}
        <div className="mb-16">
          {/* DIGITALE */}
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">{renderAnimatedWord(digitaleLetters, 0.5)}</h1>
          </motion.div>

          {/* INNOVATION */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">{renderAnimatedWord(innovationLetters, 1.2)}</h1>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
