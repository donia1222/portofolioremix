"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useAnimation, type Variants } from "framer-motion"

export default function AnimatedText() {
  const [isVisible, setIsVisible] = useState(false)
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)

  // Split the text into two parts
  const textTop = "Animierte"
  const textBottom = "Komponenten"
  const lettersTop = textTop.split("")
  const lettersBottom = textBottom.split("")

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
      let particles: Particle[] = []

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
        if (containerRef.current && containerRef.current.contains(canvas)) {
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
      className="relative flex items-center justify-center p-4 sm:p-8 md:p-16 lg:p-40 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-[#0a0028] min-h-[500px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Main text container */}
      <div className="relative z-10 px-4 sm:px-8 py-8 sm:py-16 mx-auto text-center max-w-4xl backdrop-blur-sm bg-black/30 rounded-xl border border-[#00FFFF]/20 shadow-[0_0_50px_rgba(0,255,255,0.15)]">
        {/* Top text: "Animation macht" */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-wrap justify-center mb-4 sm:mb-6"
        >
          {lettersTop.map((letter, i) => (
            <motion.span
              key={`top-${i}`}
              custom={i}
              variants={letterVariants}
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold ${letter === " " ? "mr-4" : ""}`}
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

        {/* Bottom text: "das Leben besser" */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="flex flex-wrap justify-center mb-6 sm:mb-8"
        >
          {lettersBottom.map((letter, i) => (
            <motion.span
              key={`bottom-${i}`}
              custom={i + lettersTop.length} // Offset the animation timing
              variants={letterVariants}
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ${letter === " " ? "mr-4" : ""}`}
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

