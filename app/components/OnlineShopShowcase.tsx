"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, Settings, CreditCard, Star, ArrowRight, ExternalLink, Bot } from "lucide-react"

interface Feature {
  icon: React.ReactNode
  title: string
  description: string
  delay: number
}

export default function OnlineShopShowcase() {
  const [currentImage, setCurrentImage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const features: Feature[] = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Intelligenter Warenkorb",
      description: "Flüssige Animationen + erweiterte Warenkorbverwaltung",
      delay: 0.1
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "KI-Chatbot",
      description: "Intelligenter Assistent zeigt Produkte mit direkten Links",
      delay: 0.2
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Mehrere Zahlungen",
      description: "PayPal, Stripe & Kontoguthaben-Integration",
      delay: 0.3
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Admin-Dashboard",
      description: "Vollständige Verwaltung für Produkte & Bestellungen",
      delay: 0.4
    }
  ]

  const phoneImages = [
    "/IMG_3666.jpeg", // Pantalla principal de la tienda
    "/IMG_3667.PNG", // Panel de admin
    "/IMG_3668.PNG", // Dashboard de pagos
    "/IMG_3671.PNG" // Catálogo de productos
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % phoneImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen  py-20 px-4 relative overflow-hidden">
      {/* Starfield Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              E-Commerce Pro
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-1xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Vollständiger Online-Shop erstellt mit <span className="text-blue-400 font-semibold">Next.js</span>, 
            <span className="text-green-400 font-semibold"> PHP</span> und 
            <span className="text-orange-400 font-semibold"> MySQL</span>
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Phone Showcase */}
          <motion.div 
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative">
              {/* Phone Frame */}
              <div className="relative w-64 h-[500px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                {/* Inner phone screen */}
                <div className="w-full h-full bg-black rounded-[2.5rem] overflow-hidden relative">
                  {/* Status bar */}
                  <div className="bg-gray-900 h-8 flex items-center justify-between px-6 text-white text-xs">
                    <span>9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-4 h-2 bg-white rounded-sm"></div>
                      <div className="w-6 h-2 bg-white rounded-sm"></div>
                      <div className="w-4 h-2 bg-white rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* Screen content with changing images */}
                  <div className="h-full relative">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentImage}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ 
                          backgroundImage: `url(${phoneImages[currentImage]})`,
                          backgroundSize: 'cover'
                        }}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.6 }}
                      />
                    </AnimatePresence>
                    
                    {/* App overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
                      <motion.div
                        className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold"
                        animate={{ y: [0, -3, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ShoppingCart className="w-3 h-3 inline mr-1" />
                        Live
                      </motion.div>
                      
                      <motion.div
                        className="absolute bottom-4 left-4 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold"
                        animate={{ y: [0, 3, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                      >
                        <Star className="w-3 h-3 inline mr-1" />
                        Shop
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Home indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full opacity-30"></div>
                </div>
              </div>
              
              {/* Phone glow effect */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-[4rem] blur-xl opacity-20"
                animate={{ 
                  opacity: [0.2, 0.4, 0.2],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Floating indicators */}
              <motion.div
                className="absolute -right-8 top-20 bg-green-400 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg"
                animate={{ 
                  x: [0, 10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                KI-Chat
              </motion.div>
              
              <motion.div
                className="absolute -left-8 bottom-32 bg-purple-500 text-white px-3 py-2 rounded-lg text-sm font-semibold shadow-lg"
                animate={{ 
                  x: [0, -10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
              >
                Bezahlung
              </motion.div>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600/30 hover:border-blue-500/50 transition-all duration-300"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                transition={{ delay: 0.7 + feature.delay, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: "rgba(30, 41, 59, 0.7)"
                }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* AI Features Highlight */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/30">
            <div className="flex items-center justify-center mb-4">
              <Bot className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl md:text-3xl font-bold text-white">KI-gestütztes Einkaufen</h3>
            </div>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Intelligenter Chatbot zeigt Produkte mit direkten Links + WhatsApp-Integration für Termine
            </p>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ delay: 2.1, duration: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-white mb-8">Technologie-Stack</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { name: "Next.js", color: "from-gray-900 to-black" },
              { name: "PHP", color: "from-blue-600 to-purple-600" },
              { name: "MySQL", color: "from-orange-500 to-red-500" },
              { name: "OpenAI", color: "from-green-500 to-emerald-600" },
              { name: "WhatsApp", color: "from-green-400 to-green-600" }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className={`bg-gradient-to-r ${tech.color} px-6 py-3 rounded-full text-white font-semibold shadow-lg`}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
              >
                {tech.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.8 }}
          transition={{ delay: 2.3, duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <motion.button
              className="group bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-xl relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("https://www.hot-bbq.ch", "_blank")}
            >
              <span className="relative z-10 flex items-center">
                Online-Shop ansehen
                <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
            
           
          </div>
          
          <motion.p 
            className="text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ delay: 2.5, duration: 0.6 }}
          >
            🤖 Intelligenter Chatbot • 📱 WhatsApp Integration • 🛒 Produkte mit direkten Links
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}