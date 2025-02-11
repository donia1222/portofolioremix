"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check, Plus, Minus, AlertCircle } from "lucide-react"

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
  { name: "Visitenkarte", price: 280, description: "Visitenkarte herunterladen" },
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

  const toggleElement = (element: string, price: number, isStore = false) => {
    setSelected((prev) => {
      const newSelected = prev.includes(element) ? prev.filter((e) => e !== element) : [...prev, element]

      let newPrice = newSelected.reduce((total, e) => {
        const selectedElement = webElements.find((elem) => elem.name === e)
        return total + (selectedElement && !selectedElement.isStore ? selectedElement.price : 0)
      }, 0)

      if (isStore && newSelected.includes("Online-Shop")) {
        newPrice += storePrice
      }

      setTotalPrice(newPrice)
      return newSelected
    })
  }

  const adjustStoreProducts = (increment: number) => {
    const newStoreProducts = Math.max(11, storeProducts + increment)
    setStoreProducts(newStoreProducts)
    const newStorePrice = 600 + (newStoreProducts - 12) * 50
    setStorePrice(newStorePrice)
    if (selected.includes("Online-Shop")) {
      setTotalPrice((prev) => prev - storePrice + newStorePrice)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black   p-4 sm:p-6 pt-10 sm:pt-20  overflow-auto" >
      <h1 className="text-white text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 text-center">Wie viel kostet eine moderne Webseite?</h1>
      <p className="text-gray-300 text-sm sm:text-xl mb-6 sm:mb-12 text-center">Wählen Sie Ihre gewünschten Elemente</p>
      <div className="max-w-[1200px] mx-auto bg-gray-800 rounded-lg shadow-xl p-4 sm:p-8">
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
                  p-3 rounded-lg text-sm cursor-pointer
                  ${isSelected ? "border-2 border-blue-600 " : "border border-gray-700"}
                  ${element.isStore && !isSelected ? "relative overflow-hidden" : ""}
                `}
                onClick={() => toggleElement(element.name, displayPrice, element.isStore)}
              >
                <div className="flex items-center justify-between mb-1">
                  <h3 className=" text-white">{element.name}</h3>
                  <div className="flex items-center">

                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        isSelected ? "bg-blue-600 " : "bg-gray-600"
                      }`}
                    >
                      {isSelected && <Check className="w-3 h-3 text-gray-900" strokeWidth={3} />}
                    </div>
                    
                  </div>
                  
                </div>
                <p className="text-xs text-gray-400">{element.description}</p>
                <span className="mr-2 font-medium text-blue-200 ">{displayPrice} CHF</span>
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
                        className="w-5 h-5 rounded-full  bg-blue-600 flex items-center justify-center text-gray-900"
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
        <motion.div
          className="mt-6 sm:mt-8 text-center text-2xl sm:text-3xl font-bold text-yellow-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={transitionProps}
        >
          Gesamtpreis: {totalPrice} CHF
        </motion.div>
     
      </div>
      <span className="text-xs mt-20 ml-4 text-gray-400">Domain und Datenbank für 1 Jahr inklusive.</span>
      <span className="text-xs mt-20 ml-2 text-gray-400">🇨🇭Schweizer Hosting! Hostpoint.ch</span>
    </div>
  )
}

