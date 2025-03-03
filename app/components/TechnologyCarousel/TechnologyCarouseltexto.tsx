"use client"

import { Bell, CreditCard, ShoppingCart, User } from "lucide-react"
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

  return (
    <div className="min-h-screen text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 mt-16">
          Stärken Sie Ihr Unternehmen mit einer{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">App</span>
        </h2>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" initial="hidden" animate="visible">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-xl flex items-start space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="bg-gray-700 p-2 rounded-full">
                <benefit.icon className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold mb-6">Entwicklung</h3>
          <p className="text-lg mb-6 max-w-3xl mx-auto text-gray-300">
            Ich bin ein freiberuflicher Entwickler, spezialisiert auf die Erstellung mobiler Anwendungen mit React
            Native. Dank dieser Technologie sind meine Anwendungen sowohl mit iOS als auch mit Android kompatibel und
            funktionieren einwandfrei. Ich kann vollständige Anwendungen entwickeln und in den jeweiligen App-Stores
            veröffentlichen.
          </p>
          <p className="text-lg mb-6 max-w-3xl mx-auto text-gray-300">
            Außerdem biete ich meine Dienstleistungen auch externen Unternehmen an. Wenn Sie interessiert sind, kann ich
            Ihnen unverbindlich ein Beispiel eines Projekts zusenden, das Ihren Vorstellungen entspricht. Ich werde
            Ihnen eine kostenlose Testversion einer Anwendung zur Verfügung stellen, damit Sie die Qualität meiner
            Arbeit beurteilen können.
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto text-gray-300">
            Wenn Sie ein Webentwicklungsunternehmen sind, das nach einer Zusammenarbeit in mobilen Projekten sucht,
            würde ich mich freuen, mit Ihnen zusammenzuarbeiten. Kontaktieren Sie mich für weitere Details und erfahren
            Sie, wie ich Ihnen helfen kann, Ihre Idee auf die nächste Stufe zu bringen.
          </p>
        </div>
      </div>
    </div>
  )
}

