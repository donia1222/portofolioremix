"use client"

import type React from "react"
import { Globe, Code, Search, ShieldCheck, ArrowRight, Layout, Zap } from "lucide-react"
import { motion } from "framer-motion"
import {Newspaper, Calculator } from 'lucide-react'
import { Link } from "@remix-run/react"
interface Benefit {
  icon: React.ElementType
  title: string
  description: string
}

export default function ModernWebDevShowcase() {
  const benefits: Benefit[] = [
    {
      icon: Globe,
      title: "Responsives Design",
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
    <div className="min-h-screen  text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mt-20 font-extrabold mb-4">
            Steigern Sie Ihr Geschäft mit einer
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              {" "}
              professionellen Webpräsenz
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Entfesseln Sie das volle Potenzial Ihrer Online-Präsenz mit modernsten Webentwicklungslösungen,
            maßgeschneidert für Ihre Bedürfnisse.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      
          initial="hidden"
          animate="visible"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="rounded-lg p-6 bg-gray-800 shadow-lg transform transition-all hover:scale-105"
        
            >
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-center mb-4">{benefit.title}</h3>
              <p className="text-center text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
        <section className="w-full py-12 md:py-24 lg:py-32  bg-gradient-to-r ">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]"
        >
          <div className="flex flex-col justify-center space-y-4">

          </div>
          <div className="flex flex-col items-start space-y-4">
       

            <Link
            to="/calculo"
  className="w-full"
>
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className="w-full p-6 bg-blue-900  backdrop-blur-lg rounded-2xl shadow-lg hover:bg-opacity-20 transition-all duration-300 group"
  >
    <div className="flex items-center space-x-4">
      <div className="bg-blue-500 p-3 rounded-full">
        <Calculator className="h-6 w-6 text-white" />
      </div>
      <div className="flex-1 space-y-1">
        <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
          Wie viel kostet eine Webseite?
        </h3>
      </div>
      <ArrowRight className="h-5 w-5 text-blue-300 group-hover:translate-x-1 transition-transform duration-300" />
    </div>
  </motion.div>
</Link>

          </div>
        </motion.div>
      </div>
    </section>
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold mb-6">Professionelle Webentwicklung</h3>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-300">
            Als erfahrener Webentwickler biete ich maßgeschneiderte Lösungen, die Ihr Unternehmen online zum Strahlen
            bringen. Von responsiven Websites bis hin zu komplexen Webanwendungen - ich bringe Ihre Ideen zum Leben.
          </p>
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-semibold mb-4">Die Vorteile von Joomla</h4>
              <p className="text-gray-300">
                Joomla ist ein leistungsstarkes Content-Management-System, das Flexibilität und Benutzerfreundlichkeit
                vereint. Es ermöglicht Ihnen, Ihre Website einfach zu verwalten und zu aktualisieren, ohne tiefgreifende
                technische Kenntnisse zu benötigen. Mit einer Vielzahl von Erweiterungen und Themes können Sie Ihre
                Website genau nach Ihren Vorstellungen gestalten.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold mb-4">Moderne Frameworks wie Next.js und Remix</h4>
              <p className="text-gray-300">
                Frameworks wie Next.js und Remix revolutionieren die Webentwicklung. Sie bieten hervorragende Leistung,
                verbesserte SEO und eine großartige Entwicklererfahrung. Mit diesen Tools können wir hochperformante,
                skalierbare und benutzerfreundliche Webanwendungen erstellen, die Ihr Unternehmen in die Zukunft führen.
              </p>
            </div>
          </div>
   
        </div>
      </div>
    </div>
  )
}

