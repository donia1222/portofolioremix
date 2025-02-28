"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Download, Mail, Phone, Globe, MapPin, CreditCard, Code, MessageSquare } from "lucide-react"
import ChatModul from "./ChatModul"
import Header from "~/components/Header"
import { useNavigate } from "react-router-dom"

import handleDownloadVCard from "~/components/downloadVCard"

export default function VCardModul() {
  const [istHovered, setIstHovered] = useState(false)
  const [zeigeVersionen, setZeigeVersionen] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [activeModule, setActiveModule] = useState("vcard") // New state for tracking active module
  const navigate = useNavigate()

  const handleClick = () => {
    window.location.href = "https://vcard.lweb.ch"
  }

  const scrollZuVersionen = () => {
    const versionenElement = document.getElementById("versionen")
    if (versionenElement) {
      versionenElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 flex flex-col items-center justify-center pb-20">
      <div className="relative z-[9999] mb-20">
        <Header />
      </div>

      {/* Filter/Toggle Component */}
      <div className="mb-8 mt-8">
        <div className="bg-gray-800 rounded-full p-1 flex shadow-lg border border-gray-700">
          <button
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
              activeModule === "vcard" ? "bg-blue-500 text-white" : "text-gray-300 hover:text-white"
            }`}
            onClick={() => setActiveModule("vcard")}
          >
            <CreditCard className="w-4 h-4 mr-2" />
            vCard
          </button>
          <button
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
              activeModule === "chat" ? "bg-pink-500 text-white" : "text-gray-300 hover:text-white"
            }`}
            onClick={() => setActiveModule("chat")}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Chat-Bot
          </button>
        </div>
      </div>

      {/* Conditional rendering based on active module */}
      {activeModule === "vcard" ? (
        <>
          <motion.div
            className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full border border-gray-700 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-blue-300 mb-4">vCard-Modul</h1>
                <p className="text-lg text-gray-300 mb-6">
                  Transformieren Sie die Art und Weise, wie Sie Ihre Kontaktdaten teilen, mit unserem vCard-Modul.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    {
                      icon: <Download className="text-blue-400" />,
                      text: "Einfacher Download der digitalen Visitenkarte",
                    },
                    {
                      icon: <Mail className="text-blue-400" />,
                      text: "Personalisieren Sie mit Ihrer E-Mail und Kontaktdaten",
                    },
                    {
                      icon: <Phone className="text-blue-400" />,
                      text: "Fügen Sie Ihre Telefonnummer für schnellen Kontakt hinzu",
                    },
                    {
                      icon: <Globe className="text-blue-400" />,
                      text: "Fügen Sie Ihre Website für weitere Informationen hinzu",
                    },
                    { icon: <MapPin className="text-blue-400" />, text: "Zeigen Sie Ihren Standort einfach an" },
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3 text-gray-300">
                      {item.icon}
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <motion.button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg shadow-lg flex items-center space-x-2 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  onClick={() => handleDownloadVCard()}
                >
                  <CreditCard className="w-5 h-5" />
                  <span>E-Visitenkarte</span>
                </motion.button>
              </div>
              <div className="relative">
                <motion.div
                  className="rounded-lg overflow-hidden shadow-2xl border border-gray-700"
                  animate={{ rotate: istHovered ? 5 : 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img src="/IMG_2407.jpg" alt="vCard-Modul Vorschau" className="w-full h-auto" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-full shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  Einfach zu benutzen!
                </motion.div>
              </div>
            </div>
            <div className="bg-gray-900 p-6 text-center">
              <p className="text-gray-400">Updates und Support inklusive!</p>
            </div>
          </motion.div>

          <motion.div
            id="versionen"
            className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden max-w-4xl w-full border border-gray-700 p-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-blue-300 mb-4">Verfügbar für mehrere Plattformen</h2>
            <p className="text-gray-300 mb-6">
              Unser vCard-Modul ist nicht nur auf Joomla beschränkt. Sie können jetzt die gleiche Funktionalität in
              Ihren Lieblingsprojekten genießen:
            </p>
            <ul className="space-y-4">
              {[
                {
                  icon: <Code className="text-blue-400" />,
                  text: "React-Version: Nahtlose Integration in Ihre React-Anwendungen",
                },
                { icon: <Code className="text-blue-400" />, text: "Kompatibel mit Joomla 3.9 und höher." },
                {
                  icon: <Code className="text-blue-400" />,
                  text: "Reines HTML, CSS und JavaScript: Für maximale Flexibilität und Kompatibilität",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3 text-gray-300">
                  {item.icon}
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </>
      ) : (
        <div className="w-full max-w-4xl">
          <ChatModul />
        </div>
      )}

      {zeigeVersionen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-gray-800 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <button
              className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full font-semibold"
              onClick={() => setZeigeVersionen(false)}
            >
              Schließen
            </button>
          </div>
        </motion.div>
      )}
    </div>
  )
}

