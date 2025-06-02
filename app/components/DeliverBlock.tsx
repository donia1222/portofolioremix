"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

const images = [
  "/programming-background-with-person-working-with-codes-computer.jpg",
  // Añade más imágenes según sea necesario
]

export default function DeliverBlock() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const changeImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
    }

    timeoutRef.current = setInterval(changeImage, 3000)

    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current)
      }
    }
  }, [currentImageIndex])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 sm:py-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content container */}
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-6 relative z-10" onMouseMove={handleMouseMove}>
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-16 items-center">
          {/* Text content with enhanced animations */}
          <motion.div
            className="space-y-6 sm:space-y-8 px-4 sm:px-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Floating badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full border border-pink-500/30 backdrop-blur-sm"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <span className="text-pink-400 text-sm font-medium">✨ Pixel Perfect Design</span>
            </motion.div>

            {/* Main title with gradient and animations */}
            <div className="space-y-4">
              <motion.h2
                className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent block">
                  Modernität in
                </span>
                <motion.span
                  className="bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 bg-clip-text text-transparent block"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  jedem Pixel
                </motion.span>
              </motion.h2>

              {/* Animated underline */}
              <motion.div
                className="h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "60%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>

            {/* Description with typewriter effect */}
            <motion.p
              className="text-base sm:text-lg text-blue-200/80 leading-relaxed max-w-xl pr-4 sm:pr-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Ich fusioniere modernes Design mit fesselnden Animationen, um Websites zu kreieren, die in jedem Detail
              herausstechen. Jedes Pixel wird sorgfältig ausgearbeitet, um Interaktivität und Ästhetik zu bieten.
            </motion.p>

            {/* Interactive stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-6 sm:pt-8">
              {[
                { number: "100+", label: "Projekte" },
                { number: "99%", label: "Zufriedenheit" },
                { number: "24/7", label: "Support" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pink-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-2xl font-bold text-pink-400">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Enhanced image section */}
          <motion.div
            className="relative px-4 sm:px-8 lg:px-0 mt-12 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Floating geometric shapes */}
            <motion.div
              className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full opacity-20 blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            />
            <motion.div
              className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-20 blur-xl"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [360, 180, 0],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            />

            {/* Main image container with 3D effect */}
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 mx-auto">
              {/* Glowing border */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-2xl opacity-50 blur-lg"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 1, 0],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              />

              {/* Image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/20 backdrop-blur-sm">
                {images.map((src, index) => (
                  <motion.img
                    key={index}
                    src={src}
                    alt={`Imagen ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{
                      opacity: index === currentImageIndex ? 1 : 0,
                      scale: index === currentImageIndex ? 1 : 1.1,
                    }}
                    transition={{ duration: 1 }}
                  />
                ))}

                {/* Interactive overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(236, 72, 153, 0.3) 0%, transparent 50%)`,
                  }}
                />
              </div>

              {/* Floating elements around image */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
                  style={{
                    top: `${20 + Math.sin(i) * 60}%`,
                    left: `${20 + Math.cos(i) * 60}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 1, 0.5],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + i * 0.3,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>

            {/* Progress indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {images.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-pink-500" : "bg-white/30"}`}
                  whileHover={{ scale: 1.5 }}
                  animate={{
                    scale: index === currentImageIndex ? 1.2 : 1,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent" />
    </section>
  )
}
