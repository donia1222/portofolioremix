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
  const rotate = useTransform(scrollYProgress, [0, 1], [-2, 2])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.95])

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate, scale }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/[0.08] shadow-2xl"
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: 45 }}
      animate={
        isInView
          ? {
              opacity: 1,
              x: 0,
              rotateY: 0,
              transition: {
                duration: 0.8,
                delay: (index % 3) * 0.15,
                type: "spring",
                stiffness: 120,
                damping: 20,
              },
            }
          : {}
      }
      whileHover={{
        scale: 1.02,
        rotateY: 5,
        z: 50,
        transition: { duration: 0.4, ease: "easeOut" },
      }}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500`}
      />

      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        style={{
          background: `linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`,
        }}
        animate={{
          x: ["-200%", "200%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          repeatDelay: 3,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 p-8 h-full flex flex-col items-center text-center">
        <motion.div
          className="mb-6 p-4 rounded-2xl bg-gradient-to-br from-white/[0.12] to-white/[0.04] backdrop-blur-sm border border-white/[0.08]"
          whileHover={{
            rotate: 360,
            scale: 1.1,
            boxShadow: "0 0 30px rgba(255,255,255,0.2)",
          }}
          transition={{ duration: 0.6, type: "spring" }}
          animate={
            isInView
              ? {
                  rotate: [0, 360],
                  transition: { duration: 1.2, delay: (index % 3) * 0.2 },
                }
              : {}
          }
        >
          <div className="text-3xl text-white">{principle.icon}</div>
        </motion.div>

        <motion.h3
          className="text-xl font-bold text-white mb-3 tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  transition: { delay: (index % 3) * 0.15 + 0.3, duration: 0.6 },
                }
              : {}
          }
        >
          {principle.title}
        </motion.h3>

        <motion.p
          className="text-gray-300/90 text-sm leading-relaxed flex-1"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  transition: { delay: (index % 3) * 0.15 + 0.5, duration: 0.6 },
                }
              : {}
          }
        >
          {principle.description}
        </motion.p>

        <motion.div
          className="mt-6 h-0.5 rounded-full overflow-hidden bg-white/[0.08] w-full"
          initial={{ opacity: 0 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  transition: {
                    delay: (index % 3) * 0.15 + 0.7,
                    duration: 0.4,
                  },
                }
              : {}
          }
        >
          <motion.div
            className={`h-full bg-gradient-to-r ${principle.gradient} rounded-full`}
            initial={{ width: 0 }}
            animate={
              isInView
                ? {
                    width: "100%",
                    transition: {
                      duration: 1.2,
                      delay: (index % 3) * 0.15 + 0.8,
                      ease: "easeOut",
                    },
                  }
                : {}
            }
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.08] to-transparent p-[1px]">
        <div className="w-full h-full rounded-2xl bg-gray-950/50" />
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

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.4])

  return (
    <div className="bg-gray-950 relative overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          y: backgroundY,
          background:
            "radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)",
        }}
      />

      <section ref={containerRef} className="px-4 sm:px-6 lg:px-8 py-16 mt-12 mb-40 relative z-10">
        <motion.div className="max-w-7xl mx-auto" style={{ opacity }}>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {principles.map((principle, index) => (
              <PrincipleCard key={index} principle={principle} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${
            i % 3 === 0
              ? "w-1 h-1 bg-blue-400/30"
              : i % 3 === 1
                ? "w-1.5 h-1.5 bg-purple-400/20"
                : "w-0.5 h-0.5 bg-white/40"
          }`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -120, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}