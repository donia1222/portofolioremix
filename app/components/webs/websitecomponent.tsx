"use client"

import type React from "react"
import { Globe, Code, Search, ShieldCheck, ArrowRight, Layout, Zap } from "lucide-react"
import { motion } from "framer-motion"

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

