"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Clock, AlertCircle, CheckCircle, ChevronRight, Hourglass } from "lucide-react"

export default function FreelanceAvailability() {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <section className="relative overflow-hidden py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 z-0"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 rounded-full bg-blue-600 filter blur-[100px]"
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 15,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-3xl font-extrabold tracking-tight sm:text-4xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Projektverfügbarkeit
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Informationen zu meiner aktuellen Verfügbarkeit für neue Projekte
          </motion.p>
        </motion.div>

        <motion.div
          className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 shadow-2xl rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="p-8 sm:p-10">
            <div className="space-y-8">
              {/* Current Status */}
              <div className="flex items-center gap-4 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                <div className="p-3 rounded-full bg-red-500/20 text-red-400">
                  <AlertCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Aktuelle Wartezeit: 3 Monate</h3>
                  <p className="text-gray-300 mt-1">
                    Derzeit ist mein Zeitplan voll und es gibt eine Warteliste für neue Projekte.
                  </p>
                </div>
              </div>

              {/* Work Process */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white">Mein Arbeitsprozess</h3>

                <div className="grid gap-6 md:grid-cols-2">
                  <motion.div
                    className="flex items-start gap-4 p-5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="p-2 rounded-full bg-blue-500/20 text-blue-400">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Ein Projekt zur Zeit</p>
                      <p className="text-gray-400 mt-1">
                        Ich widme mich ausschließlich einem Projekt, um maximale Qualität und Aufmerksamkeit zu
                        gewährleisten.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4 p-5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="p-2 rounded-full bg-blue-500/20 text-blue-400">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Volle Hingabe</p>
                      <p className="text-gray-400 mt-1">
                        Jedes Projekt erhält während der gesamten Entwicklung meine volle Aufmerksamkeit.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4 p-5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="p-2 rounded-full bg-blue-500/20 text-blue-400">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Vorausplanung</p>
                      <p className="text-gray-400 mt-1">
                        Ich empfehle, frühzeitig zu buchen, um einen Platz in meinem Kalender zu sichern.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start gap-4 p-5 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                    whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="p-2 rounded-full bg-blue-500/20 text-blue-400">
                      <Hourglass className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Qualitätszeit</p>
                      <p className="text-gray-400 mt-1">
                        Ich nehme mir lieber die nötige Zeit, um außergewöhnliche Ergebnisse zu liefern.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Call to Action */}
              <motion.div
                className="mt-8 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <motion.button
                  onClick={() => setShowDetails(!showDetails)}
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-teal-600 text-white font-medium hover:from-blue-700 hover:to-teal-700 transition-all"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {showDetails ? "Details ausblenden" : "Mehr Details anzeigen"}
                  <ChevronRight className={`ml-2 h-5 w-5 transition-transform ${showDetails ? "rotate-90" : ""}`} />
                </motion.button>
              </motion.div>

              {/* Additional Details */}
              {showDetails && (
                <motion.div
                  className="mt-6 p-6 rounded-lg bg-gray-800/80 border border-gray-700"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-xl font-bold text-white mb-4">Buchungsprozess</h4>
                  <ol className="space-y-4 text-gray-300">
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 font-bold">
                        1
                      </span>
                      <span>Erstkontakt zur Besprechung Ihres Projekts und Ihrer Anforderungen</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 font-bold">
                        2
                      </span>
                      <span>Projektbewertung und Zeitschätzung</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 font-bold">
                        3
                      </span>
                      <span>Anzahlung zur Reservierung Ihres Platzes auf der Warteliste</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 font-bold">
                        4
                      </span>
                      <span>Bestätigung des ungefähren Starttermins</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-blue-500/20 text-blue-400 font-bold">
                        5
                      </span>
                      <span>Regelmäßige Kommunikation über den Status der Warteliste</span>
                    </li>
                  </ol>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-400">
            Haben Sie ein dringendes Projekt? Kontaktieren Sie mich, um besondere Optionen zu besprechen.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
