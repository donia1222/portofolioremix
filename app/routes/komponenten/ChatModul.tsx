"use client"

import type React from "react"
import { useState, type FormEvent, type ChangeEvent } from "react"
import { motion } from "framer-motion"
import { MessageSquare, Users, Zap, Shield, Globe, Send } from 'lucide-react'
import SpaceChat from "./space-chat"

interface FeatureItem {
  icon: React.ReactNode
  text: string
}

interface XProps {
  size: number
}

export default function ChatModulIntegrated() {
  const [message, setMessage] = useState<string>("")
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [showDemo, setShowDemo] = useState<boolean>(false)

  const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (message.trim()) {
      // Placeholder for sending message functionality
      alert(`Message sent: ${message}`)
      setMessage("")
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value)
  }

  const features: FeatureItem[] = [
    { icon: <MessageSquare className="text-pink-400" />, text: "Echtzeit-Kommunikation mit Besuchern" },
    { icon: <Users className="text-pink-400" />, text: "Mehrere Support-Agenten können gleichzeitig antworten" },
    { icon: <Zap className="text-pink-400" />, text: "Schnelle Ladezeiten und reaktionsschnelle Benutzeroberfläche" },
    { icon: <Shield className="text-pink-400" />, text: "Sichere und verschlüsselte Kommunikation" },
    { icon: <Globe className="text-pink-400" />, text: "Mehrsprachiger Support integriert" },
  ]

  return (
    <div className="flex flex-col items-center justify-center">
      {showDemo ? (
        <div className="w-full max-w-4xl">
          <SpaceChat />
          <div className="mt-4 text-center">
            <button 
              onClick={() => setShowDemo(false)}
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full text-sm shadow-lg transition duration-300"
            >
              Zurück zur Übersicht
            </button>
          </div>
        </div>
      ) : (
        <>
          <motion.div
            className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full border border-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-pink-400 mb-4">Chat-Modul</h1>
                <p className="text-lg text-gray-300 mb-6">
                  Verbessern Sie den Kundensupport mit unserem leistungsstarken Live-Chat-Modul.
                </p>
                <ul className="space-y-3 mb-8">
                  {features.map((item, index) => (
                    <li key={index} className="flex items-center space-x-3 text-gray-300">
                      {item.icon}
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="bg-pink-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full text-lg shadow-lg flex items-center space-x-2 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  onClick={() => setShowDemo(true)}
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Jetzt testen</span>
                </motion.button>
              </div>
              <div className="relative">
                <motion.div
                  className="rounded-lg overflow-hidden shadow-2xl border border-gray-700 bg-gray-900"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-4 border-b border-gray-700 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <span className="text-gray-300 text-sm">Support Online</span>
                    </div>
                    <button className="text-gray-400 hover:text-white">
                      <X size={16} />
                    </button>
                  </div>
                  <div className="h-64 p-4 overflow-y-auto flex flex-col space-y-4">
                    <div className="bg-gray-800 p-3 rounded-lg max-w-[80%] self-start">
                      <p className="text-gray-300">Hallo! Wie kann ich Ihnen heute helfen?</p>
                      <span className="text-xs text-gray-500">Support • 10:30</span>
                    </div>
                    <div className="text-pink-400 p-3 rounded-lg max-w-[80%] self-end">
                      <p className="text-white">Ich habe eine Frage zu Ihrem Produkt.</p>
                      <span className="text-xs text-purple-200">Sie • 10:31</span>
                    </div>
                  </div>
                  <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700 flex space-x-2">
                    <input
                      type="text"
                      value={message}

                      placeholder="Nachricht eingeben..."
                      className="flex-1 bg-gray-700 border border-gray-600 rounded-full px-4 py-2 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
             
                  </form>
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-green-500 text-gray-900 font-bold py-2 px-4 rounded-full shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  24/7 Support!
                </motion.div>
              </div>
            </div>
            <div className="bg-gray-900 p-6 text-center">
              <p className="text-gray-400">Einfache und intuitive Benutzeroberfläche</p>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full border border-gray-700 p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-pink-400 mb-4">Funktionen im Überblick</h2>
            <div className="grid md:grid-cols-1 gap-6">
              <div className="bg-gray-750 p-5 rounded-lg border border-gray-700">

                <ul className="space-y-2">
      
                  <li className="text-gray-300">• Dateiübertragung für schnellen Support</li>
                   <li className="text-gray-300">• Vordefinierte Antworten für häufige Fragen</li>
                  <li className="text-gray-300">• Emoji-Unterstützung für ausdrucksstarke Kommunikation</li>
                  <li className="text-gray-300">• Vordefinierte Antworten für häufige Fragen</li>
                </ul>
              </div>
       
            </div>
          </motion.div>
        </>
      )}
    </div>
  )
}

// Componente X para el icono de cierre
function X({ size }: XProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  )
}

