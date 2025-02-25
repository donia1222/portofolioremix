"use client"

import { motion } from "framer-motion"
import { FiGrid, FiRefreshCw, FiUsers, FiStar } from "react-icons/fi"

const principles = [
  {
    icon: <FiGrid className="text-5xl" />,
    title: "App-Entwicklung",
    description: "Leistungsstarke und effiziente mobile Anwendungen.",
    gradient: "from-blue-400 to-indigo-600",
  },
  {
    icon: <FiRefreshCw className="text-5xl" />,
    title: "KI-Lösungen",
    description: "Fortschrittliche KI zur Automatisierung und Erweiterung.",
    gradient: "from-green-400 to-teal-500",
  },
  {
    icon: <FiUsers className="text-5xl" />,
    title: "Webentwicklung",
    description: "Lösungen für optimale Leistung und Design.",
    gradient: "from-pink-500 to-purple-600",
  },
  {
    icon: <FiStar className="text-5xl" />,
    title: "Innovation",
    description: "Neue Chancen und bessere Lösungen für unsere Kunden.",
    gradient: "from-yellow-400 to-orange-500",
  },
]

export default function ModernPrinciplesV2() {
  return (
    <section className="bg-gradient-to-br x-4 sm:px-6 lg:px-8 mb-20">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              className={`bg-gradient-to-br ${principle.gradient} p-0.5 rounded-2xl overflow-hidden`}
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="bg-gray-900 h-full rounded-2xl p-8 backdrop-blur-lg backdrop-filter">
                <motion.div
                  className="text-white mb-6 flex justify-center"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  {principle.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-white text-center mb-4">{principle.title}</h3>
                <p className="text-gray-300 text-center">{principle.description}</p>
                <motion.div
                  className="mt-6 h-1 bg-white rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

