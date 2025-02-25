"use client"

import type React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Newspaper, Calculator, Palette, Clock, X } from "lucide-react"
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
    icon: <Newspaper className="h-8 w-8 text-blue-400" />,
    title: "Vorteile der Beauftragung eines Freelancers",
    description: "Entdecken Sie, wie Freelancer Ihr Projekt zum Erfolg führen können.",
    link: "/blog#vorteile-der-beauftragung-eines-freelancers",
    readTime: 5 * 60, // 5 minutes in seconds
  },
  {
    icon: <Calculator className="h-8 w-8 text-green-400" />,
    title: "Wie viel kostet eine Webseite?",
    description: "Ein umfassender Leitfaden zur Budgetplanung für Ihre Webpräsenz.",
    link: "/calculo",
  },
  {
    icon: <Palette className="h-8 w-8 text-yellow-400" />,
    title: "Günstige, benutzerfreundliche Webseiten",
    description: "Erstellen Sie Ihre eigene Webseite ohne Programmierkenntnisse - für nur 800 CHF!",
    link: "/low-cost-website",
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
  const [showPopup, setShowPopup] = useState(false)

  const handleWebsiteClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    setShowPopup(true)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-900 to-blue-900">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Aktuelle Neuigkeiten
            </span>
          </h2>
          <p className="text-xl text-gray-300">Bleiben Sie informiert mit unseren neuesten Artikeln</p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Link
                to={item.link}
                className="block"
                onClick={
                  item.title === "Kostengünstige, benutzerfreundliche Webseiten" ? handleWebsiteClick : undefined
                }
              >
                <motion.div
                  whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-gray-700 rounded-full">{item.icon}</div>
                      {index === 0 && item.readTime && (
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

      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-gray-800 p-6 rounded-lg max-w-md relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-white"
                onClick={() => setShowPopup(false)}
              >
                <X className="h-6 w-6" />
              </button>
              <h3 className="text-xl font-bold text-white mb-4">Revolutionäre Webseiten-Erstellung</h3>
              <p className="text-gray-300 mb-4">
                Wir entwickeln gerade eine bahnbrechende Lösung für kostengünstige Webseiten. Mit unserem innovativen
                System können Sie bald:
              </p>
              <ul className="list-disc list-inside text-gray-300 mb-4">
                <li>Fotos und Texte ohne Programmierkenntnisse ändern</li>
                <li>Ihre Webseite flexibel gestalten</li>
                <li>Von einem unschlagbaren Preis von nur 800 CHF profitieren</li>
              </ul>
              <p className="text-gray-300">
                Bleiben Sie dran! In Kürze können Sie eine Demoversion testen und sich von der Einfachheit und
                Leistungsfähigkeit unserer Lösung überzeugen.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

