import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, X, ExternalLink, Info } from 'lucide-react'

interface Website {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  mainImage: string;
  additionalImages: string[];
  link: string;
  color: string;
}

const websites: Website[] = [
  {
    id: 1,
    title: "Cantina Tex-Mex",
    description: "Authentisches texanisch-mexikanisches Restaurant",
    fullDescription: "Ein lebendiges Restaurant mit authentischer texanisch-mexikanischer Küche. Die Website bietet ein benutzerfreundliches Reservierungssystem für schnelle und einfache Tischbuchungen, sowie eine interaktive Menükarte und virtuelle Touren durch das Restaurant.",
    mainImage: "/cantina.png",
    additionalImages: ["/bienve.png", "/reservas.png", "/prosa.png", "/aptur.png"],
    link: "https://cantinatexmex.ch",
    color: "#FF6B6B"
  },
  {
    id: 2,
    title: "Flink Sauber",
    description: "Professionelles Reinigungsunternehmen in Liechtenstein",
    fullDescription: "Ein professionelles Reinigungsunternehmen mit Sitz in Liechtenstein. Die Website präsentiert Dienstleistungen klar und ermöglicht einfache Angebotsanfragen. Mit einem benutzerfreundlichen Buchungssystem und detaillierten Service-Beschreibungen bietet die Seite einen umfassenden Überblick über das Unternehmen.",
    mainImage: "/flink.png",
    additionalImages: ["/fl.png", "/flink.png", "/flimk3.png", "/dien.png"],
    link: "https://flink-sauber.li",
    color: "#4ECDC4"
  },
  {
    id: 3,
    title: "Sharazan",
    description: "Dynamische Website für spanische Musikgruppe",
    fullDescription: "Eine aufstrebende spanische Musikgruppe. Die Website bietet Fans Zugang zu Tourdaten, Musik-Streaming und Merchandise-Verkauf. Mit einer interaktiven Discographie, Fotogalerie und einem Blog hält die Seite Fans stets auf dem Laufenden über die neuesten Entwicklungen der Band.",
    mainImage: "/shrazan.png",
    additionalImages: ["/shar.png", "/mic.png", "/live.png","/bond.png"],
    link: "https://es.sharazan.es",
    color: "#F7B731"
  },
  {
    id: 4,
    title: "E-Online Shop",
    description: "Umfassende E-Commerce-Lösung",
    fullDescription: "EasyStore ist eine leistungsstarke E-Commerce-Plattform für den schnellen Aufbau professioneller Online-Shops mit umfangreichen Funktionen für Produktmanagement und Kundenservice. Die Plattform bietet responsive Designs, sichere Zahlungsgateways und fortschrittliche Analysetools für Geschäftsinhaber.",
    mainImage: "/onlinesho.png",
    additionalImages: ["/webim.png", "/neue.png", "/ptde.png", "/ende.png"],
    link: "https://shop.lweb.ch",
    color: "#45AAF2"
  },
  {
    id: 5,
    title: "Immobilie",
    description: "Maßgeschneiderte Immobilien-Website",
    fullDescription: "Eine maßgeschneiderte Website für ein Immobilienunternehmen mit intuitiver Immobiliensuche, detaillierten Objektbeschreibungen und Kontaktformular für Interessenten. Die Seite bietet auch virtuelle 3D-Touren, interaktive Karten und ein Client-Portal für registrierte Benutzer.",
    mainImage: "/inmo.png",
    additionalImages: ["/inmo.png", "/inmo3.png", "/apart.png", "/apart2.png"],
    link: "https://inmo.lweb.ch",
    color: "#A55EEA"
  },
  {
    id: 6,
    title: "El Español",
    description: "Authentisches spanisches Restaurant in der Schweiz",
    fullDescription: "El Español ist ein authentisches spanisches Restaurant in der Schweiz. Die Website präsentiert das Menü, die Atmosphäre und ermöglicht Online-Reservierungen. Mit einer virtuellen Tour durch das Restaurant, Rezepten zum Nachkochen und einem Blog über spanische Kultur bietet die Seite ein umfassendes spanisches Erlebnis.",
    mainImage: "/espa.png",
    additionalImages: ["/espa.png", "/ivan.png", "/elespano.png", "/vino.png"],
    link: "https://elespanol.ch/de/",
    color: "#FC5C65"
  }
]

export default function FloatingIslandsWebsiteShowcase() {
  const [selectedWebsite, setSelectedWebsite] = useState<Website | null>(null)
  const [hoveredWebsite, setHoveredWebsite] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const Island = ({ website }: { website: Website }) => {
    return (
      <div className="w-full mb-16">
        <motion.div
          className="bg-gradient-to-r from-purple-100 to-indigo-200 rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 ease-in-out h-full"
          whileHover={{ scale: 1.05 }}
          onHoverStart={() => setHoveredWebsite(website.id)}
          onHoverEnd={() => setHoveredWebsite(null)}
        >
          <div className="relative">
            <img
              src={website.mainImage}
              alt={website.title}
              className="w-full h-48 object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2" style={{ color: website.color }}>{website.title}</h3>
            <p className="text-gray-600 mb-4 text-sm">{website.description}</p>
            <button
              onClick={() => setSelectedWebsite(website)}
              className="flex items-center text-white font-bold py-2 px-4 rounded-full transition duration-300 text-sm"
              style={{ backgroundColor: website.color }}
            >
              Mehr erfahren
              <Info className="ml-2 w-4 h-4" />
            </button>
          </div>
        </motion.div>
        {hoveredWebsite === website.id && (
          <motion.div
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <ChevronDown className="w-8 h-8 text-white animate-bounce" />
          </motion.div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-300 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto relative 0">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-20">
        Beispiel einiger meiner bisherigen <span className="ml-2 text-[#ff69b4] text-4xl md:text-5xl font-extrabold  text-center mb-12">
          Webprojekte
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {websites.map((website) => (
            <Island key={website.id} website={website} />
          ))}
        </div>
      </div>

      {selectedWebsite && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            className="bg-gradient-to-r from-purple-100 to-indigo-200  rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl font-bold" style={{ color: selectedWebsite.color }}>{selectedWebsite.title}</h2>
              <button
                onClick={() => setSelectedWebsite(null)}
                className="text-gray-500 hover:text-gray-700 transition duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <p className="text-gray-600 mb-6">{selectedWebsite.fullDescription}</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {selectedWebsite.additionalImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${selectedWebsite.title} detail ${index + 1}`}
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
            <a
              href={selectedWebsite.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-white font-bold py-2 px-4 rounded-full transition duration-300"
              style={{ backgroundColor: selectedWebsite.color }}
            >
              Website besuchen
              <ExternalLink className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}