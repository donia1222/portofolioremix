"use client"

import { useState, useEffect } from "react"
import { Scissors, Star, Check, Download, Code, Zap, Smartphone, Layout, Globe, ExternalLink, Eye } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export interface TemplateShowcaseProps {
  title?: string
  subtitle?: string
  price?: number
  currency?: string
  ctaText?: string
  onCtaClick?: () => void
}

export const TemplateShowcase = ({
  title = "Premium-Vorlage für Schönheitssalon",
  subtitle = "Professionelles und modernes Design für Ihr Unternehmen",
  price = 1200,
  currency = "CHF",
  ctaText = "Ausprobieren",
  onCtaClick = () => window.open("https://beautystyles.vercel.app/", "_blank"),
}: TemplateShowcaseProps) => {
  const [activeTab, setActiveTab] = useState<"features" | "tech" | "support">("features")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const features = [
    "Responsives Design für alle Geräte",
    "Sanfte und professionelle Animationen",
    "Bereiche für Dienstleistungen, Galerie und Testimonials",
    "Kontaktformular und Terminbuchung",
    "Für SEO optimiert",
    "Schnelles Laden und optimierte Leistung",
    "Einfach anzupassen und zu warten",
    "Technischer Support inbegriffen",
  ]

  const technologies = [
    { name: "React", icon: <Code size={20} /> },
    { name: "Next.js", icon: <Zap size={20} /> },
    { name: "Tailwind CSS", icon: <Layout size={20} /> },
    { name: "Framer Motion", icon: <Smartphone size={20} /> },
    { name: "Responsive Design", icon: <Globe size={20} /> },
  ]

  const supportFeatures = [
    "Vollständige Dokumentation",
    "E-Mail-Support",
    "Kostenlose Updates für 6 Monate",
    "Grundlegende Anpassung inbegriffen",
  ]

  const alsoIncluded = [
    "Erweiterte Anpassung (als zusätzlicher Service verfügbar)",
    "Hosting und Domain",
    "Personalisierte Inhalte (Texte, Bilder)",
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const tabVariants = {
    inactive: { opacity: 0, y: 10, display: "none" },
    active: {
      opacity: 1,
      y: 0,
      display: "block",
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={fadeIn}
      className="bg-gray-900 rounded-xl shadow-xl overflow-hidden max-w-4xl mx-auto border border-gray-800 relative"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl"></div>

      {/* Header con imagen de fondo */}
      <div className="relative h-80 overflow-hidden">
        {/* Imagen de fondo */}
        <div className="absolute inset-0">
          <img src="/woman-getting-her-hair-cut-beauty-salon_23-2149167399.jpg" alt="Salon background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 to-[#16213e]/70"></div>
        </div>

        {/* Contenido del header */}
        <div className="relative z-10 p-8 h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center mb-2"
          >
            <Scissors className="mr-2 text-blue-400" size={24} />
            <span className="text-sm font-medium bg-blue-500/20 px-3 py-1 rounded-full text-blue-300 backdrop-blur-sm">
              Premium-Vorlage
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl font-bold mb-2 text-white"
          >
            Entdecken Sie Ihren{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              einzigartigen Stil
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-blue-200 mb-6 max-w-lg"
          >
            Bei BeautyStyle verwandeln wir Ihr Image mit den neuesten personalisierten Schönheitsbehandlungen und
            -techniken.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex items-center space-x-2 mb-6"
          >
            {[1, 2, 3, 4, 5].map((star, index) => (
              <motion.div
                key={star}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                <Star className="text-yellow-300 fill-yellow-300" size={20} />
              </motion.div>
            ))}
            <span className="text-blue-200 text-sm ml-2"></span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex items-center"
          >
            <div className="mr-4">
              <span className="text-white text-3xl font-bold">
                1500 CHF
              </span>
            </div>
            <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
              Einmaliger Preis
            </span>
          </motion.div>
        </div>
      </div>

      {/* Tabs de navegación */}
      <div className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="flex">
          {["features", "tech", "support"].map((tab, index) => (
            <motion.button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`px-6 py-4 text-sm font-medium relative ${
                activeTab === tab ? "text-blue-400" : "text-gray-400 hover:text-blue-300"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
            >
              {tab === "features" ? "Funktionen" : tab === "tech" ? "Technologien" : "Support"}
              {activeTab === tab && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                  layoutId="activeTab"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Contenido de los tabs */}
      <div className="p-6 text-white min-h-[400px]">
        <AnimatePresence mode="wait">
          {activeTab === "features" && (
            <motion.div
              key="features"
              initial="inactive"
              animate="active"
              exit="inactive"
              variants={tabVariants}
              className="space-y-6"
            >
              <motion.h3 variants={fadeIn} className="text-lg font-semibold mb-4 text-blue-300">
                Was enthalten ist:
              </motion.h3>

              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {features.map((feature, index) => (
                  <motion.li key={index} variants={fadeIn} className="flex items-start group">
                    <div className="mr-2 mt-1 flex-shrink-0 bg-green-500/20 p-1 rounded-full group-hover:bg-green-500/30 transition-all duration-300">
                      <Check className="text-green-400" size={16} />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                variants={fadeIn}
                className="mt-6 bg-gray-800/50 p-5 rounded-lg border border-gray-700 backdrop-blur-sm hover:border-gray-600 transition-all duration-300"
              >
                <h4 className="font-medium mb-3 text-blue-300">Enthaltene Seiten:</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {["Startseite", "Dienstleistungen", "Über Uns", "Galerie", "Kontakt", "Terminbuchung"].map(
                    (page, i) => (
                      <span
                        key={i}
                        className="bg-gray-700/70 px-3 py-2 rounded border border-gray-600 text-sm text-gray-300 hover:bg-gray-700 hover:border-gray-500 transition-all duration-300 flex items-center justify-center"
                      >
                        {page}
                      </span>
                    ),
                  )}
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn}
                className="mt-6 bg-gray-800/50 p-5 rounded-lg border border-gray-700 backdrop-blur-sm hover:border-gray-600 transition-all duration-300"
              >
                <h4 className="font-medium mb-3 text-blue-300">Was auch enthalten ist:</h4>
                <ul className="space-y-3">
                  {alsoIncluded.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="flex items-start group"
                    >
                      <div className="mr-2 mt-1 flex-shrink-0 bg-green-500/20 p-1 rounded-full group-hover:bg-green-500/30 transition-all duration-300">
                        <Check className="text-green-400" size={16} />
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}

          {activeTab === "tech" && (
            <motion.div key="tech" initial="inactive" animate="active" exit="inactive" variants={tabVariants}>
              <motion.h3 variants={fadeIn} className="text-lg font-semibold mb-4 text-blue-300">
                Verwendete Technologien:
              </motion.h3>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn}
                    className="flex items-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-blue-500/30 transition-all duration-300 group"
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="mr-4 bg-gray-700 p-3 rounded-full shadow-sm text-blue-400 group-hover:bg-blue-500/20 transition-all duration-300">
                      {tech.icon}
                    </div>
                    <span className="font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div variants={fadeIn} className="mt-8">
                <h4 className="font-medium mb-4 text-blue-300">Technische Vorteile:</h4>
                <ul className="space-y-3">
                  {[
                    "Sauberer und gut strukturierter Code",
                    "Wiederverwendbare Komponenten",
                    "Für Leistung optimiert",
                    "Einfach anzupassen und zu erweitern",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="flex items-start group"
                    >
                      <div className="mr-2 mt-1 flex-shrink-0 bg-green-500/20 p-1 rounded-full group-hover:bg-green-500/30 transition-all duration-300">
                        <Check className="text-green-400" size={16} />
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}

          {activeTab === "support" && (
            <motion.div key="support" initial="inactive" animate="active" exit="inactive" variants={tabVariants}>
              <motion.h3 variants={fadeIn} className="text-lg font-semibold mb-4 text-blue-300">
                Enthaltener Support:
              </motion.h3>

              <motion.ul variants={staggerContainer} initial="hidden" animate="visible" className="space-y-3">
                {supportFeatures.map((feature, index) => (
                  <motion.li key={index} variants={fadeIn} className="flex items-start group">
                    <div className="mr-2 mt-1 flex-shrink-0 bg-green-500/20 p-1 rounded-full group-hover:bg-green-500/30 transition-all duration-300">
                      <Check className="text-green-400" size={16} />
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                variants={fadeIn}
                className="mt-8 bg-gray-800/50 p-5 rounded-lg border border-gray-700 backdrop-blur-sm hover:border-gray-600 transition-all duration-300"
              >
                <h4 className="font-medium mb-3 text-blue-300">Was auch enthalten ist:</h4>
                <ul className="space-y-3">
                  {alsoIncluded.map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="flex items-start group"
                    >
                      <div className="mr-2 mt-1 flex-shrink-0 bg-green-500/20 p-1 rounded-full group-hover:bg-green-500/30 transition-all duration-300">
                        <Check className="text-green-400" size={16} />
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer con CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 flex flex-col sm:flex-row items-center justify-between border-t border-gray-800"
      >
        <div>
          <p className="text-gray-400 text-sm mb-2">
            Für Schulungszwecke erstellt und für kommerzielle Nutzung verfügbar
          </p>
    
        </div>

        <motion.button
          onClick={onCtaClick}
          className="mt-4 sm:mt-0 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center group relative overflow-hidden shadow-lg shadow-blue-900/20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-xl"></span>
          <span className="relative flex items-center">
            <Eye size={18} className="mr-2 group-hover:rotate-12 transition-transform duration-300" />
            Ausprobieren
            <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default TemplateShowcase
