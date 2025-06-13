"use client"

import type React from "react"

import { motion, useScroll, useTransform, useInView, type MotionValue } from "framer-motion"
import { useRef } from "react"
import { FiGrid, FiRefreshCw, FiUsers, FiStar, FiCode, FiShield } from "react-icons/fi"

interface Principle {
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
}

interface PrincipleCardProps {
  principle: Principle
  index: number
  scrollYProgress: MotionValue<number>
}

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
    title: "Webseiten",
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
    icon: <FiShield className="text-3xl" />,
    title: "Sicherheit",
    description: "Robuste Datenschutzmaßnahmen.",
    gradient: "from-cyan-400 to-blue-600",
  },
]

export default function ModernPrinciplesV3() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  return (
    <section ref={sectionRef} className="px-4 sm:px-6 lg:px-8 py-12 mt-20 mb-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <PrincipleCard key={index} principle={principle} index={index} scrollYProgress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PrincipleCard({ principle, index, scrollYProgress }: PrincipleCardProps) {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: false, amount: 0.3 })

  // Calculate random initial positions
  const randomX = ((index % 3) - 1) * 100
  const randomY = (index % 2) * 50 - 25
  const randomRotate = (index % 2 === 0 ? -1 : 1) * Math.floor(Math.random() * 15 + 5)

  // Transform values based on scroll
  const x = useTransform(scrollYProgress, [0.1, 0.3 + index * 0.05], [randomX, 0])

  const y = useTransform(scrollYProgress, [0.1, 0.3 + index * 0.05], [randomY, 0])

  const rotate = useTransform(scrollYProgress, [0.1, 0.3 + index * 0.05], [randomRotate, 0])

  const scale = useTransform(scrollYProgress, [0.1, 0.3 + index * 0.05], [0.8, 1])

  const opacity = useTransform(scrollYProgress, [0.1, 0.2 + index * 0.05], [0.3, 1])

  return (
    <motion.div
      ref={cardRef}
      style={{
        x,
        y,
        rotate,
        scale,
        opacity,
      }}
      className={`bg-gradient-to-br ${principle.gradient} p-0.5 rounded-xl overflow-hidden`}
      whileHover={{ scale: 1.03, rotate: 1, transition: { duration: 0.3 } }}
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
        <p className="text-gray-300 text-center text-sl">{principle.description}</p>
        <motion.div
          className="mt-3 h-0.5 bg-white rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: "100%" } : { width: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        />
      </div>
    </motion.div>
  )
}
