'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function CloudTextBlock5() {
  const [isVisible, setIsVisible] = useState(false)
  
  const digitaleLetters = "DIGITALE".split('')
  const innovationLetters = "INNOVATION".split('')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const renderAnimatedWord = (letters: string[], startDelay: number = 0) => {
    return letters.map((letter, index) => {
      // Solo algunas letras especiales giraran muy ocasionalmente
      const specialLetters = ['D', 'I', 'N', 'O'] // Solo 4 letras
      const isSpecialLetter = specialLetters.includes(letter)
      const randomDelay = Math.random() * 20 + 15 // Entre 15-35 segundos (mucho más espaciado)
      
      return (
        <motion.span
          key={index}
          className="inline-block"
          style={{
            background: 'linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899, #F59E0B)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
          initial={{ 
            y: -100,
            opacity: 0,
            rotateX: 90
          }}
          animate={isVisible ? {
            y: 0,
            opacity: 1,
            rotateX: 0,
            // Animación ocasional de giro más sutil
            ...(isSpecialLetter && {
              rotate: [0, 180, 0], // Solo media vuelta
              scale: [1, 1.1, 1]   // Escala más sutil
            })
          } : {}}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: startDelay + (index * 0.08),
            duration: 0.8,
            // Animación de giro ocasional más lenta
            ...(isSpecialLetter && {
              rotate: {
                duration: 2.5, // Más lento
                repeat: Infinity,
                repeatDelay: randomDelay,
                ease: "easeInOut"
              },
              scale: {
                duration: 2.5, // Más lento
                repeat: Infinity,
                repeatDelay: randomDelay,
                ease: "easeInOut"
              }
            })
          }}
          whileHover={{
            scale: 1.1,
            rotate: [0, -5, 5, 0],
            transition: { duration: 0.3 }
          }}
        >
          {letter}
        </motion.span>
      )
    })
  }

  return (
    <div className="relative overflow-hidden flex items-center justify-center px-4 mt-48 mb-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-5 blur-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, 50, -25, 0],
              y: [0, -50, 25, 0],
              scale: [1, 1.1, 0.9, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
          />
        ))}
      </div>

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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              {renderAnimatedWord(digitaleLetters, 0.5)}
            </h1>
          </motion.div>

          {/* INNOVATION */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              {renderAnimatedWord(innovationLetters, 1.2)}
            </h1>
          </motion.div>
        </div>

        {/* Simple description */}
        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          Moderne digitale Lösungen mit innovativer Technologie
        </motion.p>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          {[
            { 
              title: "Webseiten", 
              subtitle: "Modern & Schnell",
              icon: "🌐",
              color: "from-blue-400 to-cyan-400"
            },
            { 
              title: "Native Apps", 
              subtitle: "iOS & Android",
              icon: "📱",
              color: "from-green-400 to-emerald-400"
            },
            { 
              title: "KI-Komponenten", 
              subtitle: "Intelligente Lösungen",
              icon: "🤖",
              color: "from-purple-400 to-pink-400"
            },
            { 
              title: "Custom Plugins", 
              subtitle: "Maßgeschneidert",
              icon: "⚡",
              color: "from-orange-400 to-red-400"
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              className="relative group bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-600/70 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 30, scale: 0.9, rotateY: -15 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1, 
                rotateY: 0,
                // Pulso ocasional de energía
                boxShadow: [
                  "0 0 0 0 rgba(59, 130, 246, 0)",
                  "0 0 0 10px rgba(59, 130, 246, 0.1)",
                  "0 0 0 20px rgba(59, 130, 246, 0)",
                ]
              }}
              transition={{ 
                delay: 3.2 + (index * 0.1), 
                duration: 0.6,
                type: "spring",
                stiffness: 100,
                // Animación de pulso
                boxShadow: {
                  duration: 3,
                  repeat: Infinity,
                  repeatDelay: Math.random() * 5 + 3, // Entre 3-8 segundos
                  ease: "easeInOut"
                }
              }}
              whileHover={{ 
                scale: 1.08,
                y: -8,
                rotateY: 5,
                rotateX: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                transition: { duration: 0.3, type: "spring", stiffness: 400 }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Efecto de partículas en el fondo */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-1 h-1 bg-gradient-to-r ${service.color} rounded-full`}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      x: [0, (Math.random() - 0.5) * 30],
                      y: [0, (Math.random() - 0.5) * 30],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>

              {/* Glow effect de fondo */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="text-4xl mb-3 relative z-10"
                animate={{
                  // Flotación sutil
                  y: [0, -3, 0],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
                whileHover={{ 
                  scale: 1.3,
                  rotate: [0, -15, 15, 0],
                  y: -5,
                  transition: { 
                    duration: 0.5,
                    type: "spring",
                    stiffness: 300
                  }
                }}
              >
                {service.icon}
              </motion.div>
              
              <motion.h3 
                className={`text-lg font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent mb-1 relative z-10`}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                {service.title}
              </motion.h3>
              
              <motion.p 
                className="text-gray-400 text-sm relative z-10"
                whileHover={{
                  color: "#e5e7eb",
                  transition: { duration: 0.2 }
                }}
              >
                {service.subtitle}
              </motion.p>

              {/* Línea de energía que aparece en hover */}
              <motion.div
                className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${service.color} rounded-full`}
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}