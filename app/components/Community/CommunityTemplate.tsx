"use client"

import { useEffect } from "react"
import TemplateShowcase from "./template-showcase"
import { motion } from "framer-motion"

export default function BeispielPage() {
  // Añadir efecto de desplazamiento suave
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <div className="min-h-screen py-12 px-4 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>

        {/* Partículas flotantes */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"
        >
          Premium Template
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-center mb-12 text-gray-400 max-w-2xl mx-auto"
        >
          Entdecken Sie unsere professionelle Vorlage für Schönheitssalons und Friseursalons. Perfekt für Unternehmen,
          die einen modernen und eleganten Online-Auftritt suchen.
        </motion.p>

        <TemplateShowcase
          title="Premium-Vorlage für Schönheitssalon"
          subtitle="Professionelles und modernes Design für Ihr Unternehmen"
          price={800}
          currency="CHF"
          ctaText="Web ansehen"
          onCtaClick={() => window.open("https://beautystyles.vercel.app/", "_blank")}
        />


      </div>
    </div>
  )
}
