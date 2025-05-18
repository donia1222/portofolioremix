"use client"

import { Bell, CreditCard, ShoppingCart, User, Check, Smartphone, Globe, Zap, Code, Shield } from "lucide-react"
import { useEffect, useState } from "react"

export default function AppBenefitsShowcase() {
  // State for typing animation
  const [displayText, setDisplayText] = useState("")
  const fullText = "Native App"

  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.substring(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 150) // Speed of typing animation

    return () => clearInterval(typingInterval)
  }, [])

  // Inicializar IntersectionObserver para animaciones más efficientes
  useEffect(() => {
    // Función para manejar animaciones con IntersectionObserver (más eficiente que AOS)
    const setupAnimations = () => {
      const animatedElements = document.querySelectorAll(".animate-on-scroll")

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target
              const animation = el.getAttribute("data-animation") || "animate-fade-up"
              const delay = el.getAttribute("data-delay") || "0"

              setTimeout(
                () => {
                  el.classList.add(animation)
                  el.classList.add("opacity-100")
                  observer.unobserve(el)
                },
                Number.parseInt(delay || "0"),
              )
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        },
      )

      animatedElements.forEach((el) => {
        el.classList.add("opacity-0", "transition-all", "duration-700")
        observer.observe(el)
      })
    }

    // Ejecutar después de que el DOM esté completamente cargado
    if (document.readyState === "complete") {
      setupAnimations()
    } else {
      window.addEventListener("load", setupAnimations)
      return () => window.removeEventListener("load", setupAnimations)
    }
  }, [])

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

  return (
    <div className="min-h-screen text-white py-8 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-4xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-20 mt-16 md:mt-16 animate-on-scroll"
          data-animation="animate-fade-down"
          data-delay="100"
        >
          Stärken Sie Ihr Unternehmen mit einer{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            {displayText}
            <span className="animate-pulse">|</span>
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-800/60 backdrop-blur-sm p-6 md:p-8 rounded-2xl flex items-start space-x-4 md:space-x-5 border border-gray-700/50 shadow-xl hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1 animate-on-scroll"
              data-animation="animate-fade-up"
              data-delay={150 + index * 100}
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl shadow-lg flex-shrink-0">
                <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{benefit.title}</h3>
                <p className="text-sm md:text-base text-gray-300">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-32 animate-on-scroll" data-animation="animate-fade-up" data-delay="200">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              React Native
            </span>{" "}
            <br className="md:hidden" />
            App-Entwicklung
          </h3>

          {/* Versión para móvil - Cards en lugar de tabla */}
          <div className="md:hidden space-y-6">
            {appTypes.map((app, index) => (
              <div
                key={index}
                className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 shadow-xl animate-on-scroll"
                data-animation="animate-fade-up"
                data-delay={250 + index * 100}
              >
                <h4 className="text-lg font-semibold mb-3">{app.name}</h4>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-400 mb-1">Plattformen</p>
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
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-400 mb-1">Komplexität</p>
                    <p className="text-sm">{app.complexity}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-400 mb-1">Zeitrahmen</p>
                    <p className="text-sm">{app.timeframe}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-gray-400 mb-1">Funktionen</p>
                    <div className="flex flex-col gap-1">
                      {app.features.map((feature, i) => (
                        <div key={i} className="flex items-center">
                          <Check className="w-4 h-4 text-green-400 mr-2" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Versión para desktop - Tabla */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-gray-700/50 shadow-xl bg-gray-800/60 backdrop-blur-sm">
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
                    <tr
                      key={index}
                      className={`border-t border-gray-700/30 hover:bg-gray-700/20 transition-colors duration-150 animate-on-scroll`}
                      data-animation="animate-fade-left"
                      data-delay={250 + index * 100}
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div
          className="mt-16 md:mt-24 text-center bg-gray-800/60 backdrop-blur-sm p-6 md:p-10 rounded-2xl border border-gray-700/50 shadow-xl animate-on-scroll"
          data-animation="animate-zoom-in"
          data-delay="300"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 md:mb-8">
            <div className="flex items-center justify-center">
              <Zap className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 mr-2" />
              <span className="text-sm md:text-base text-gray-300">Schnelle Entwicklung</span>
            </div>
            <div className="flex items-center justify-center">
              <Code className="w-5 h-5 md:w-6 md:h-6 text-blue-400 mr-2" />
              <span className="text-sm md:text-base text-gray-300">Qualitätscode</span>
            </div>
            <div className="flex items-center justify-center">
              <Shield className="w-5 h-5 md:w-6 md:h-6 text-green-400 mr-2" />
              <span className="text-sm md:text-base text-gray-300">Sichere Apps</span>
            </div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Entwicklung</h3>
          <p className="text-base md:text-lg mb-4 md:mb-6 max-w-3xl mx-auto text-gray-300">
            Ich bin ein freiberuflicher Entwickler, spezialisiert auf die Erstellung mobiler Anwendungen mit React
            Native. Dank dieser Technologie sind meine Anwendungen sowohl mit iOS als auch mit Android kompatibel und
            funktionieren einwandfrei. Ich kann vollständige Anwendungen entwickeln und in den jeweiligen App-Stores
            veröffentlichen.
          </p>
          <p className="text-base md:text-lg mb-4 md:mb-8 max-w-3xl mx-auto text-gray-300">
            Außerdem biete ich meine Dienstleistungen auch externen Unternehmen an. Wenn Sie interessiert sind, kann ich
            Ihnen unverbindlich ein Beispiel eines Projekts zusenden, das Ihren Vorstellungen entspricht. Ich werde
            Ihnen eine kostenlose Testversion einer Anwendung zur Verfügung stellen, damit Sie die Qualität meiner
            Arbeit beurteilen können.
          </p>
        </div>
      </div>
    </div>
  )
}
