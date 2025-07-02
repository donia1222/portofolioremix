"use client"
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function GSAPAdvancedAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const svgRef = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const container = containerRef.current
    const title = titleRef.current
    const cards = cardsRef.current
    const svg = svgRef.current

    if (!container || !title || !svg) return

    // Create GSAP context for cleanup
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set(title.children, {
        y: 100,
        opacity: 0,
        rotationX: 90,
        transformOrigin: "center bottom"
      })

      gsap.set(cards, {
        rotationY: 45,
        rotationX: 15,
        scale: 0.8,
        opacity: 0,
        z: -200
      })

      // Title animation with 3D rotation
      const titleTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
          toggleActions: "play none none reverse"
        }
      })

      titleTl.to(title.children, {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.7)"
      })

      // Cards 3D rotation animation
      cards.forEach((card, index) => {
        if (!card) return

        gsap.timeline({
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "bottom 20%",
            scrub: 2,
            toggleActions: "play none none reverse"
          }
        })
        .to(card, {
          rotationY: 0,
          rotationX: 0,
          scale: 1,
          opacity: 1,
          z: 0,
          duration: 1.5,
          ease: "power3.out"
        })
        .to(card, {
          rotationY: 360,
          duration: 2,
          ease: "none"
        }, "-=0.5")
      })

      // Continuous 3D rotation for the main container
      gsap.to(container, {
        rotationY: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
        transformStyle: "preserve-3d"
      })

      // SVG filter animation
      const filterTl = gsap.timeline({ repeat: -1, yoyo: true })
      filterTl
        .to("#turbulence", {
          attr: { baseFrequency: "0.9 0.9" },
          duration: 2,
          ease: "sine.inOut"
        })
        .to("#displacement", {
          attr: { scale: "30" },
          duration: 2,
          ease: "sine.inOut"
        }, 0)

      // Parallax effect
      gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })
      .fromTo(container, 
        { y: 0 },
        { y: -100, ease: "none" }
      )

    }, container)

    return () => {
      ctx.revert() // Cleanup
    }
  }, [])

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current[index] = el
    }
  }

  return (
    <div 
      ref={containerRef}
      className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 py-20 px-4 relative overflow-hidden"
      style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
    >
      {/* SVG Filters */}
      <svg ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none">
        <defs>
          <filter id="wave" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence 
              id="turbulence"
              baseFrequency="0.02 0.02" 
              numOctaves="3" 
              result="noise"
            />
            <feDisplacementMap 
              id="displacement"
              in="SourceGraphic" 
              in2="noise" 
              scale="10"
            />
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feColorMatrix 
              values="1 0 0 0 0.1
                      0 1 0 0 0.2  
                      0 0 1 0 0.8
                      0 0 0 1 0"
            />
          </filter>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
      </svg>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Animated Title */}
        <div 
          ref={titleRef}
          className="text-center mb-20"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="inline-block" style={{ filter: 'url(#glow)' }}>G</span>
            <span className="inline-block" style={{ filter: 'url(#glow)' }}>S</span>
            <span className="inline-block" style={{ filter: 'url(#glow)' }}>A</span>
            <span className="inline-block" style={{ filter: 'url(#glow)' }}>P</span>
            <span className="inline-block w-8"></span>
            <span className="inline-block" style={{ filter: 'url(#wave)' }}>3</span>
            <span className="inline-block" style={{ filter: 'url(#wave)' }}>D</span>
          </h1>
          <p className="text-xl text-gray-300">
            ScrollTrigger + 3D Rotation + SVG Filters
          </p>
        </div>

        {/* 3D Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "ScrollTrigger",
              description: "Scroll-based animations with precise control",
              color: "from-blue-500 to-cyan-500"
            },
            {
              title: "3D Rotation", 
              description: "Advanced 3D transforms with perspective",
              color: "from-purple-500 to-pink-500"
            },
            {
              title: "SVG Filters",
              description: "Dynamic visual effects with SVG filters",
              color: "from-green-500 to-emerald-500"
            }
          ].map((card, index) => (
            <div
              key={index}
              ref={(el) => addToRefs(el, index)}
              className={`bg-gradient-to-br ${card.color} p-8 rounded-2xl shadow-2xl`}
              style={{ 
                transformStyle: 'preserve-3d',
                filter: index === 1 ? 'url(#wave)' : 'url(#glow)'
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {card.title}
              </h3>
              <p className="text-white/90 leading-relaxed">
                {card.description}
              </p>
              
              {/* 3D inner element */}
              <div 
                className="mt-6 w-12 h-12 bg-white/20 rounded-lg"
                style={{ 
                  transform: 'translateZ(30px)',
                  transformStyle: 'preserve-3d'
                }}
              />
            </div>
          ))}
        </div>

        {/* Morphing Text */}
        <div className="text-center">
          <div 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-red-500 to-purple-600 bg-clip-text text-transparent"
            style={{ filter: 'url(#wave)' }}
          >
            DIGITALE INNOVATION
          </div>
          <p className="text-lg text-gray-400 mt-4">
            Powered by GSAP - The industry standard for web animation
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                filter: 'url(#glow)',
                transform: `translateZ(${Math.random() * 100 - 50}px)`,
                transformStyle: 'preserve-3d'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}