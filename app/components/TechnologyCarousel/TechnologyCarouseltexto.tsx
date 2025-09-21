"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Mic, Camera, Bell, Users, DollarSign, Globe, Smartphone, CheckCircle } from "lucide-react"

export default function BuyVoiceShowcase() {
  const [activeFeature, setActiveFeature] = useState(0)

  const features = [
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Spracherkennung",
      description: "Sprechen Sie Ihre Einkaufsartikel natürlich aus. Unsere KI versteht Ihre Sprachbefehle.",
      details: "Intelligente Verarbeitung natürlicher Sprache für mühelose Listenerstellung",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Foto-Digitalisierung",
      description: "Fotografieren Sie handgeschriebene Listen und wir digitalisieren sie sofort.",
      details: "Premium-Funktion: Wandeln Sie jede Papierliste in digitales Format um",
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Intelligente Benachrichtigungen",
      description: "Erhalten Sie Push-Benachrichtigungen, um Sie an Ihre Einkäufe zu erinnern.",
      details: "Vergessen Sie nie wieder wichtige Artikel mit smarten Erinnerungen",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Teilen & Zusammenarbeiten",
      description: "Teilen Sie Ihre Listen mit Familie und Freunden.",
      details: "Arbeiten Sie beim Einkaufen zusammen und halten Sie alle synchron",
    },
  ]

  const languages = [
    { flag: "🇺🇸", name: "English", code: "EN" },
    { flag: "🇪🇸", name: "Español", code: "ES" },
    { flag: "🇩🇪", name: "Deutsch", code: "DE" },
    { flag: "🇮🇹", name: "Italiano", code: "IT" },
    { flag: "🇫🇷", name: "Français", code: "FR" },
    { flag: "🇹🇷", name: "Türkçe", code: "TR" },
    { flag: "🇵🇹", name: "Português", code: "PT" },
    { flag: "🇷🇺", name: "Русский", code: "RU" },
    { flag: "🇸🇦", name: "العربية", code: "AR" },
    { flag: "🇭🇺", name: "Magyar", code: "HU" },
    { flag: "🇯🇵", name: "日本語", code: "JA" },
    { flag: "🇮🇳", name: "हिंदी", code: "HI" },
    { flag: "🇳🇱", name: "Nederlands", code: "NL" },
  ]

  const cities = [
    { name: "Zurich", price: "$45.20", description: "Premium pricing estimates" },
    { name: "New York", price: "$38.75", description: "Real-time price data" },
    { name: "London", price: "$42.10", description: "Local market prices" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [features.length])

  return (
    <div className="w-full bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <img src="/images/buyvoice-icon.png" alt="BuyVoice Icon" className="w-16 h-16 rounded-2xl shadow-lg" />
            <div className="px-4 py-2 bg-purple-600/20 rounded-full border border-purple-500/30">
              <span className="text-purple-200 text-sm font-medium">Voice-Powered Shopping</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-balance">
            BuyVoice
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-balance">
            Sprechen Sie und wir erledigen den Rest. Sagen Sie Sätze wie "morgen kaufe ich Hähnchen, Tomaten und
            Zwiebeln" und unsere KI wählt die Zutaten für Ihre Liste aus.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-green-600/20 rounded-full border border-green-500/30">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="text-green-200 text-sm">KI-Powered</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-600/20 rounded-full border border-blue-500/30">
              <CheckCircle className="w-4 h-4 text-blue-400" />
              <span className="text-blue-200 text-sm">13 Sprachen</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-orange-600/20 rounded-full border border-orange-500/30">
              <CheckCircle className="w-4 h-4 text-orange-400" />
              <span className="text-orange-200 text-sm">iOS Widget</span>
            </div>
          </div>

          <a
            href="https://www.buyvoice.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full hover:from-purple-500 hover:to-blue-500 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <Smartphone className="w-5 h-5" />
            Für iOS herunterladen
          </a>
        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
            Leistungsstarke Funktionen für intelligentes Einkaufen
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto text-balance">
            Alles was Sie brauchen, um Ihre Einkäufe effizient zu organisieren und nie wieder einen Artikel zu
            vergessen.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                  activeFeature === index
                    ? "bg-gradient-to-br from-purple-600/30 to-blue-600/30 border-purple-400/50 transform scale-105"
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                }`}
                onClick={() => setActiveFeature(index)}
                whileHover={{ y: -5 }}
              >
                <div className="text-purple-400 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{feature.description}</p>
                <p className="text-purple-200 text-xs">{feature.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Global Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-3xl p-8 border border-purple-500/30">
            <h2 className="text-3xl font-bold text-center mb-4 flex items-center justify-center gap-3">
              <Globe className="w-8 h-8 text-blue-400" />
              Globaler Support
            </h2>
            <p className="text-center text-gray-300 mb-8 text-balance">
              Verfügbar in 13 Sprachen - BuyVoice spricht Ihre Sprache!
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {languages.map((lang, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 p-3 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                >
                  <span className="text-2xl">{lang.flag}</span>
                  <div className="text-left">
                    <div className="text-white text-sm font-medium">{lang.name}</div>
                    <div className="text-gray-400 text-xs">{lang.code}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Price Insights Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-center mb-4 flex items-center justify-center gap-3">
            <DollarSign className="w-8 h-8 text-green-400" />
            Smart Price Insights
          </h2>
          <p className="text-center text-gray-300 mb-8 text-balance">
            Kennen Sie die Preise in Ihrer Stadt - Preisschätzungen zur Budgetplanung
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {cities.map((city, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gradient-to-b from-green-600/20 to-transparent rounded-2xl border border-green-500/30 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                <h3 className="text-2xl font-bold mb-2">{city.name}</h3>
                <p className="text-green-400 text-sm mb-3">{city.description}</p>
                <div className="text-3xl font-bold text-green-300 mb-2">{city.price}</div>
                <p className="text-gray-400 text-sm">Average weekly groceries</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* iOS Widget Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-3xl p-8 border border-blue-500/30">
            <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-3">
              <Smartphone className="w-8 h-8 text-blue-400" />
              iOS Widget
            </h2>
            <p className="text-gray-300 mb-6 text-balance">
              Greifen Sie schnell auf BuyVoice direkt von Ihrem Startbildschirm mit unserem intelligenten Widget zu
            </p>

            <div className="grid md:grid-cols-2 gap-6 items-center max-w-4xl mx-auto">
              <div className="text-left">
                <h3 className="text-xl font-semibold mb-3 text-blue-300">Schneller Zugriff</h3>
                <p className="text-gray-300 mb-4">
                  Erstellen Sie Einkaufslisten mit Sprachbefehlen ohne die App zu öffnen
                </p>
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm">Widget-Integration</span>
                </div>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="text-4xl mb-2">📱</div>
                <p className="text-sm text-gray-300">BuyVoice iOS Widget</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
