"use client"
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function SimpleGSAPText() {
  const textRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const text = textRef.current
    const container = containerRef.current
    
    if (!text || !container) return

    // Split text into individual letters
    const letters = text.textContent?.split('') || []
    text.innerHTML = ''
    
    letters.forEach((letter, index) => {
      const span = document.createElement('span')
      span.textContent = letter === ' ' ? '\u00A0' : letter
      span.style.display = 'inline-block'
      span.style.opacity = '0'
      span.style.transform = 'translateY(-100px) rotateX(90deg)'
      text.appendChild(span)
    })

    // Animate letters
    const tl = gsap.timeline({ delay: 0.5 })
    
    tl.to(text.children, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 1.2,
      stagger: 0.08,
      ease: "back.out(1.7)",
      transformOrigin: "center bottom"
    })

    // Hover effect
    const handleMouseEnter = () => {
      gsap.to(text.children, {
        scale: 1.1,
        color: '#3B82F6',
        duration: 0.3,
        stagger: 0.02,
        ease: "power2.out"
      })
    }

    const handleMouseLeave = () => {
      gsap.to(text.children, {
        scale: 1,
        color: '#FFFFFF',
        duration: 0.3,
        stagger: 0.02,
        ease: "power2.out"
      })
    }

    text.addEventListener('mouseenter', handleMouseEnter)
    text.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      text.removeEventListener('mouseenter', handleMouseEnter)
      text.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 px-4"
    >
      <div className="text-center">
        <div 
          ref={textRef}
          className="text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-8 cursor-pointer"
          style={{ 
            background: 'linear-gradient(45deg, #3B82F6, #8B5CF6, #EC4899, #F59E0B)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}
        >
          DIGITALE INNOVATION
        </div>
        
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Modern web solutions with cutting-edge technology
        </p>
      </div>
    </div>
  )
}