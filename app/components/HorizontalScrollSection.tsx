"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { Code2, Terminal, Zap, Brain, Rocket } from 'lucide-react'

interface ScrollPanel {
  id: string
  title: string
  content: string
  bgColor: string
  textColor: string
  icon: React.ReactNode
}

export default function HorizontalScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const horizontalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const initScrollAnimation = async () => {
      if (typeof window === "undefined") return

      // Importar ScrollTrigger dinámicamente
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      gsap.registerPlugin(ScrollTrigger)

      const container = containerRef.current
      const horizontal = horizontalRef.current

      if (!container || !horizontal) return

      // Limpiar ScrollTriggers existentes
      ScrollTrigger.getAll().forEach(st => st.kill())

      // Configuración diferente para móvil vs desktop
      const isMobile = window.innerWidth < 1024
      
      if (isMobile) {
        // Configuración para móvil - más centrada
        let scrollTween = gsap.to(horizontal, {
          x: () => -(horizontal.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 1,
            start: "center center",
            end: () => "+=" + (horizontal.scrollWidth - window.innerWidth) * 0.4,
            invalidateOnRefresh: true,
          }
        })

        // Animar contenido móvil
        const panels = gsap.utils.toArray(".mobile-panel")
        panels.forEach((panel: any) => {
          const content = panel.querySelector('.mobile-content')
          
          gsap.fromTo(content, 
            { 
              opacity: 0, 
              y: 30 
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
              scrollTrigger: {
                trigger: panel,
                start: "left 80%",
                end: "left 20%",
                containerAnimation: scrollTween,
                toggleActions: "play none none reverse",
              }
            }
          )
        })
      } else {
        // Configuración para desktop
        let scrollTween = gsap.to(horizontal, {
          x: () => -(horizontal.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: container,
            pin: true,
            scrub: 0.8,
            start: "center center",
            end: () => "+=" + (horizontal.scrollWidth - window.innerWidth) * 0.5,
            invalidateOnRefresh: true,
          }
        })

        // Animar contenido desktop
        const panels = gsap.utils.toArray(".horizontal-panel")
        panels.forEach((panel: any) => {
          const content = panel.querySelector('.panel-content')
          
          gsap.fromTo(content, 
            { 
              opacity: 0, 
              y: 50 
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: panel,
                start: "left 70%",
                end: "left 30%",
                containerAnimation: scrollTween,
                toggleActions: "play none none reverse",
              }
            }
          )
        })
      }
    }

    // Esperar un poco para que el DOM esté listo
    const timer = setTimeout(initScrollAnimation, 100)

    return () => {
      clearTimeout(timer)
      if (typeof window !== "undefined") {
        import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
          ScrollTrigger.getAll().forEach(trigger => trigger.kill())
        })
      }
    }
  }, [])

  const panels: ScrollPanel[] = [
    {
      id: "💻",
      title: "Claude Code",
      content: "KI-gestützter Coding-Assistent direkt im Terminal. Automatisiert komplexe Aufgaben.",
      bgColor: "from-blue-800 via-blue-900 to-indigo-900",
      textColor: "text-white",
      icon: <Terminal className="w-8 h-8" />
    },
    {
      id: "⚡", 
      title: "Blitzschnell",
      content: "Code-Generierung in Sekunden. Refactoring und Debugging automatisch.",
      bgColor: "from-purple-800 via-violet-900 to-purple-900",
      textColor: "text-white",
      icon: <Zap className="w-8 h-8" />
    },
    {
      id: "🧠",
      title: "Intelligente Lösungen",
      content: "Versteht Kontext und schreibt optimierten Code. Lernt aus deinem Projekt.",
      bgColor: "from-emerald-800 via-teal-900 to-green-900", 
      textColor: "text-white",
      icon: <Brain className="w-8 h-8" />
    },
    {
      id: "🚀",
      title: "Deployment Ready",
      content: "Produktionsreifer Code mit Tests. Nahtlose Integration in bestehende Projekte.",
      bgColor: "from-orange-800 via-red-900 to-pink-900", 
      textColor: "text-white",
      icon: <Rocket className="w-8 h-8" />
    },
    {
      id: "🎯",
      title: "Präzise Ergebnisse",
      content: "Weniger Bugs, sauberer Code. Professionelle Standards automatisch erfüllt.",
      bgColor: "from-slate-800 via-gray-900 to-zinc-900", 
      textColor: "text-white",
      icon: <Code2 className="w-8 h-8" />
    }
  ]

  return (
    <div ref={containerRef} className="w-full relative overflow-hidden">
      {/* Versión móvil - Textos más grandes */}
      <div className="lg:hidden h-[50vh]">
        <div
          ref={horizontalRef}
          className="flex h-full"
          style={{ width: `${panels.length * 85}vw` }}
        >
          {panels.map((panel, index) => (
            <div
              key={index}
              className="mobile-panel h-full flex items-center justify-center relative"
              style={{ width: '85vw' }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${panel.bgColor}`} />
              
              {/* Bordes redondeados */}
              <div className="absolute inset-4 rounded-xl border border-white/20 backdrop-blur-sm">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent" />
              </div>
              
              <div className="mobile-content relative z-10 max-w-sm mx-auto text-center px-6">
                {/* Icono más grande */}
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-white/30 to-white/15 backdrop-blur-md border border-white/40 flex items-center justify-center mx-auto shadow-lg mb-4">
                  {panel.icon}
                </div>
                
                {/* Título más grande */}
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {panel.title}
                </h3>
                
                {/* Contenido más grande */}
                <p className="text-base text-white/90 leading-relaxed mb-5 line-clamp-4">
                  {panel.content}
                </p>

                {/* Tags más grandes */}
                <div className="flex justify-center gap-2 mb-4">
                  {index === 0 && (
                    <>
                      <span className="px-4 py-2 bg-white/20 rounded-lg text-sm text-white/95 font-medium">Terminal</span>
                      <span className="px-4 py-2 bg-white/20 rounded-lg text-sm text-white/95 font-medium">KI</span>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <span className="px-4 py-2 bg-white/20 rounded-lg text-sm text-white/95 font-medium">Speed</span>
                      <span className="px-4 py-2 bg-white/20 rounded-lg text-sm text-white/95 font-medium">Auto</span>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <span className="px-4 py-2 bg-white/20 rounded-lg text-sm text-white/95 font-medium">Smart</span>
                      <span className="px-4 py-2 bg-white/20 rounded-lg text-sm text-white/95 font-medium">Context</span>
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <span className="px-4 py-2 bg-white/20 rounded-lg text-sm text-white/95 font-medium">Deploy</span>
                      <span className="px-4 py-2 bg-white/20 rounded-lg text-sm text-white/95 font-medium">Test</span>
                    </>
                  )}
                  {index === 4 && (
                    <>
                      <span className="px-4 py-2 bg-white/20 rounded-lg text-sm text-white/95 font-medium">Quality</span>
                      <span className="px-4 py-2 bg-white/20 rounded-lg text-sm text-white/95 font-medium">Pro</span>
                    </>
                  )}
                </div>

                {/* Indicador más grande */}
                <div className="text-white/50 text-sm font-medium">
                  {index + 1}/{panels.length}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Versión desktop - Textos más grandes */}
      <div className="hidden lg:block h-[60vh]">
        <div
          ref={horizontalRef}
          className="flex h-full"
          style={{ width: `${panels.length * 70}vw` }}
        >
          {panels.map((panel, index) => (
            <div
              key={index}
              className="horizontal-panel h-full flex items-center justify-center relative group"
              style={{ width: '70vw' }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${panel.bgColor}`} />
              
              {/* Bordes más elegantes */}
              <div className="absolute inset-6 rounded-2xl border border-white/20 group-hover:border-white/30 transition-all duration-500 backdrop-blur-sm">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Elementos flotantes minimalistas */}
              <div className="absolute inset-0 overflow-hidden opacity-40">
                <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse" />
                <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-700" />
                <div className="absolute top-1/2 right-1/3 w-2 h-2 border border-white/20 rounded-full animate-pulse delay-300" />
              </div>
              
              <div className="panel-content relative z-10 max-w-lg mx-auto text-center px-8">
                {/* Icono con mejor diseño y más grande */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-white/30 to-white/15 backdrop-blur-md border border-white/40 flex items-center justify-center mx-auto shadow-xl hover:scale-105 transition-transform duration-300">
                    {panel.icon}
                  </div>
                  <div className="absolute inset-0 w-20 h-20 rounded-xl bg-white/10 blur-lg mx-auto animate-pulse" />
                </div>
                
                {/* Título más grande */}
                <h2 className={`text-3xl md:text-4xl font-bold mb-5 ${panel.textColor} tracking-tight`}>
                  {panel.title}
                </h2>
                
                {/* Contenido más grande */}
                <p className={`text-lg leading-relaxed ${panel.textColor} opacity-90 max-w-md mx-auto mb-6`}>
                  {panel.content}
                </p>

                {/* Tags más grandes */}
                <div className="flex flex-wrap justify-center gap-3 mb-5">
                  {index === 0 && (
                    <>
                      <span className="px-4 py-2 bg-white/20 rounded-lg text-base text-white/95 border border-white/15 font-medium">Terminal</span>
                      <span className="px-4 py-2 bg-white/20 rounded-lg text-base text-white/95 border border-white/15 font-medium">KI-Power</span>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <span className="px-4 py-2 bg-white/20 rounded-lg text-base text-white/95 border border-white/15 font-medium">Lightning</span>
                      <span className="px-4 py-2 bg-white/20 rounded-lg text-base text-white/95 border border-white/15 font-medium">Auto-Code</span>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <span className="px-4 py-2 bg-white/20 rounded-lg text-base text-white/95 border border-white/15 font-medium">Smart AI</span>
                      <span className="px-4 py-2 bg-white/20 rounded-lg text-base text-white/95 border border-white/15 font-medium">Context</span>
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <span className="px-4 py-2 bg-white/20 rounded-lg text-base text-white/95 border border-white/15 font-medium">Production</span>
                      <span className="px-4 py-2 bg-white/20 rounded-lg text-base text-white/95 border border-white/15 font-medium">Testing</span>
                    </>
                  )}
                  {index === 4 && (
                    <>
                      <span className="px-4 py-2 bg-white/20 rounded-lg text-base text-white/95 border border-white/15 font-medium">Pro Quality</span>
                      <span className="px-4 py-2 bg-white/20 rounded-lg text-base text-white/95 border border-white/15 font-medium">Clean Code</span>
                    </>
                  )}
                </div>

                {/* Indicador más grande */}
                <div className="text-white/50 text-base font-medium">
                  {index === panels.length - 1 ? "Weiter ↓" : `${index + 1}/${panels.length}`}
                </div>
              </div>

              {/* Separador mejorado */}
              {index < panels.length - 1 && (
                <div className="absolute right-0 top-1/3 bottom-1/3 w-px">
                  <div className="w-full h-full bg-gradient-to-b from-transparent via-white/25 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}