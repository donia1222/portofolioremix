"use client"

import { motion } from "framer-motion"
import { Code, Package, Zap } from "lucide-react"

export default function VCardVersionen() {
  const versionen = [
    {
      titel: "React-Komponente",
      icon: <Code className="w-8 h-8 text-blue-400" />,
      beschreibung:
        "Eine modulare React-Komponente, die sich leicht in Ihre bestehenden Anwendungen integrieren lässt. Perfekt für Projekte, die bereits React verwenden und vCard-Funktionalität hinzufügen möchten.",
      funktionen: ["Einfache Integration", "Anpassbar", "Leistungsoptimiert"],
    },
    {
      titel: "Next.js-Modul",
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      beschreibung:
        "Speziell für Next.js entwickelt, nutzt es dessen einzigartige Funktionen wie serverseitiges Rendering (SSR) und statische Seitengenerierung (SSG).",
      funktionen: ["SSR- und SSG-kompatibel", "Integrierte API-Routen", "SEO-optimiert"],
    },
    {
      titel: "HTML, CSS & JavaScript",
      icon: <Package className="w-8 h-8 text-blue-400" />,
      beschreibung:
        "Eine Vanilla-Version, die auf jeder Website funktioniert. Perfekt für diejenigen, die maximale Flexibilität bevorzugen oder Kompatibilität mit spezifischen Plattformen benötigen.",
      funktionen: ["Keine Abhängigkeiten", "Einfach anzupassen", "Kompatibel mit jedem Framework"],
    },
  ]

  return (
    <div className="max-w-6xl w-full">
      <h1 className="text-4xl font-bold text-blue-300 mb-8 text-center">Versionen des vCard-Moduls</h1>
      <div className="grid md:grid-cols-3 gap-8">
        {versionen.map((version, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-gray-700 p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex items-center mb-4">
              {version.icon}
              <h2 className="text-xl font-semibold text-blue-300 ml-2">{version.titel}</h2>
            </div>
            <p className="text-gray-300 mb-4">{version.beschreibung}</p>
            <ul className="space-y-2">
              {version.funktionen.map((funktion, fIndex) => (
                <li key={fIndex} className="flex items-center text-gray-400">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  {funktion}
                </li>
              ))}
            </ul>
        
          </motion.div>
        ))}
      </div>
    </div>
  )
}

