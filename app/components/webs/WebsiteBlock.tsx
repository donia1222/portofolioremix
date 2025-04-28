"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"
import ContactModule from "~/components/Contact/contactModuledos"; 
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
    title: "Rrapi",
    description: "Immobilienagentur",
    fullDescription:
      "",
    mainImage: "/tecj.png",
    additionalImages: [],
    link: "https://rrapi.ch/",
    color: "#3498db",
  },

]

export default function ModifiedWebsiteShowcase() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
      <motion.h2
          className="text-4xl md:text-5xl font-black text-center mb-20 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Einige Beispiele
          </span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {websites.map((website) => (
            <motion.a
              key={website.id}
              href={website.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
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
                <div className="flex justify-end">
                  <ExternalLink className="w-5 h-5" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </div>
  )
}
