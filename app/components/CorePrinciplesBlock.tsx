"use client"

import { motion } from "framer-motion"
import { FiGrid, FiRefreshCw, FiUsers, FiStar, FiCode, FiLayers, FiShield, FiTrendingUp } from "react-icons/fi"

const principles = [
  {
    icon: <FiGrid className="text-3xl" />,
    title: "App-Entwicklung",
    description: "Leistungsstarke mobile Apps.",
    gradient: "from-blue-400 to-indigo-600",
  },
  {
    icon: <FiRefreshCw className="text-3xl" />,
    title: "KI-Lösungen",
    description: "Fortschrittliche KI-Automation.",
    gradient: "from-green-400 to-teal-500",
  },
  {
    icon: <FiUsers className="text-3xl" />,
    title: "Webentwicklung",
    description: "Optimale Leistung & Design.",
    gradient: "from-pink-500 to-purple-600",
  },
  {
    icon: <FiStar className="text-3xl" />,
    title: "Innovation",
    description: "Neue Chancen für Kunden.",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    icon: <FiCode className="text-3xl" />,
    title: "Clean Code",
    description: "Wartbare Softwarelösungen.",
    gradient: "from-red-400 to-pink-600",
  },
  {
    icon: <FiLayers className="text-3xl" />,
    title: "Skalierbarkeit",
    description: "Wachstum unterstützende Systeme.",
    gradient: "from-purple-400 to-indigo-600",
  },
  {
    icon: <FiShield className="text-3xl" />,
    title: "Sicherheit",
    description: "Robuste Datenschutzmaßnahmen.",
    gradient: "from-cyan-400 to-blue-600",
  },
  {
    icon: <FiTrendingUp className="text-3xl" />,
    title: "Optimierung",
    description: "Kontinuierliche Verbesserung.",
    gradient: "from-emerald-400 to-green-600",
  },
]

export default function ModernPrinciplesV3() {
  return (
    <section className="bg-gradient-to-br from-gray-900 to-gray-800 px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${principle.gradient} p-0.5 rounded-xl overflow-hidden`}
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ scale: 1.03, rotate: 1 }}
            >
              <div className="bg-gray-900 h-full rounded-xl p-4 backdrop-blur-sm backdrop-filter">
                <motion.div
                  className="text-white mb-3 flex justify-center"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {principle.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-white text-center mb-2">{principle.title}</h3>
                <p className="text-gray-300 text-center text-sm">{principle.description}</p>
                <motion.div
                  className="mt-3 h-0.5 bg-white rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

