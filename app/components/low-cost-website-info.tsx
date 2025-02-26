"use client"

import type React from "react"
import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Palette, Zap, DollarSign } from "lucide-react"

interface Advantage {
  icon: React.ReactNode
  text: string
}

const advantages: Advantage[] = [
  {
    icon: <Palette className="w-6 h-6 text-blue-400" />,
    text: "Einfache Anpassung von Fotos und Texten ohne Programmierkenntnisse",
  },
  {
    icon: <Zap className="w-6 h-6 text-yellow-400" />,
    text: "Flexible Gestaltung Ihrer Webseite",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-green-400" />,
    text: "Unschlagbarer Preis von nur 800 CHF",
  },
]

export default function LowCostWebsiteInfo() {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const handleIframeLoad = () => {
      if (iframeRef.current) {
        iframeRef.current.style.height = `${iframeRef.current.contentWindow?.document.body.scrollHeight}px`
      }
    }

    if (iframeRef.current) {
      iframeRef.current.addEventListener("load", handleIframeLoad)
    }

    return () => {
      if (iframeRef.current) {
        iframeRef.current.removeEventListener("load", handleIframeLoad)
      }
    }
  }, [])

  return (
    <div className="bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8 rounded-2xl shadow-2xl">
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Kostengünstige, benutzerfreundliche Webseiten
      </motion.h2>

      <motion.p
        className="text-lg text-gray-300 mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Erstellen Sie Ihre eigene professionelle Webseite ohne Programmierkenntnisse und zu einem unschlagbaren Preis!
      </motion.p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {advantages.map((advantage, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-xl flex items-start space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <div className="bg-gray-700 p-2 rounded-full">{advantage.icon}</div>
            <p className="text-gray-300">{advantage.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="text-lg text-gray-300 mb-4">
          Bleiben Sie dran! In Kürze können Sie eine Demoversion testen und sich von der Einfachheit und
          Leistungsfähigkeit unserer Lösung überzeugen.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105">
          Mehr erfahren
        </button>
      </motion.div>

      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <div className="relative mx-auto w-80 h-[600px] bg-gray-800 rounded-[60px] shadow-xl overflow-hidden border-[14px] border-gray-800">
          <div className="absolute top-0 inset-x-0">
            <div className="h-[32px] w-[40%] mx-auto bg-gray-800 rounded-b-[2rem]"></div>
          </div>
          <div className="h-full w-full bg-white overflow-hidden">
            <iframe
              ref={iframeRef}
              src="http://gipser.lweb.ch"
              className="w-full h-full"
              style={{ border: "none" }}
            />
          </div>
          <div className="absolute bottom-0 inset-x-0 flex justify-center">
            <div className="h-[4px] w-1/3 bg-gray-600 rounded-full mb-2"></div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

