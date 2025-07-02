"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingCart, Users, Settings, CreditCard, Shield, Package, Star, ArrowRight, ExternalLink, MessageCircle, Bot, Calendar } from "lucide-react"

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
      description: "Produkte mit flüssigen Animationen hinzufügen und erweiterte Warenkorbverwaltung",
      delay: 0.1
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Benutzerverwaltung",
      description: "Komplettes Kontosystem mit Profilbearbeitung und Bestellhistorie",
      delay: 0.2
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Admin-Panel",
      description: "Vollständiges Dashboard zur Verwaltung von Produkten, Bestellungen und Benutzern",
      delay: 0.3
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Multiple Zahlungen",
      description: "Integration mit PayPal, Stripe und Kontoguthaben-Zahlungen",
      delay: 0.4
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Sichere Authentifizierung",
      description: "Robustes Authentifizierungssystem und Datenschutz",
      delay: 0.5
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Bestellverfolgung",
      description: "Vollständige Kontrolle über den Bestellstatus in Echtzeit",
      delay: 0.6
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "KI-Chatbot",
      description: "Intelligenter Assistent, der Produkte und direkte Links im Chat zeigt",
      delay: 0.7
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "WhatsApp-Termine",
      description: "Termine direkt über den Chatbot mit WhatsApp-Integration buchen",
      delay: 0.8
    }
  ]

  const phoneImages = [
    "/shop.jpg", // Pantalla principal de la tienda
    "/programming-background-with-person-working-with-codes-computer.jpg", // Panel de admin
    "/crypto-dashboard.jpeg", // Dashboard de pagos
    "/onlinesho.png" // Catálogo de productos
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % phoneImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 px-4 relative overflow-hidden">
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
            <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
              E-Commerce Pro
            </h2>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
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

        {/* Chatbot Demo Section */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Intelligenter Chatbot</h3>
            <p className="text-gray-300 text-lg">KI-Assistent, der Produkte zeigt und Termine verwaltet</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Chat Preview */}
            <motion.div 
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-600/30"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-sm text-gray-400">Shop-Chat</span>
              </div>
              
              <div className="space-y-4 h-64 overflow-y-auto">
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg max-w-xs">
                    Hallo, ich suche Sportschuhe
                  </div>
                </div>
                
                {/* Bot Response */}
                <div className="flex">
                  <div className="bg-gray-700 text-white px-4 py-2 rounded-lg max-w-xs">
                    <div className="flex items-center mb-2">
                      <Bot className="w-4 h-4 mr-2 text-blue-400" />
                      <span className="font-semibold">KI-Assistent</span>
                    </div>
                    Perfekt! Hier sind unsere besten Sportschuhe:
                    
                    <div className="mt-3 p-2 bg-slate-600 rounded">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-400 rounded mr-2"></div>
                        <div>
                          <p className="text-sm font-semibold">Nike Air Max</p>
                          <p className="text-xs text-gray-300">€89.99</p>
                        </div>
                      </div>
                      <motion.button 
                        className="mt-2 bg-blue-500 text-white px-3 py-1 rounded text-xs"
                        whileHover={{ scale: 1.05 }}
                      >
                        Produkt ansehen →
                      </motion.button>
                    </div>
                  </div>
                </div>
                
                {/* User Message */}
                <div className="flex justify-end">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg max-w-xs">
                    Kann ich einen Termin vereinbaren?
                  </div>
                </div>
                
                {/* Bot Response with WhatsApp */}
                <div className="flex">
                  <div className="bg-gray-700 text-white px-4 py-2 rounded-lg max-w-xs">
                    <div className="flex items-center mb-2">
                      <Bot className="w-4 h-4 mr-2 text-blue-400" />
                      <span className="font-semibold">KI-Assistent</span>
                    </div>
                    Gerne! Ich helfe Ihnen bei der Terminvereinbarung.
                    
                    <motion.button 
                      className="mt-2 bg-green-500 text-white px-3 py-1 rounded text-xs flex items-center"
                      whileHover={{ scale: 1.05 }}
                    >
                      <MessageCircle className="w-3 h-3 mr-1" />
                      Weiter in WhatsApp
                    </motion.button>
                  </div>
                </div>
              </div>
              
              {/* Chat Input */}
              <div className="mt-4 flex">
                <input 
                  type="text" 
                  placeholder="Nachricht eingeben..." 
                  className="flex-1 bg-slate-700 text-white px-4 py-2 rounded-l-lg border-none outline-none"
                  disabled
                />
                <button className="bg-blue-600 px-4 py-2 rounded-r-lg">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
            
            {/* Features List */}
            <div className="space-y-6">
              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
                transition={{ delay: 1.5, duration: 0.6 }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Intelligente KI</h4>
                  <p className="text-gray-300">Versteht natürliche Anfragen und zeigt relevante Produkte mit Bildern und direkten Links</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
                transition={{ delay: 1.7, duration: 0.6 }}
              >
                <div className="bg-gradient-to-br from-green-500 to-teal-600 p-3 rounded-lg">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">WhatsApp Integration</h4>
                  <p className="text-gray-300">Nahtloser Übergang vom Web-Chat zu WhatsApp für Termine und personalisierte Beratung</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 30 }}
                transition={{ delay: 1.9, duration: 0.6 }}
              >
                <div className="bg-gradient-to-br from-purple-500 to-pink-600 p-3 rounded-lg">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Terminverwaltung</h4>
                  <p className="text-gray-300">Automatische Terminplanung mit Echtzeit-Verfügbarkeit und WhatsApp-Bestätigung</p>
                </div>
              </motion.div>
            </div>
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
              { name: "WhatsApp API", color: "from-green-400 to-green-600" },
              { name: "PayPal", color: "from-blue-500 to-blue-700" },
              { name: "Stripe", color: "from-purple-500 to-indigo-600" }
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
              onClick={() => window.open("https://tu-tienda-online.com", "_blank")}
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
            
            <motion.button
              className="group bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-xl relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("https://tu-tienda-online.com/chat", "_blank")}
            >
              <span className="relative z-10 flex items-center">
                <Bot className="mr-2 w-4 h-4" />
                KI-Chatbot testen
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-500"
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