"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useAnimation, type Variants, useScroll, useTransform } from "framer-motion"
import Phone from "~/components/PhoneSlideshow/phone-slideshowHome"
import PhoneTwo from "~/components/PhoneSlideshow/phone-slideshowTwo"

export default function AnimatedText() {
  const [isVisible, setIsVisible] = useState(false)
  const controls = useAnimation()
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)

  // Scroll animation setup
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start end", "end start"],
  })

  // Transform values based on scroll position
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

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
      canvas.style.zIndex = "-1"
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
      className="relative flex flex-col items-center justify-center p-4 sm:p-8 md:p-16 lg:p-40  mt-20 overflow-hidden bg-gradient-to-b from-black via-gray-900 to-[#0a0028] min-h-[500px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* NATIVE APPS text with scroll animation */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent px-4 w-full"
        initial={{ y: 0 }}
        animate={{
          y: [0, -20, 0, -10, 0],
          textShadow: ["0px 0px 0px rgba(0,0,0,0)", "0px 0px 15px rgba(0,255,255,0.7)", "0px 0px 0px rgba(0,0,0,0)"],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          times: [0, 0.2, 0.5, 0.7, 1],
          ease: "easeInOut",
        }}
      >
        NATIVE APPS
      </motion.h1>
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 w-full">
        <Phone />
        <div className="hidden sm:block">
          <PhoneTwo />
        </div>
      </div>
    </motion.div>
  )
}

