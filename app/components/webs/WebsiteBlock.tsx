"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ExternalLink, Info } from "lucide-react"

interface Website {
  id: number
  title: string
  description: string
  fullDescription: string
  mainImage: string
  additionalImages: string[]
  link: string
  color: string
}

const websites: Website[] = [
  {
    id: 1,
    title: "Cantina Tex-Mex",
    description: "Authentisches texanisch-mexikanisches Restaurant",
    fullDescription:
      "Ein lebendiges Restaurant mit authentischer texanisch-mexikanischer Küche. Die Website bietet ein benutzerfreundliches Reservierungssystem für schnelle und einfache Tischbuchungen, sowie eine interaktive Menükarte und virtuelle Touren durch das Restaurant.",
    mainImage: "/cantina.png",
    additionalImages: ["/bienve.png", "/reservas.png", "/prosa.png", "/aptur.png"],
    link: "https://cantinatexmex.ch",
    color: "#FF6B6B",
  },
  {
    id: 2,
    title: "Flink Sauber",
    description: "Professionelles Reinigungsunternehmen in Liechtenstein",
    fullDescription:
      "Ein professionelles Reinigungsunternehmen mit Sitz in Liechtenstein. Die Website präsentiert Dienstleistungen klar und ermöglicht einfache Angebotsanfragen. Mit einem benutzerfreundlichen Buchungssystem und detaillierten Service-Beschreibungen bietet die Seite einen umfassenden Überblick über das Unternehmen.",
    mainImage: "/flink.png",
    additionalImages: ["/fl.png", "/flink.png", "/flimk3.png", "/dien.png"],
    link: "https://flink-sauber.li",
    color: "#4ECDC4",
  },
  {
    id: 3,
    title: "Sharazan",
    description: "Dynamische Website für spanische Musikgruppe",
    fullDescription:
      "Eine aufstrebende spanische Musikgruppe. Die Website bietet Fans Zugang zu Tourdaten, Musik-Streaming und Merchandise-Verkauf. Mit einer interaktiven Discographie, Fotogalerie und einem Blog hält die Seite Fans stets auf dem Laufenden über die neuesten Entwicklungen der Band.",
    mainImage: "/shrazan.png",
    additionalImages: ["/shar.png", "/mic.png", "/live.png", "/bond.png"],
    link: "https://es.sharazan.es",
    color: "#F7B731",
  },
  {
    id: 4,
    title: "E-Online Shop",
    description: "Umfassende E-Commerce-Lösung",
    fullDescription:
      "EasyStore ist eine leistungsstarke E-Commerce-Plattform für den schnellen Aufbau professioneller Online-Shops mit umfangreichen Funktionen für Produktmanagement und Kundenservice. Die Plattform bietet responsive Designs, sichere Zahlungsgateways und fortschrittliche Analysetools für Geschäftsinhaber.",
    mainImage: "/onlinesho.png",
    additionalImages: ["/webim.png", "/neue.png", "/ptde.png", "/ende.png"],
    link: "https://shop.lweb.ch",
    color: "#45AAF2",
  },
  {
    id: 5,
    title: "Immobilie",
    description: "Maßgeschneiderte Immobilien-Website",
    fullDescription:
      "Eine maßgeschneiderte Website für ein Immobilienunternehmen mit intuitiver Immobiliensuche, detaillierten Objektbeschreibungen und Kontaktformular für Interessenten. Die Seite bietet auch virtuelle 3D-Touren, interaktive Karten und ein Client-Portal für registrierte Benutzer.",
    mainImage: "/inmo.png",
    additionalImages: ["/inmo.png", "/inmo3.png", "/apart.png", "/apart2.png"],
    link: "https://inmo.lweb.ch",
    color: "#A55EEA",
  },
  {
    id: 6,
    title: "El Español",
    description: "Authentisches spanisches Restaurant in der Schweiz",
    fullDescription:
      "El Español ist ein authentisches spanisches Restaurant in der Schweiz. Die Website präsentiert das Menü, die Atmosphäre und ermöglicht Online-Reservierungen. Mit einer virtuellen Tour durch das Restaurant, Rezepten zum Nachkochen und einem Blog über spanische Kultur bietet die Seite ein umfassendes spanisches Erlebnis.",
    mainImage: "/espa.png",
    additionalImages: ["/espa.png", "/ivan.png", "/elespano.png", "/vino.png"],
    link: "https://elespanol.ch/de/",
    color: "#FC5C65",
  },
  // New projects
  {
    id: 7,
    title: "TechHub",
    description: "Innovatives Tech-Blog und Community-Plattform",
    fullDescription:
      "TechHub ist eine dynamische Plattform für Technologie-Enthusiasten. Sie bietet aktuelle Tech-News, ausführliche Produktrezensionen und eine lebendige Community für Diskussionen. Mit personalisierten Inhaltsempfehlungen und einem Expertenforum ist TechHub die zentrale Anlaufstelle für alle Tech-Interessierten.",
    mainImage: "/tecj.png",
    additionalImages: [
 
    ],
    link: "https://techhub-example.com",
    color: "#3498db",
  },

  {
    id: 9,
    title: "FitnessPro",
    description: "Personalisierte Fitness- und Wellness-App",
    fullDescription:
      "FitnessPro ist eine umfassende Fitness-App, die personalisierte Trainingspläne, Ernährungsberatung und Fortschrittsverfolgung bietet. Mit KI-gestützten Empfehlungen, Live-Streaming-Kursen und einer Gemeinschaft von Gleichgesinnten macht FitnessPro das Erreichen von Fitnesszielen einfacher und motivierender.",
    mainImage: "/fitnes.png",
    additionalImages: [

    ],
    link: "https://fitnesspro-example.com",
    color: "#e74c3c",
  },


  {
    id: 12,
    title: "EcoTravel",
    description: "Plattform für nachhaltiges Reisen",
    fullDescription:
      "EcoTravel ist die führende Plattform für umweltbewusste Reisende. Sie bietet eine Auswahl an öko-zertifizierten Unterkünften, CO2-neutralen Transportmöglichkeiten und nachhaltigen Aktivitäten weltweit. Mit einem Kohlenstoff-Fußabdruck-Rechner und Tipps für verantwortungsvolles Reisen hilft EcoTravel, die Schönheit der Welt zu erkunden und gleichzeitig zu schützen.",
    mainImage: "/travel.png",
    additionalImages: [

    ],
    link: "https://ecotravel-example.com",
    color: "#16a085",
  },
]

export default function ModifiedWebsiteShowcase() {
  const [selectedWebsite, setSelectedWebsite] = useState<Website | null>(null)

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20">
        <span className="text-pink-500">Webprojekte</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websites.map((website) => (
            <motion.div
              key={website.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedWebsite(website)}
            >
              <img
                src={website.mainImage || "/placeholder.svg"}
                alt={website.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2" style={{ color: website.color }}>
                  {website.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">{website.description}</p>
       
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedWebsite && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedWebsite(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-gray-800 rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold" style={{ color: selectedWebsite.color }}>
                  {selectedWebsite.title}
                </h2>
                <button
                  onClick={() => setSelectedWebsite(null)}
                  className="text-gray-400 hover:text-white transition duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="text-gray-300 mb-6">{selectedWebsite.fullDescription}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {selectedWebsite.additionalImages.map((img, index) => (
                  <img
                    key={index}
                    src={img || "/placeholder.svg"}
                    alt={`${selectedWebsite.title} detail ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg shadow-md"
                  />
                ))}
              </div>
   
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

