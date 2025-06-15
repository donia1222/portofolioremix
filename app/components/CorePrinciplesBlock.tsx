"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { FiGrid, FiRefreshCw, FiUsers, FiStar, FiCode, FiShield } from "react-icons/fi"
import { useRef } from "react"

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
    description: "Wartbare Software.",
    gradient: "from-red-400 to-pink-600",
  },
  {
    icon: <FiShield className="text-3xl" />,
    title: "Sicherheit",
    description: "Robuste Datenschutz.",
    gradient: "from-cyan-400 to-blue-600",
  },
]

function PrincipleCard({ principle, index }: { principle: any; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.1, 0.9])

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate, scale }}
      className={`bg-gradient-to-br ${principle.gradient} p-0.5 rounded-xl overflow-hidden`}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: 45 }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              rotateY: 0,
              transition: {
                duration: 0.8,
                delay: (index % 3) * 0.2,
                type: "spring",
                stiffness: 100,
              },
            }
          : {}
      }
      whileHover={{
        scale: 1.05,
        rotateY: 10,
        z: 50,
        transition: { duration: 0.3 },
      }}
    >
      <div className="bg-gray-900/90 h-full rounded-xl p-4 backdrop-blur-sm backdrop-filter relative overflow-hidden">
        {/* Animated background effect */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            background: `linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)`,
          }}
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 2,
            ease: "linear",
          }}
        />

        <motion.div
          className="text-white mb-3 flex justify-center relative z-10"
          whileHover={{
            rotate: 360,
            scale: 1.2,
            filter: "drop-shadow(0 0 20px rgba(255,255,255,0.5))",
          }}
          transition={{ duration: 0.6, type: "spring" }}
          animate={
            isInView
              ? {
                  rotate: [0, 360],
                  transition: { duration: 1, delay: (index % 3) * 0.3 },
                }
              : {}
          }
        >
          {principle.icon}
        </motion.div>

        <motion.h3
          className="text-lg font-bold text-white text-center mb-2 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  transition: { delay: (index % 3) * 0.2 + 0.3 },
                }
              : {}
          }
        >
          {principle.title}
        </motion.h3>

        <motion.p
          className="text-gray-300 text-center text-sm relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  transition: { delay: (index % 3) * 0.2 + 0.5 },
                }
              : {}
          }
        >
          {principle.description}
        </motion.p>

        <motion.div
          className="mt-3 h-0.5 bg-white rounded-full relative z-10"
          initial={{ width: 0, opacity: 0 }}
          animate={
            isInView
              ? {
                  width: "100%",
                  opacity: 1,
                  transition: {
                    duration: 0.8,
                    delay: (index % 3) * 0.2 + 0.7,
                    ease: "easeOut",
                  },
                }
              : {}
          }
        />
      </div>
    </motion.div>
  )
}

export default function ScrollInteractivePrinciples() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])

  return (
    <div className="bg-gray-950 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          y: backgroundY,
          background: "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
        }}
      />

      <section ref={containerRef} className="px-4 sm:px-6 lg:px-8 py-8 mt-12 mb-40 relative z-10">
        <motion.div className="max-w-7xl mx-auto" style={{ opacity }}>
          {/* Header with scroll animation */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                background: "linear-gradient(90deg, #fff, #60a5fa, #a855f7, #fff)",
                backgroundSize: "200% 100%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Unsere Prinzipien
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          {/* Grid with staggered animations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <PrincipleCard key={index} principle={principle} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Floating particles effect */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
