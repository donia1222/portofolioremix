"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useAnimation, AnimatePresence, type Variants } from "framer-motion"

export default function AnimatedText() {
  const [isVisible, setIsVisible] = useState(false)
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  const text = "La vida es mejor cuando es animada"
  const letters = text.split("")

  useEffect(() => {
    setIsVisible(true)
    controls.start("visible")

    // Create particle effect
    if (containerRef.current && typeof window !== "undefined") {
      const canvas = document.createElement("canvas")
      canvas.style.position = "absolute"
      canvas.style.top = "0"
      canvas.style.left = "0"
      canvas.style.width = "100%"
      canvas.style.height = "100%"
      canvas.style.zIndex = "1"
      canvas.style.pointerEvents = "none"
      containerRef.current.appendChild(canvas)

      const ctx = canvas.getContext("2d")
      let particles: any[] = []

      const resizeCanvas = () => {
        if (containerRef.current) {
          canvas.width = containerRef.current.offsetWidth
          canvas.height = containerRef.current.offsetHeight
        }
      }

      window.addEventListener("resize", resizeCanvas)
      resizeCanvas()

      class Particle {
        x: number
        y: number
        size: number
        speedX: number
        speedY: number
        color: string

        constructor() {
          this.x = Math.random() * canvas.width
          this.y = Math.random() * canvas.height
          this.size = Math.random() * 2 + 0.5
          this.speedX = Math.random() * 1 - 0.5
          this.speedY = Math.random() * 1 - 0.5

          const colors = ["#00FFFF", "#FF00FF", "#0033FF", "#14F195"]
          this.color = colors[Math.floor(Math.random() * colors.length)]
        }

        update() {
          this.x += this.speedX
          this.y += this.speedY

          if (this.x > canvas.width) this.x = 0
          if (this.x < 0) this.x = canvas.width
          if (this.y > canvas.height) this.y = 0
          if (this.y < 0) this.y = canvas.height
        }

        draw() {
          if (!ctx) return
          ctx.fillStyle = this.color
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fill()
        }
      }

      const initParticles = () => {
        particles = []
        for (let i = 0; i < 100; i++) {
          particles.push(new Particle())
        }
      }

      const animateParticles = () => {
        if (!ctx) return
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        for (let i = 0; i < particles.length; i++) {
          particles[i].update()
          particles[i].draw()

          // Connect particles with lines
          for (let j = i; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x
            const dy = particles[i].y - particles[j].y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 100) {
              ctx.beginPath()
              ctx.strokeStyle = particles[i].color
              ctx.globalAlpha = 0.2 * (1 - distance / 100)
              ctx.lineWidth = 0.5
              ctx.moveTo(particles[i].x, particles[i].y)
              ctx.lineTo(particles[j].x, particles[j].y)
              ctx.stroke()
              ctx.globalAlpha = 1
            }
          }
        }

        requestAnimationFrame(animateParticles)
      }

      initParticles()
      animateParticles()

      return () => {
        window.removeEventListener("resize", resizeCanvas)
        if (containerRef.current) {
          containerRef.current.removeChild(canvas)
        }
      }
    }
  }, [controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.3,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
        delay: i * 0.04,
      },
    }),
  }

  // Glitch effect for text
  const glitchAnimation: Variants = {
    hidden: {
      textShadow: "0 0 0 rgba(0, 255, 255, 0), 0 0 0 rgba(255, 0, 255, 0)",
    },
    visible: {
      textShadow: [
        "0 0 0 rgba(0, 255, 255, 0), 0 0 0 rgba(255, 0, 255, 0)",
        "-2px 0 10px rgba(0, 255, 255, 0.7), 2px 0 10px rgba(255, 0, 255, 0.7)",
        "2px 0 15px rgba(0, 255, 255, 0.9), -2px 0 15px rgba(255, 0, 255, 0.9)",
        "0 0 0 rgba(0, 255, 255, 0), 0 0 0 rgba(255, 0, 255, 0)",
      ],
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "mirror",
        duration: 5,
        times: [0, 0.1, 0.2, 1],
      },
    },
  }

  return (
    <motion.div
      ref={containerRef}
      className="relative flex items-center justify-center min-h-screen overflow-hidden bg-gradient-to-b from-black via-gray-900 to-[#0a0028]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Main text container */}
      <div className="relative z-10 px-8 py-16 mx-auto text-center max-w-4xl backdrop-blur-sm bg-black/30 rounded-xl border border-[#00FFFF]/20 shadow-[0_0_50px_rgba(0,255,255,0.15)]">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-wrap justify-center mb-8"
        >
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              className={`text-5xl md:text-7xl font-bold ${letter === " " ? "mr-4" : ""}`}
              style={{
                display: "inline-block",
                color: "#fff",
                textShadow: "0 0 10px rgba(0, 255, 255, 0.7), 0 0 20px rgba(255, 0, 255, 0.5)",
              }}
              whileHover={{
                scale: 1.2,
                color: ["#fff", "#00FFFF", "#FF00FF", "#fff"],
                transition: { duration: 0.5, times: [0, 0.3, 0.6, 1] },
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        {/* Animated subtitle with glitch effect */}
        <AnimatePresence>
          {isVisible && (
            <motion.p
              initial="hidden"
              animate="visible"
              variants={glitchAnimation}
              className="mt-8 text-xl text-[#14F195] font-medium max-w-2xl mx-auto"
            >
              Diseños futuristas con efectos visuales impactantes
            </motion.p>
          )}
        </AnimatePresence>

        {/* Interactive button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 30px rgba(0, 255, 255, 0.7)",
            background: "linear-gradient(90deg, #FF00FF, #00FFFF)",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 px-10 py-4 bg-transparent text-white font-medium rounded-full border-2 border-[#00FFFF] relative overflow-hidden group"
        >
          <span className="relative z-10">EXPLORAR</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#FF00FF] to-[#00FFFF] opacity-0 group-hover:opacity-100"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>

        {/* Tech circuit lines */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-[#00FFFF] to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/4 h-px bg-gradient-to-l from-transparent via-[#FF00FF] to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-[#00FFFF] to-transparent"></div>
          <div className="absolute top-1/4 right-0 w-px h-1/3 bg-gradient-to-b from-transparent via-[#00FFFF] to-transparent"></div>
          <div className="absolute top-1/3 left-0 w-px h-1/4 bg-gradient-to-b from-transparent via-[#FF00FF] to-transparent"></div>
        </div>
      </div>
    </motion.div>
  )
}

