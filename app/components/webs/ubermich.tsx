"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Smartphone, Globe, Bot, Rocket, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"

const services = [
  {
    id: "mobile",
    title: "Mobile Apps",
    subtitle: "iOS & Android",
    icon: Smartphone,
    gradient: "from-blue-400 via-purple-500 to-pink-500",
    description: "Entwicklung nativer und plattformübergreifender mobiler Anwendungen mit modernsten Technologien.",
    features: ["React Native", "Flutter", "Swift", "Kotlin"],
  },
  {
    id: "web",
    title: "Web Development",
    subtitle: "Modern & Responsive",
    icon: Globe,
    gradient: "from-green-400 via-blue-500 to-purple-600",
    description: "Responsive Webseiten und Web-Apps mit optimaler Performance und SEO.",
    features: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "ai",
    title: "AI Integration",
    subtitle: "ChatGPT & More",
    icon: Bot,
    gradient: "from-orange-400 via-red-500 to-pink-600",
    description: "Integration von KI-Technologien zur Automatisierung und Verbesserung von Geschäftsprozessen.",
    features: ["OpenAI API", "Machine Learning", "Automation", "Chatbots"],
  },
  {
    id: "consulting",
    title: "Tech Consulting",
    subtitle: "Strategic Solutions",
    icon: Rocket,
    gradient: "from-purple-400 via-pink-500 to-red-500",
    description: "Strategische Beratung für digitale Transformation und Technologie-Implementierung.",
    features: ["Architecture", "Strategy", "Optimization", "Scaling"],
  },
]

const Particle = ({ index }: { index: number }) => {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      ref={ref}
      className="absolute w-1 h-1 bg-white rounded-full opacity-20"
      initial={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }}
      animate={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }}
      transition={{
        duration: Math.random() * 20 + 10,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "linear",
        delay: Math.random() * 5,
      }}
    />
  )
}

const ServiceCard = ({ service, index }: { service: (typeof services)[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [15, -15]))
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-15, 15]))

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <motion.div
        className="relative h-80 rounded-3xl overflow-hidden backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl"
        whileHover={{ scale: 1.05, z: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20`} />

        {/* Animated Gradient Overlay */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0`}
          animate={{ opacity: isHovered ? 0.3 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative z-10 p-8 h-full flex flex-col justify-between">
          <div>
            <motion.div
              className="mb-6"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <service.icon className="w-12 h-12 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-white/80 text-sm">{service.subtitle}</p>
            </motion.div>

            <motion.p
              className="text-white/90 text-sm leading-relaxed mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0.7 }}
              transition={{ duration: 0.3 }}
            >
              {service.description}
            </motion.p>
          </div>

          <motion.div
            className="space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
            transition={{ duration: 0.3 }}
          >
       
          </motion.div>
        </div>

        {/* Shine Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "100%" : "-100%" }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2))",
              "linear-gradient(45deg, rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))",
              "linear-gradient(45deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.2))",
            ],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      {/* Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="fixed w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 pointer-events-none z-0 blur-3xl"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <motion.div
          className="container mx-auto px-6 pt-20 pb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <img
              src="/yo2.png"
              alt="Roberto Salvador"
              className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-white/20 shadow-2xl mt-20"
            />
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Roberto Salvador
          </motion.h1>

          <motion.p
            className="text-xl md:text-1xl text-white/80 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Full-Stack Developer & Digital Innovation Specialist
          </motion.p>

          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {[Github, Linkedin, Twitter].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Services Grid */}
        <div className="container mx-auto px-6 py-16">
 

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
