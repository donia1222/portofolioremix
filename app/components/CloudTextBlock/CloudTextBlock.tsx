"use client"

import type React from "react"
import { motion } from "framer-motion"

const texts = ["Moderne Webseiten", "KI-Lösungen", "App-Entwicklung", "Custom Plugins", "Custom Komponenten"]

const gradients = [
  "from-violet-400 via-purple-500 to-transparent",
  "from-emerald-400 via-cyan-500 to-transparent",
  "from-amber-400 via-orange-500 to-transparent",
  "from-sky-400 via-blue-500 to-transparent",
  "from-rose-400 via-pink-500 to-transparent",
]

const CloudTextBlock: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden pt-20">
      {/* Starfield background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Comet texts */}
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        {texts.map((text, index) => {
          // Alternar direcciones: algunos de izquierda a derecha, otros de derecha a izquierda
          const isLeftToRight = index % 2 === 0

          const startPositions = isLeftToRight
            ? [
                { x: "-30%", y: "15%" },
                { x: "-25%", y: "35%" },
                { x: "-35%", y: "65%" },
              ]
            : [
                { x: "130%", y: "25%" },
                { x: "125%", y: "55%" },
              ]

          const endPositions = isLeftToRight
            ? [
                { x: "130%", y: "5%" },
                { x: "125%", y: "25%" },
                { x: "135%", y: "55%" },
              ]
            : [
                { x: "-30%", y: "15%" },
                { x: "-35%", y: "45%" },
              ]

          const currentStart = isLeftToRight
            ? startPositions[Math.floor(index / 2)]
            : startPositions[Math.floor((index - 1) / 2)]

          const currentEnd = isLeftToRight
            ? endPositions[Math.floor(index / 2)]
            : endPositions[Math.floor((index - 1) / 2)]

          return (
            <motion.div
              key={index}
              className="absolute"
              style={{
                left: currentStart.x,
                top: currentStart.y,
              }}
              animate={{
                x: [0, `calc(${currentEnd.x} - ${currentStart.x})`],
                y: [0, `calc(${currentEnd.y} - ${currentStart.y})`],
              }}
              transition={{
                duration: 3 + index * 0.1,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                delay: index * 0.4,
                ease: "linear",
              }}
            >
              {/* Comet tail */}
              <motion.div
                className={`absolute w-96 h-2 bg-gradient-to-r ${gradients[index]} blur-sm opacity-70`}
                style={{
                  transform: isLeftToRight ? "rotate(-15deg)" : "rotate(15deg)",
                  transformOrigin: isLeftToRight ? "left center" : "right center",
                }}
                animate={{
                  scaleX: [0, 1, 0.8, 0],
                  opacity: [0, 0.8, 0.6, 0],
                }}
                transition={{
                  duration: 3 + index * 0.1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  delay: index * 0.4,
                  ease: "linear",
                }}
              />

              {/* Comet head (text) */}
              <motion.span
                className={`relative z-10 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r ${gradients[index].replace("to-transparent", "to-white")} bg-clip-text text-transparent drop-shadow-2xl`}
                style={{
                  filter: "drop-shadow(0 0 10px rgba(255,255,255,0.5))",
                }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  scale: [0.8, 1.1, 1, 0.9],
                }}
                transition={{
                  duration: 3 + index * 0.1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  delay: index * 0.4,
                  ease: "easeInOut",
                }}
              >
                {text}
              </motion.span>

              {/* Glow effect */}
              <motion.div
                className={`absolute -inset-4 bg-gradient-to-r ${gradients[index]} rounded-full blur-xl opacity-30 -z-10`}
                animate={{
                  scale: [0.5, 1.5, 1.2, 0.8],
                  opacity: [0, 0.4, 0.3, 0],
                }}
                transition={{
                  duration: 3 + index * 0.1,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  delay: index * 0.4,
                  ease: "linear",
                }}
              />
            </motion.div>
          )
        })}

        {/* Central title */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent mb-4 p-4"
              animate={{
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            >
              Digitale Innovation
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              Moderne Lösungen für die digitale Zukunft
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CloudTextBlock
