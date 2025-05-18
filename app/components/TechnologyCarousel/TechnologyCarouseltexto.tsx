"use client"

import { Bell, CreditCard, ShoppingCart, User, Check, Smartphone, Globe, Zap, Code, Shield } from "lucide-react"
import { motion } from "framer-motion"

export default function AppBenefitsShowcase() {
  const benefits = [
    {
      icon: Bell,
      title: "Benachrichtigungen in der App",
      description: "Halten Sie Ihre Nutzer mit Echtzeit-Push-Benachrichtigungen auf dem Laufenden.",
    },
    {
      icon: User,
      title: "Mehrsprachige Apps",
      description: "Erreichen Sie ein globales Publikum mit Apps, die mehrere Sprachen unterstützen.",
    },
    {
      icon: CreditCard,
      title: "Abonnements in der App",
      description: "Implementieren Sie wiederkehrende Einnahmemodelle mit einfach zu verwaltenden Abonnements.",
    },
    {
      icon: ShoppingCart,
      title: "In-App-Käufe",
      description: "Monetarisieren Sie Ihre App mit nahtlosen In-App-Kaufmöglichkeiten.",
    },
  ]

  const appTypes = [
    {
      name: "E-Commerce",
      platforms: ["iOS", "Android"],
      complexity: "Mittel-Hoch",
      timeframe: "8-12 Wochen",
      features: ["Produktkatalog", "Warenkorb", "Zahlungsabwicklung", "Benutzerkonten"],
    },
    {
      name: "Social Media",
      platforms: ["iOS", "Android", "Web"],
      complexity: "Hoch",
      timeframe: "12-16 Wochen",
      features: ["Benutzerprofile", "Feeds", "Messaging", "Medien-Uploads"],
    },
    {
      name: "Fitness & Gesundheit",
      platforms: ["iOS", "Android"],
      complexity: "Mittel",
      timeframe: "6-10 Wochen",
      features: ["Aktivitätsverfolgung", "Fortschrittsdiagramme", "Ernährungstagebuch", "Workout-Pläne"],
    },
    {
      name: "Business & Produktivität",
      platforms: ["iOS", "Android", "Web"],
      complexity: "Mittel-Hoch",
      timeframe: "8-14 Wochen",
      features: ["Kalender", "Aufgabenverwaltung", "Dokumentenfreigabe", "Teamkommunikation"],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  }

  return (
    <div className="min-h-screen  text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-20 mt-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Stärken Sie Ihr Unternehmen mit einer{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            maßgeschneiderten App
          </span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/60 backdrop-blur-sm p-8 rounded-2xl flex items-start space-x-5 border border-gray-700/50 shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl shadow-lg">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              React Native
            </span>{" "}
            App-Entwicklung
          </h3>

          <div className="overflow-hidden rounded-2xl border border-gray-700/50 shadow-xl bg-gray-800/60 backdrop-blur-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-200">App-Typ</th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-200">Plattformen</th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-200">Komplexität</th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-200">Zeitrahmen</th>
                    <th className="py-4 px-6 text-left text-sm font-semibold text-gray-200">Funktionen</th>
                  </tr>
                </thead>
                <tbody>
                  {appTypes.map((app, index) => (
                    <motion.tr
                      key={index}
                      className={`border-t border-gray-700/30 hover:bg-gray-700/20 transition-colors duration-150`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <td className="py-4 px-6 text-sm font-medium">{app.name}</td>
                      <td className="py-4 px-6 text-sm">
                        <div className="flex flex-wrap gap-2">
                          {app.platforms.map((platform, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300"
                            >
                              {platform === "iOS" && <Smartphone className="w-3 h-3 mr-1" />}
                              {platform === "Android" && <Smartphone className="w-3 h-3 mr-1" />}
                              {platform === "Web" && <Globe className="w-3 h-3 mr-1" />}
                              {platform}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-4 px-6 text-sm">{app.complexity}</td>
                      <td className="py-4 px-6 text-sm">{app.timeframe}</td>
                      <td className="py-4 px-6 text-sm">
                        <div className="flex flex-col gap-1">
                          {app.features.map((feature, i) => (
                            <div key={i} className="flex items-center">
                              <Check className="w-4 h-4 text-green-400 mr-2" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-24 text-center bg-gray-800/60 backdrop-blur-sm p-10 rounded-2xl border border-gray-700/50 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <div className="flex justify-center mb-8 space-x-6">
            <div className="flex items-center">
              <Zap className="w-6 h-6 text-yellow-400 mr-2" />
              <span className="text-gray-300">Schnelle Entwicklung</span>
            </div>
            <div className="flex items-center">
              <Code className="w-6 h-6 text-blue-400 mr-2" />
              <span className="text-gray-300">Qualitätscode</span>
            </div>
            <div className="flex items-center">
              <Shield className="w-6 h-6 text-green-400 mr-2" />
              <span className="text-gray-300">Sichere Apps</span>
            </div>
          </div>

          <h3 className="text-3xl font-bold mb-6">Entwicklung</h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto text-gray-300">
            Ich bin ein freiberuflicher Entwickler, spezialisiert auf die Erstellung mobiler Anwendungen mit React
            Native. Dank dieser Technologie sind meine Anwendungen sowohl mit iOS als auch mit Android kompatibel und
            funktionieren einwandfrei. Ich kann vollständige Anwendungen entwickeln und in den jeweiligen App-Stores
            veröffentlichen.
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-300">
            Außerdem biete ich meine Dienstleistungen auch externen Unternehmen an. Wenn Sie interessiert sind, kann ich
            Ihnen unverbindlich ein Beispiel eines Projekts zusenden, das Ihren Vorstellungen entspricht. Ich werde
            Ihnen eine kostenlose Testversion einer Anwendung zur Verfügung stellen, damit Sie die Qualität meiner
            Arbeit beurteilen können.
          </p>

  
        </motion.div>
      </div>
    </div>
  )
}
