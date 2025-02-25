"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Check, Plus, Minus, AlertCircle } from "lucide-react"
import { Link } from "@remix-run/react"

const webElements = [
  { name: "Startseite", price: 350, description: "Eine attraktive Willkommensseite" },
  { name: "Fotogalerie", price: 200, description: "Zeigen Sie Ihre besten Bilder" },
  { name: "Kontaktformular", price: 150, description: "Ermöglichen Sie Kunden, Sie zu kontaktieren" },
  { name: "Blog", price: 300, description: "Teilen Sie Neuigkeiten und Artikel" },
  {
    name: "Online-Shop",
    price: 600,
    description: "Verkaufen Sie Produkte direkt (12 Produkte inklusive)",
    isStore: true,
  },
  { name: "Social Media", price: 100, description: "Verbinden Sie sich mit Ihren Followern" },
  { name: "KI-Chat", price: 400, description: "Bieten Sie Echtzeit-Support" },
  { name: "Testimonials", price: 100, description: "Zeigen Sie Kundenmeinungen" },
  { name: "Standortkarte", price: 100, description: "Helfen Sie Kunden, Sie zu finden" },
  { name: "FAQ-Bereich", price: 100, description: "Beantworten Sie häufige Fragen" },
  { name: "Formular", price: 350, description: "Ermöglichen Sie Reservierungen" },
  { name: "Video", price: 200, description: "Teilen Sie Unternehmensvideos" },
  { name: "Newsletter", price: 220, description: "Sammeln Sie E-Mails für Marketing" },
  { name: "D-Visitenkarte", price: 280, description: "Digitale Visitenkarte herunterladen" },
]

const transitionProps = {
  type: "spring",
  stiffness: 500,
  damping: 30,
  mass: 0.5,
}

export default function WebsiteBuilder() {
  const [selected, setSelected] = useState<string[]>([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [storeProducts, setStoreProducts] = useState(12)
  const [storePrice, setStorePrice] = useState(600)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)

  useEffect(() => {
    const newPrice = selected.reduce((total, e) => {
      const selectedElement = webElements.find((elem) => elem.name === e)
      if (selectedElement) {
        if (selectedElement.isStore) {
          return total + storePrice
        }
        return total + selectedElement.price
      }
      return total
    }, 0)

    setTotalPrice(newPrice)
  }, [selected, storePrice])

  const toggleElement = (element: string, price: number, isStore = false) => {
    setSelected((prev) => {
      const newSelected = prev.includes(element) ? prev.filter((e) => e !== element) : [...prev, element]
      return newSelected
    })
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const adjustStoreProducts = (increment: number) => {
    const newStoreProducts = Math.max(11, storeProducts + increment)
    setStoreProducts(newStoreProducts)
    const newStorePrice = 600 + (newStoreProducts - 12) * 50
    setStorePrice(newStorePrice)
  }

  const contactRoberto = () => {
    const selectedElements = selected
      .map((name) => {
        const element = webElements.find((e) => e.name === name)
        if (element?.isStore) {
          return `${name} (${storeProducts} Produkte)`
        }
        return name
      })
      .join(", ")

    const message = `Hallo Roberto, ich interessiere mich für eine Webseite mit folgenden Elementen: ${selectedElements}. Der Gesamtpreis beträgt ${totalPrice} CHF.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/41765608645?text=${encodedMessage}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black p-4 sm:p-6 pt-10 sm:pt-20 pb-24 sm:pb-6 overflow-auto">
      <header
        className={`w-full py-4 px-4 fixed top-0 left-0 z-10 transition-all duration-300 ${
          isHeaderVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="w-full md:max-w-[50%] mx-auto bg-[#6d6d864f] backdrop-filter backdrop-blur-lg rounded-full flex justify-center items-center px-4 md:px-8 py-3 shadow-lg z-10">
            <Link
              to="/"
              className="fixed left-2 z-20 text-blue-100 hover:text-blue-100 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg" 
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <div className="flex items-center justify-center cursor-pointer" onClick={scrollToTop}>
              <span className="text-blue-400 text-lg sm:text-xl md:text-3xl font-bold">Preise</span>
              <span className="ml-2 text-pink-400 text-lg sm:text-xl md:text-3xl font-bold">berechnen</span>
            </div>
          </div>
        </div>
      </header>

      <h1 className="text-white text-2xl sm:text-4xl font-bold mb-2 mt-20 sm:mb-4 text-center">
        Wie viel kostet eine{" "}
        <span className="ml-2 text-pink-400 text-2xl sm:text-4xl font-bold">
          moderne
        </span>{" "}
        Webseite?
      </h1>

      <p className="text-gray-300 text-sm sm:text-xl mb-2 sm:mb-2 text-center">
        Domain und Datenbank für 1 Jahr inklusive
      </p>
      <p className="text-gray-300 text-sm sm:text-xl mb-6 sm:mb-12 text-center">🇨🇭Schweizer Hosting:  hostpoint.ch</p>
      <div className="max-w-[1200px] mx-auto bg-gray-800 rounded-lg shadow-xl p-4 sm:p-8 mb-20 sm:mb-0">
        <motion.div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4" layout transition={transitionProps}>
          {webElements.map((element) => {
            const isSelected = selected.includes(element.name)
            const displayPrice = element.isStore ? storePrice : element.price
            return (
              <motion.div
                key={element.name}
                layout
                initial={false}
                animate={{
                  backgroundColor: isSelected ? "#374151" : "#1F2937",
                }}
                transition={{
                  ...transitionProps,
                  backgroundColor: { duration: 0.1 },
                }}
                className={`
                  p-3 rounded-lg cursor-pointer
                  ${isSelected ? "border-2 border-blue-600" : "border border-gray-700"}
                  ${element.isStore && !isSelected ? "relative overflow-hidden" : ""}
                `}
                onClick={() => toggleElement(element.name, displayPrice, element.isStore)}
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-white text-lg sm:text-xl font-bold">{element.name}</h3>
                  <div className="flex items-center">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        isSelected ? "bg-blue-600" : "bg-gray-600"
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 text-gray-900" strokeWidth={3} />}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-300">{element.description}</p>
                <span className="mr-2 font-medium text-blue-200 text-lg">{displayPrice} CHF</span>
                {element.isStore && isSelected && (
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs text-gray-400">Produkte: {storeProducts}</span>
                    <div className="flex items-center">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          adjustStoreProducts(-1)
                        }}
                        className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-gray-900 mr-2"
                        disabled={storeProducts <= 11}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          adjustStoreProducts(1)
                        }}
                        className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-gray-900"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                )}
                {element.isStore && !isSelected && (
                  <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center">
                    <div className="text-yellow-500 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      <span className="text-xs">Klicken zum Auswählen</span>
                    </div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>
        {selected.length > 0 && (
          <motion.div
            className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 sm:static sm:bg-transparent sm:p-0 sm:mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={transitionProps}
          >
            <div className="flex flex-col sm:flex-row justify-between items-center max-w-[1200px] mx-auto">
              <motion.div
                className="text-2xl sm:text-3xl text-pink-400 mb-4 sm:mb-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={transitionProps}
              >
                Gesamtpreis: {totalPrice} CHF
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={transitionProps}>
                <button
                  onClick={contactRoberto}
                  className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Kontaktieren
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
