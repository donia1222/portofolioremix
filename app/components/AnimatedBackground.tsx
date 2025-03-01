"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface AnimatedBackgroundProps {
  children: React.ReactNode
}

export default function AnimatedBackground({ children }: AnimatedBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (containerRef.current && typeof window !== "undefined") {
      const canvas = document.createElement("canvas")
      canvas.style.position = "fixed"
      canvas.style.top = "0"
      canvas.style.left = "0"
      canvas.style.width = "100%"
      canvas.style.height = "100%"
      canvas.style.zIndex = "1"
      canvas.style.pointerEvents = "none"
      document.body.appendChild(canvas)

      const ctx = canvas.getContext("2d")
      let particles: any[] = []
      let animationFrameId: number

      const resizeCanvas = () => {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
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

        animationFrameId = requestAnimationFrame(animateParticles)
      }

      initParticles()
      animateParticles()

      return () => {
        window.removeEventListener("resize", resizeCanvas)
        cancelAnimationFrame(animationFrameId)
        document.body.removeChild(canvas)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gradient-to-b from-black via-gray-900 to-[#0a0028]">
      {/* Tech circuit lines */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-[2]">
        <div className="absolute top-0 left-0 w-1/3 h-px bg-gradient-to-r from-transparent via-[#00FFFF] to-transparent opacity-30"></div>
        <div className="absolute top-0 right-0 w-1/4 h-px bg-gradient-to-l from-transparent via-[#FF00FF] to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-transparent via-[#00FFFF] to-transparent opacity-30"></div>
        <div className="absolute top-1/4 right-0 w-px h-1/3 bg-gradient-to-b from-transparent via-[#00FFFF] to-transparent opacity-30"></div>
        <div className="absolute top-1/3 left-0 w-px h-1/4 bg-gradient-to-b from-transparent via-[#FF00FF] to-transparent opacity-30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

