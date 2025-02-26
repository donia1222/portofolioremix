"use client"

import type React from "react"
import { useRef } from "react"
import { motion } from "framer-motion"
import { Palette, Zap, DollarSign, ArrowLeft, Heart, MapPin, MessageSquare, PhoneCall, Image, FileText, Download } from "lucide-react"

interface Advantage {
  icon: React.ReactNode
  text: string
}

const advantages: Advantage[] = [
  { icon: <Palette className="w-6 h-6 text-blue-400" />, text: "Individuelles Design, das an Ihr Unternehmen angepasst ist" },
  { icon: <Image className="w-6 h-6 text-yellow-400" />, text: "Galerie zur Präsentation Ihres Unternehmens, Produkte oder Dienstleistungen" },
  { icon: <Zap className="w-6 h-6 text-purple-400" />, text: "Animierte Einführung mit Ihrem Logo für einen professionellen ersten Eindruck" },
  { icon: <PhoneCall className="w-6 h-6 text-green-400 hidden lg:inline" />, text: "WhatsApp-Button für direkte Kundenkommunikation" },
  { icon: <FileText className="w-6 h-6 text-teal-400" />, text: "Kontaktformular für einfache Kundenanfragen" },
  { icon: <MessageSquare className="w-6 h-6 text-orange-400" />, text: "Kundenbewertungen, um Vertrauen zu schaffen" },
  { icon: <MapPin className="w-6 h-6 text-red-400" />, text: "Interaktive Karte mit der Position Ihres Unternehmens" },
  { icon: <Download className="w-6 h-6 text-gray-400" />, text: "Download-Button für Ihre digitale Visitenkarte" },
]

export default function LowCostWebsiteInfo() {
  const desktopIframeRef = useRef<HTMLIFrameElement>(null)

  return (
    <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white min-h-screen flex flex-col items-center p-8 pb-20">
      <div className="w-full max-w-6xl">
        <div className="mb-4">
          <button onClick={() => window.history.back()} className="flex items-center text-white hover:text-blue-700">
            <ArrowLeft className="w-8 h-8" />
          </button>
        </div>

        <div className="flex-grow">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mt-10" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Professionelle, selbstverwaltbare Webseiten
          </motion.h2>

          <motion.p className="text-lg text-gray-300 mb-8 text-center" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            Unsere moderne und flexible Weblösung ermöglicht es Ihnen, Ihre Inhalte **selbst zu aktualisieren**, ohne von Dritten abhängig zu sein.
          </motion.p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {advantages.map((advantage, index) => (
              <motion.div key={index} className="bg-gray-800 p-6 rounded-xl flex items-start space-x-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}>
                <div className="bg-gray-700 p-2 rounded-full">{advantage.icon}</div>
                <p className="text-gray-300 mt-2">{advantage.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MOBILE VIEW */}
        <motion.div className="mt-16 flex flex-col items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
          {/* IMAGEN Y BOTÓN PARA MÓVILES */}
          <div className="mt-8 flex flex-col items-center lg:hidden">
            <img src="/2836826.jpg" alt="Info Bild" className="w-124 h-auto rounded-xl shadow-lg" />

          </div>

          {/* DESKTOP VIEW - DOS IMÁGENES EN LUGAR DEL IFRAME */}
          <div className="hidden lg:flex gap-8">
      
          <img src="/2836826.jpg" alt="Info Bild" className="w-124 h-auto rounded-xl shadow-lg" />
            
          </div>
     
        </motion.div>

        {/* PREIS & KONTAKT */}
        <motion.p className="text-lg text-center text-gray-200 mt-12" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
          **Bearbeiten Sie Inhalte in wenigen Minuten**  
          Dank unseres benutzerfreundlichen Admin-Panels können Sie **Texte, Bilder und mehr** in weniger als zwei Stunden selbst verwalten – **ohne technische Kenntnisse**.
        </motion.p>

        <motion.p className="text-2xl text-center text-white font-bold mt-8" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
          💻 Einmaliger Preis: **990 CHF**  
          **Keine monatlichen Gebühren – einfach, schnell & professionell!**
        </motion.p>

        <motion.p className="text-lg text-center text-gray-300 mt-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }}>
          📩 **Kontaktieren Sie uns jetzt und digitalisieren Sie Ihr Geschäft!**
        </motion.p>
      </div>
    </div>
  )
}
