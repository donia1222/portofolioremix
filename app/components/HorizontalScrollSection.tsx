"use client"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"

interface ScrollPanel {
  id: string
  title: string
  content: string
  bgColor: string
  textColor: string
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
      title: "Claude Anthropic",
      content: "Generiert Code, refaktoriert und behebt Bugs automatisch.",
      bgColor: "from-slate-800 via-slate-900 to-gray-900",
      textColor: "text-white"
    },
    {
      id: "⚡", 
      title: "Produktivität x10",
      content: "Automatisiert repetitive Aufgaben und optimiert den Workflow.",
      bgColor: "from-gray-800 via-zinc-900 to-slate-900",
      textColor: "text-white"
    },
    {
      id: "🧠",
      title: "Schnell Lernen",
      content: "Entdecke neue Technologien mit praktischen Beispielen.",
      bgColor: "from-zinc-800 via-gray-900 to-slate-900", 
      textColor: "text-white"
    },
    {
      id: "🚀",
      title: "Perfektes Deployment",
      content: "Automatische Tests und optimiertes Deployment.",
      bgColor: "from-gray-900 via-slate-900 to-zinc-900", 
      textColor: "text-white"
    },
    {
      id: "🎯",
      title: "Echte Ergebnisse",
      content: "Schnellere Projekte, sauberer Code, weniger Fehler.",
      bgColor: "from-slate-900 via-gray-900 to-slate-800", 
      textColor: "text-white"
    }
  ]

  return (
    <div ref={containerRef} className="w-full relative overflow-hidden">
      {/* Versión móvil - Con GSAP pero optimizada */}
      <div className="lg:hidden h-[50vh]">
        <div
          ref={horizontalRef}
          className="flex h-full"
          style={{ width: `${panels.length * 100}vw` }}
        >
          {panels.map((panel, index) => (
            <div
              key={index}
              className="mobile-panel min-w-screen h-full flex items-center justify-center relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${panel.bgColor}`} />
              
              {/* Bordes para móvil */}
              <div className="absolute inset-3 rounded-2xl border border-white/10">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent" />
              </div>
              
              <div className="mobile-content relative z-10 max-w-sm mx-auto text-center px-6">
                {/* Icono móvil */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/25 to-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center mx-auto shadow-xl mb-4">
                  <span className="text-2xl">{panel.id}</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                  {panel.title}
                </h3>
                
                <p className="text-sm text-white/85 leading-relaxed mb-4">
                  {panel.content}
                </p>

                {/* Tags móvil */}
                <div className="flex justify-center gap-2 mb-3">
                  {index === 0 && (
                    <>
                      <span className="px-2 py-1 bg-white/15 rounded text-xs text-white/90">AI</span>
                      <span className="px-2 py-1 bg-white/15 rounded text-xs text-white/90">Code</span>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <span className="px-2 py-1 bg-white/15 rounded text-xs text-white/90">Speed</span>
                      <span className="px-2 py-1 bg-white/15 rounded text-xs text-white/90">Auto</span>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <span className="px-2 py-1 bg-white/15 rounded text-xs text-white/90">Learn</span>
                      <span className="px-2 py-1 bg-white/15 rounded text-xs text-white/90">Grow</span>
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <span className="px-2 py-1 bg-white/15 rounded text-xs text-white/90">Deploy</span>
                      <span className="px-2 py-1 bg-white/15 rounded text-xs text-white/90">Test</span>
                    </>
                  )}
                  {index === 4 && (
                    <>
                      <span className="px-2 py-1 bg-white/15 rounded text-xs text-white/90">Results</span>
                      <span className="px-2 py-1 bg-white/15 rounded text-xs text-white/90">Quality</span>
                    </>
                  )}
                </div>

                <div className="text-white/40 text-xs">
                  {index === panels.length - 1 ? "Weiter ↓" : `${index + 1}/${panels.length}`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Versión desktop - Con GSAP ScrollTrigger */}
      <div className="hidden lg:block h-[60vh]">
        <div
          ref={horizontalRef}
          className="flex h-full"
          style={{ width: `${panels.length * 100}vw` }}
        >
          {panels.map((panel, index) => (
            <div
              key={index}
              className="horizontal-panel min-w-screen h-full flex items-center justify-center relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${panel.bgColor}`} />
              
              {/* Animated border */}
              <div className="absolute inset-4 rounded-3xl border border-white/10 group-hover:border-white/20 transition-all duration-700">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse" />
                <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-pulse delay-1000" />
                <div className="absolute top-1/2 right-1/3 w-3 h-3 border border-white/15 rounded-full animate-pulse delay-500" />
              </div>
              
              <div className="panel-content relative z-10 max-w-xl mx-auto text-center px-6">
                {/* Icon container with enhanced glow */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/25 to-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center mx-auto shadow-2xl hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">{panel.id}</span>
                  </div>
                  <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-white/10 blur-xl mx-auto animate-pulse" />
                </div>
                
                <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${panel.textColor} tracking-tight`}>
                  {panel.title}
                </h2>
                
                <p className={`text-sm md:text-base leading-relaxed ${panel.textColor} opacity-85 max-w-sm mx-auto mb-6`}>
                  {panel.content}
                </p>

                {/* Simplified feature tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {index === 0 && (
                    <>
                      <span className="px-2 py-1 bg-white/15 rounded-lg text-xs text-white/90 border border-white/10">AI</span>
                      <span className="px-2 py-1 bg-white/15 rounded-lg text-xs text-white/90 border border-white/10">Refactor</span>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <span className="px-2 py-1 bg-white/15 rounded-lg text-xs text-white/90 border border-white/10">Speed</span>
                      <span className="px-2 py-1 bg-white/15 rounded-lg text-xs text-white/90 border border-white/10">Auto</span>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <span className="px-2 py-1 bg-white/15 rounded-lg text-xs text-white/90 border border-white/10">Learn</span>
                      <span className="px-2 py-1 bg-white/15 rounded-lg text-xs text-white/90 border border-white/10">Grow</span>
                    </>
                  )}
                  {index === 3 && (
                    <>
                      <span className="px-2 py-1 bg-white/15 rounded-lg text-xs text-white/90 border border-white/10">Deploy</span>
                      <span className="px-2 py-1 bg-white/15 rounded-lg text-xs text-white/90 border border-white/10">Test</span>
                    </>
                  )}
                  {index === 4 && (
                    <>
                      <span className="px-2 py-1 bg-white/15 rounded-lg text-xs text-white/90 border border-white/10">Results</span>
                      <span className="px-2 py-1 bg-white/15 rounded-lg text-xs text-white/90 border border-white/10">Quality</span>
                    </>
                  )}
                </div>

                <div className="text-white/40 text-xs font-medium">
                  {index === panels.length - 1 ? "Weiter ↓" : `${index + 1}/${panels.length}`}
                </div>
              </div>

              {/* Enhanced border separator with animation */}
              {index < panels.length - 1 && (
                <div className="absolute right-0 top-1/4 bottom-1/4 w-px">
                  <div className="w-full h-full bg-gradient-to-b from-transparent via-white/30 to-transparent animate-pulse" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}