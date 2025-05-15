"use client"

import { useEffect, useState } from "react"
import type React from "react"
import { Globe, Code, Search, ShieldCheck, Layout, Zap } from "lucide-react"
import { motion } from "framer-motion"
import Comparison from "./comparison"

interface Benefit {
  icon: React.ElementType
  title: string
  description: string
}

export default function ModernWebDevShowcase() {
  const [typingText, setTypingText] = useState("")
  const fullText = "professionellen Webpräsenz"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypingText(fullText.substring(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const benefits: Benefit[] = [
    {
      icon: Globe,
      title: "Responsive Design",
      description: "Perfekt angepasst an jedes Gerät für optimale Benutzererfahrung.",
    },
    {
      icon: Code,
      title: "Moderne Technologien",
      description: "Nutzung neuester Webtechnologien für schnelle, effiziente Websites.",
    },
    {
      icon: Search,
      title: "SEO-Optimierung",
      description: "Verbesserte Sichtbarkeit in Suchmaschinen für mehr organischen Traffic.",
    },
    {
      icon: ShieldCheck,
      title: "Sicherheit & Performance",
      description: "Höchste Sicherheitsstandards und optimale Ladezeiten garantiert.",
    },
    {
      icon: Layout,
      title: "Joomla CMS",
      description: "Flexibles Content-Management mit Joomla für einfache Verwaltung.",
    },
    {
      icon: Zap,
      title: "Moderne Frameworks",
      description: "Nutzung von Next.js oder Remix für leistungsstarke Webanwendungen.",
    },
  ]

  return (
    <div className="min-h-screen text-white mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-14 mt-24">
            Steigern Sie Ihr Geschäft mit einer
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 mb-8 relative">
              {" "}
              <span>{typingText}</span>
              <motion.span
                className="inline-block w-0.5 h-8 bg-blue-500 ml-1 absolute"
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
              />
            </span>
          </h2>
        </div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" initial="hidden" animate="visible">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl flex items-start space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="bg-gray-700 p-2 rounded-full">
                <benefit.icon className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div id="openSourceBlock" className="w-full relative mt-20">
          <Comparison />
        </div>
      </div>
    </div>
  )
}
