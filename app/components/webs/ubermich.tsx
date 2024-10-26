import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Rocket, Smartphone, Globe, Bot, Star, X } from 'lucide-react'

const menuItems = [
  { id: 'mobile', title: 'Mobile Apps', icon: Smartphone, color: 'bg-[#73738a59] ' },
  { id: 'web', title: 'Webentwicklung', icon: Globe, color: 'bg-[#73738a59] ' },
  { id: 'chatgpt', title: 'ChatGPT', icon: Bot, color: 'bg-[#73738a59] ' },
  { id: 'why', title: 'Warum mich wählen', icon: Rocket, color: 'bg-[#73738a59] ' },
  { id: 'about', title: 'Über mich', icon: Star, color: 'bg-[#73738a59]' },
]

export default function AboutMePage() {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const handleItemClick = (id: string) => {
    setActiveSection(activeSection === id ? null : id)
  }

  return (
    <div className="min-h-screen bg-animated-gradient bg-400% animate-gradientAnimation relative overflow-auto">
      <motion.div 
        className="absolute inset-0 bg-[url('/black-prism-concept-ai-generated.jpg')] bg-cover bg-center opacity-30"
        initial={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
      ></motion.div>
      
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          {menuItems.map((item, index) => {
            const radius = window.innerWidth < 640 ? 120 : 200
            const angle = (index / menuItems.length) * 2 * Math.PI
            const x = (window.innerWidth < 640 ? 150 : 200) + radius * Math.cos(angle) - (window.innerWidth < 640 ? 45 : 70)
            const y = (window.innerWidth < 640 ? 150 : 200) + radius * Math.sin(angle) - (window.innerWidth < 640 ? 45 : 70)

            return (
              <motion.div
                key={item.id}
                className={`absolute cursor-pointer ${item.color} rounded-full shadow-lg w-[90px] h-[90px] sm:w-[140px] sm:h-[140px] flex items-center justify-center`}
                style={{ left: x, top: y }}
                whileHover={{ scale: 1.1 }}
                onClick={() => handleItemClick(item.id)}
              >
                <motion.div
                  className="flex flex-col items-center justify-center w-full h-full"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                >
                  <item.icon className={`w-6 h-6 sm:w-12 sm:h-12 text-white ${activeSection === item.id ? 'animate-pulse' : ''}`} />
                  <span className="text-[10px] sm:text-sm mt-1 sm:mt-2 text-white font-semibold text-center px-1">{item.title}</span>
                </motion.div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeSection && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
            onClick={() => setActiveSection(null)}
          >
            <motion.div
              className="bg-gray-800 p-8 rounded-lg max-w-2xl w-full m-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
                onClick={() => setActiveSection(null)}
              >
                <X className="w-6 h-6" />
              </button>
              {activeSection === 'about' && (
                <div>
                  <h2 className="text-3xl font-bold mb-4 flex items-center">
                    <Star className="w-10 h-10 mr-2 text-yellow-400" />
                    Über mich
                  </h2>
                  <img 
                    src="/yo2.png"
                    alt="Avatar de Roberto Salvador"
                    className="w-64 h-38 rounded-lg object-cover mb-4"
                  />
                  <p className="mb-4">
                    Hallo 👋, Ich bin Roberto Salvador. Seit 2019 begeistert mich die Entwicklung von Webseiten und mobilen Anwendungen. Täglich widme ich 4 bis 5 Stunden dem autodidaktischen Lernen und Üben.
                  </p>
                  <p>
                    Im Jahr 2020 habe ich meine erste Anwendung veröffentlicht. Derzeit, im Jahr 2024, habe ich fünf Anwendungen veröffentlicht und etwa 25 Webseiten erstellt.
                  </p>
                </div>
              )}
              {activeSection === 'mobile' && (
                <div>
                  <h2 className="text-3xl font-bold mb-4 flex items-center">
                    <Smartphone className="w-20 h-20 mr-2 text-blue-400" />
                    Entwicklung von mobilen Anwendungen
                  </h2>
                  <ul className="space-y-4">
                    <li>
                      <strong className="text-blue-300">iOS und Android Apps:</strong> Ich erstelle native und plattformübergreifende mobile Anwendungen, die optimale Leistung und eine hervorragende Benutzererfahrung gewährleisten.
                    </li>
                    <li>
                      <strong className="text-blue-300">UI/UX Design:</strong> Intuitive und ansprechende Designs, die die Interaktion der Benutzer mit Ihrer Anwendung verbessern.
                    </li>
                    <li>
                      <strong className="text-blue-300">API-Integration:</strong> Ich verbinde Ihre Anwendung mit externen Diensten und Plattformen, um ihre Funktionalität zu erweitern.
                    </li>
                  </ul>
                </div>
              )}
              {activeSection === 'web' && (
                <div>
                  <h2 className="text-3xl font-bold mb-4 flex items-center">
                    <Globe className="w-20 h-20 mr-2 text-green-400" />
                    Webentwicklung Werdenberg und Liechtenstein
                  </h2>
                  <ul className="space-y-4">
                    <li>
                      <strong className="text-green-300">Responsives Webdesign:</strong> Ich gestalte Webseiten, die sich an jedes Gerät anpassen und eine konsistente Benutzererfahrung bieten.
                    </li>
                    <li>
                      <strong className="text-green-300">E-Commerce:</strong> Ich entwickle Online-Shops mit fortschrittlichen Funktionen, damit Sie Ihre Produkte effizient verkaufen können.
                    </li>
                    <li>
                      <strong className="text-green-300">SEO-Optimierung:</strong> Ich implementiere SEO-Techniken, um die Sichtbarkeit Ihrer Website in Suchmaschinen zu verbessern und mehr organischen Traffic zu generieren.
                    </li>
                  </ul>
                </div>
              )}
              {activeSection === 'chatgpt' && (
                <div>
                  <h2 className="text-3xl font-bold mb-4 flex items-center">
                    <Bot className="w-20 h-20 mr-2 text-pink-400" />
                    ChatGPT mein Co-Pilot ✨
                  </h2>
                  <p>
                    Seit einem Jahr nutze ich ChatGPT als meinen Co-Piloten, um die Arbeit zu beschleunigen. Dadurch spare ich enorm viel Zeit. Obwohl man alles immer sorgfältig überwachen muss.
                  </p>
                </div>
              )}
              {activeSection === 'why' && (
                <div>
                  <h2 className="text-3xl font-bold mb-4 flex items-center">
                    <Rocket className="w-20 h-20 mr-2 text-red-400" />
                    Warum sollten Sie genau mich wählen
                  </h2>
                  <ul className="space-y-4">
                    <li>
                      <strong className="text-red-300">Maßgeschneiderte Lösungen:</strong> Ich lege großen Wert darauf, die Bedürfnisse Ihres Unternehmens zu verstehen, um maßgeschneiderte Lösungen zu bieten, die Ihr Wachstum fördern.
                    </li>
                    <li>
                      <strong className="text-red-300">Kontinuierlicher Support:</strong> Ich biete kontinuierliche Unterstützung und Wartung, um sicherzustellen, dass Ihre App oder Website jederzeit einwandfrei funktioniert.
                    </li>
                  </ul>
                  <p className="mt-6 text-lg font-semibold text-red-300">
                    Ich biete kostenlose Proben für Unternehmen oder Privatpersonen an, die an meinen Dienstleistungen interessiert sind. Wenn Ihnen die Arbeit gefällt, können wir ohne Verpflichtung fortfahren.
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}