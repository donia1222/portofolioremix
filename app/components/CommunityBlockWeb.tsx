"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Newspaper, Calculator, Palette, Clock } from "lucide-react"
import { Link } from "@remix-run/react"
import { useState, useEffect } from "react"

interface NewsItem {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  readTime?: number
}

const newsItems: NewsItem[] = [

  {
    icon: <Calculator className="h-8 w-8 text-green-400" />,
    title: "Wieviel kostet eine maßgeschneiderte Webseite?",
    description: "Ein umfassender Leitfaden zur Budgetplanung für Ihre Webpräsenz.",
    link: "/calculo",
  },
  {
    icon: <Palette className="h-8 w-8 text-yellow-400" />,
    title: "Kosteneffiziente, vorgefertigte Webseiten",
    description: "Flexible Weblösung ermöglicht es Ihnen, Ihre Inhalte **selbst zu aktualisieren**",
    link: "/low-cost-website-info",
  },
]

interface CountupTimerProps {
  totalTime: number
}

function CountupTimer({ totalTime }: CountupTimerProps) {
  const [timeElapsed, setTimeElapsed] = useState<number>(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed((prevTime: number) => (prevTime < totalTime ? prevTime + 1 : totalTime))
    }, 1000)

    return () => clearInterval(timer)
  }, [totalTime])

  const minutes = Math.floor(timeElapsed / 60)
  const seconds = timeElapsed % 60

  return (
    <span>
      {minutes}:{seconds.toString().padStart(2, "0")} min gelesen
    </span>
  )
}

export default function NewsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 0">
      <div className="container px-4 md:px-6 mx-auto">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link to={item.link} className="block">
                <motion.div
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-gray-700 rounded-full">{item.icon}</div>
                      {item.readTime && (
                        <div className="flex items-center text-gray-400">
                          <Clock className="h-4 w-4 mr-1" />
                          <span className="text-sm">
                            <CountupTimer totalTime={item.readTime} />
                          </span>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 mb-4">{item.description}</p>
                    <div className="flex items-center text-blue-400 group">
                      <span className="mr-2 group-hover:mr-4 transition-all duration-300">Mehr lesen</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-all duration-300" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

