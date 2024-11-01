"use client"

import { useEffect, useRef, useState } from "react"

export default function Component() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return

      // Comenzar la animación cuando la sección está a 75% de la vista
      const triggerPoint = window.innerHeight * 0.75
      const rect = section.getBoundingClientRect()
      const sectionTop = rect.top

      if (sectionTop <= triggerPoint) {
        const progress = Math.min(1, (triggerPoint - sectionTop) / window.innerHeight)
        setScrollProgress(progress)
      } else {
        setScrollProgress(0)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-gray-900 ">
      <div ref={sectionRef} className="relative min-h-[150vh]">
        {/* Contenedor sticky */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Texto detrás */}
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="mt-[-30vh]"> {/* Add negative margin to move text up */}
              <h1 className="text-6xl font-bold mb-20 text-white text-center">
                Auténtica Cocina Mexicana
              </h1>
              <p className="text-xl text-white/90 mb-60 text-center">
                Descubre el verdadero sabor de México en cada bocado. 
                Nuestros tacos están preparados con ingredientes frescos 
                y recetas tradicionales.
              </p>
            </div>
          </div>

          {/* Imagen que sube */}
          <div 
            className="absolute inset-0 z-10"
            style={{
              transform: `translateY(${(1 - scrollProgress) * 100}%)`,
              transition: 'transform 16ms linear'
            }}
          >
            <img
              src="logo2.jpg"
              alt="Tacos mexicanos"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
        </div>
      </div> 
    </div>
  )
}