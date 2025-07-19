"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ArrowRight, Calculator } from "lucide-react"
import { Link } from "@remix-run/react"

interface NewsItem {
  icon: React.ReactNode
  title: string
  description: string
  link: string
}

const newsItems: NewsItem[] = [
  {
    icon: <Calculator className="h-10 w-10 text-pink-400" />,
    title: "Wieviel kostet eine maßgeschneiderte Webseite?",
    description:
      "Ein umfassender Leitfaden zur Budgetplanung für Ihre Webpräsenz. Erfahren Sie mehr über die verschiedenen Faktoren, die die Kosten einer professionellen Website beeinflussen können, und wie Sie Ihr Budget optimal planen können.",
    link: "/calculo",
  },
  // You can add more news items here
]

export default function NewsSection() {
  return (
    <section className=" ">
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Preise <span className="text-pink-400">berechnen</span>
          </h2>
          <div className="w-32 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Entdecken Sie unsere neuesten Einblicke und Ratgeber für Ihre digitale Präsenz.
          </p>
        </motion.div>

        <div className="flex justify-center">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="w-full max-w-4xl"
            >
              <Link to={item.link} className="block w-full">
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                    y: -8,
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden shadow-xl border border-gray-700/30 backdrop-blur-sm"
                >
                  <div className="p-10 md:p-12">
                    <div className="flex items-center mb-8">
                      <div
                        className="p-4 bg-gray-700/50 rounded-xl backdrop-blur-sm 
                                   shadow-inner border border-gray-600/30 
                                   bg-gradient-to-br from-gray-700 to-gray-800 mr-6"
                      >
                        {item.icon}
                      </div>
                      <h3 className="text-2xm md:text-3xl font-bold text-pink-400 leading-tight">{item.title}</h3>
                    </div>

                    <p className="text-gray-300 mb-8 eading-relaxed">{item.description}</p>

                    <div className="flex items-center text-blue-400 group">
                      <span className="mr-2 font-medium text-lg group-hover:mr-4 transition-all duration-300">
                      Berechnen
                      </span>
                      <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-all duration-300" />
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
