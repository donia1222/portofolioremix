"use client"

import { motion } from "framer-motion"
import { FiGrid, FiRefreshCw, FiUsers, FiStar } from "react-icons/fi"

export default function Component() {
  const principles = [
    {
      icon: <FiGrid className="text-4xl text-white mb-4" />,
      title: "App-Entwicklung",
      description: "Entwicklung von leistungsstarken und effizienten mobilen Anwendungen.",
      colors: ["#1a0b2e", "#3b0764", "#5b21b6", "#7e22ce"],
    },
    {
      icon: <FiRefreshCw className="text-4xl text-white mb-4" />,
      title: "KI-Lösungen",
      description: "Integration fortschrittlicher KI-Lösungen zur Automatisierung und Erweiterung.",
      colors: ["#0f172a", "#1e3a8a", "#2563eb", "#3b82f6"],
    },
    {
      icon: <FiUsers className="text-4xl text-white mb-4" />,
      title: "Webentwicklung",
      description: "CMS-freie Lösungen für optimale Leistung und individuelles Design zu bieten.",
      colors: ["#14532d", "#047857", "#10b981", "#34d399"],
    },
    {
      icon: <FiStar className="text-4xl text-white mb-4" />,
      title: "Innovation",
      description: "Wir begrüßen Innovation als einen Weg, neue Chancen und bessere Lösungen für unsere Kunden zu schaffen.",
      colors: ["#7c2d12", "#c2410c", "#ea580c", "#fb923c"],
    },
  ]

  return (
    <section className="w-full py-24 transparent text-white overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-6xl font-bold">Was wir machen</h2> 
  
      </div>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        {principles.map((principle, index) => (
          <motion.div
            key={index}
            className="relative w-80 h-80"
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}  // Animación al aparecer en el viewport
            viewport={{ once: true, amount: 0.2 }}  // Se anima cuando el 20% del elemento es visible
            transition={{ duration: 0.8, delay: index * 0.2, type: "spring" }}
          >
            <svg viewBox="0 0 250 250" className="w-full h-full">
              <defs>
                <radialGradient id={`gradient-${index}`} cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                  {principle.colors.map((color, i) => (
                    <stop key={i} offset={`${(i / 3) * 100}%`} stopColor={color} />
                  ))}
                </radialGradient>
              </defs>
              <motion.circle
                cx="125"
                cy="125"
                r="115"
                fill={`url(#gradient-${index})`}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.5, delay: index * 0.2 }}
              />
              {[...Array(7)].map((_, i) => (
                <motion.path
                  key={i}
                  d={`M 25 ${40 + i * 30} Q 125 ${50 + i * 30} 225 ${40 + i * 30}`}
                  fill="none"
                  stroke={principle.colors[2]}
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 1.2, delay: index * 0.2 + 0.5 }}
                />
              ))}
            </svg>
            <motion.div 
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 1 }}
            >
              {principle.icon}
              <h3 className="text-xl font-bold mb-4">{principle.title}</h3>
              <p className="text-white text-base leading-tight">{principle.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
