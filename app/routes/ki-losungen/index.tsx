"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowRight, Bot, Brain, BarChart, Zap, MessageSquare, Cog, ExternalLink } from "lucide-react"
import Header from "~/components/Header";
import Chat from "~/components/Chat";

export default function AIBusinessSolutions() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [isChatVisible, setIsChatVisible] = useState(true)
  const lastScrollY = useRef(0)

  useEffect(() => {
    // Agregar estilos dinámicamente para animaciones
    const style = document.createElement("style")
    style.textContent = `
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
        100% { transform: translateY(0px); }
      }
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      @keyframes pulse-glow {
        0%, 100% { opacity: 0.2; }
        50% { opacity: 0.4; }
      }
      .animate-pulse-glow {
        animation: pulse-glow 4s ease-in-out infinite;
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Si se hace scroll hacia abajo (y supera cierto umbral), se oculta el Chat
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsChatVisible(false);
      } 
      // Si se hace scroll hacia arriba, se muestra el Chat
      else if (currentScrollY < lastScrollY.current) {
        setIsChatVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <div className="relative z-[9999] mb-20">
        <Header />
      </div>

      {/* Fondo con degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-950 opacity-80"></div>

      {/* Animación de la cuadricula */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      {/* Efectos glow (ocultos en pantallas pequeñas) */}
      <div className="hidden md:block absolute top-20 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="hidden md:block absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-[128px] opacity-20 animate-pulse delay-1000"></div>

      <div className="relative container mx-auto px-4 py-20">
        {/* Sección Hero */}
        <div className="mb-24 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500">
              Stärken Sie Ihr Unternehmen mit KI
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl">
              Künstliche Intelligenz verändert die Art und Weise, wie Unternehmen arbeiten. Optimieren Sie Prozesse,
              verbessern Sie den Kundenservice und treffen Sie intelligentere Entscheidungen.
            </p>
            <button className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white font-medium transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transform hover:scale-105">
              <span className="relative z-10 flex items-center">Entdecken Sie die Zukunft</span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="mb-24s">
          <h2 className="text-3xl md:text-4xl font-bold text-center mt-40 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Maßgeschneiderte KI Lösungen
          </h2>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-16">
            Jedes Unternehmen ist einzigartig, und die KI, die Sie verwenden, sollte es auch sein. Modelle, die wie Ihr
            Team reagieren, abgestimmt auf Ihre Unternehmensvision.
          </p>

          {/* Cómo funciona */}
          <div className="grid md:grid-cols-3 gap-8 mb-2">
            {[
              {
                icon: <Brain className="h-10 w-10" />,
                title: "Personalisiertes Training",
                description:
                  "Entwicklung von KI-Modellen, die die spezifischen Bedürfnisse Ihres Unternehmens verstehen.",
              },
              {
                icon: <Cog className="h-10 w-10" />,
                title: "Fortschrittliches Fine-Tuning",
                description:
                  "Anpassung der Modelle für präzise Antworten, die die Essenz Ihres Unternehmens widerspiegeln.",
              },
              {
                icon: <Zap className="h-10 w-10" />,
                title: "Einfache Implementierung",
                description: "Integration der KI in Ihr digitales Ökosystem ohne technische Komplikationen.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-lg transition-all duration-500"></div>
                <div className="relative h-full backdrop-blur-sm bg-gray-900/60 border border-gray-800 p-8 rounded-2xl transition-all duration-300 group-hover:translate-y-[-5px] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-3 inline-block mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Renderizado condicional del Chat según el scroll */}
          {isChatVisible && (
            <div id="Chat" className="w-full relative" data-aos="fade-up" data-aos-delay="1200">
              <Chat />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
