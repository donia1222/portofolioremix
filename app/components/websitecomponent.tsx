import { useState } from 'react'
import { Globe, Code, Search, ShieldCheck, X } from 'lucide-react'

interface Project {
  imageUrl: string;
  title: string;
  description: string;
  modalDescription: string;
  additionalImages: string[];
}

export default function WebDevBenefitsShowcase() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const benefits = [
    {
      icon: Globe,
      title: "Responsive Webdesign",
      description: "Gestalten Sie Webseiten, die sich an jedes Gerät anpassen und eine konsistente Benutzererfahrung bieten."
    },
    {
      icon: Code,
      title: "Moderne Technologien",
      description: "Nutzen Sie die neuesten Webtechnologien für schnelle, effiziente und interaktive Websites."
    },
    {
      icon: Search,
      title: "SEO-Optimierung",
      description: "Verbessern Sie die Sichtbarkeit Ihrer Website in Suchmaschinen und generieren Sie mehr organischen Traffic."
    },
    {
      icon: ShieldCheck,
      title: "Sicherheit & Performance",
      description: "Gewährleisten Sie höchste Sicherheitsstandards und optimale Ladezeiten für Ihre Webpräsenz."
    },
  ]

  const projects: Project[] = [
    {
      imageUrl: "/cantina.png",
      title: "Cantina Tex-Mex",
      description: "Mit integriertem Reservierungssystem.",
      modalDescription: "Ein lebendiges Restaurant mit authentischer texanisch-mexikanischer Küche. Die Website bietet ein benutzerfreundliches Reservierungssystem für schnelle und einfache Tischbuchungen.",
      additionalImages: ["/reservas.png", "/cantina.png", "/gutchein.png", "/gutchein.png"]
    },
    {
      imageUrl: "/flink.png",
      title: "Flink Sauber",
      description: "Reinigungsunternehmen aus Liechtenstein.",
      modalDescription: "Ein professionelles Reinigungsunternehmen mit Sitz in Liechtenstein. Die Website präsentiert Dienstleistungen klar und ermöglicht einfache Angebotsanfragen.",
      additionalImages: ["/flink-services.png", "/flink-team.png", "/flink-contact.png"]
    },
    {
      imageUrl: "/shrazan.png",
      title: "Sharazan",
      description: "Diese Seite ist für eine Musikgruppe aus Spanien.",
      modalDescription: "Eine aufstrebende spanische Musikgruppe. Die Website bietet Fans Zugang zu Tourdaten, Musik-Streaming und Merchandise-Verkauf.",
      additionalImages: ["/sharazan-music.png", "/sharazan-tour.png", "/sharazan-merch.png"]
    },
    {
      imageUrl: "/onlinesho.png",
      title: "Online Shop",
      description: "EasyStore von JoomShaper ist eine umfassende E-Commerce-Lösung.",
      modalDescription: "EasyStore ist eine leistungsstarke E-Commerce-Plattform für schnellen Aufbau professioneller Online-Shops mit umfangreichen Funktionen für Produktmanagement und Kundenservice.",
      additionalImages: ["/easystore-products.png", "/easystore-cart.png", "/easystore-dashboard.png"]
    },
    {
      imageUrl: "/inmo.png",
      title: "Immobilie",
      description: "Personalisierte Webgestaltung für Immobilienunternehmen.",
      modalDescription: "Eine maßgeschneiderte Website für ein Immobilienunternehmen mit intuitiver Immobiliensuche, detaillierten Objektbeschreibungen und Kontaktformular für Interessenten.",
      additionalImages: ["/inmo-search.png", "/inmo-details.png", "/inmo-contact.png"]
    },
    {
      imageUrl: "/espa.png",
      title: "El Español",
      description: "Sabor a España en Suiza.",
      modalDescription: "El Español ist ein authentisches spanisches Restaurant in der Schweiz. Die Website präsentiert das Menü, die Atmosphäre und ermöglicht Online-Reservierungen.",
      additionalImages: ["/espanol-menu.png", "/espanol-gallery.png", "/espanol-location.png"]
    }
  ]

  return (
    <div className="mt-40">
      <div className="max-w-7xl mx-auto bg-gradient-to-br bg-[#73738a59] rounded-3xl shadow-xl overflow-hidden">
        <div className="p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Stärken Sie Ihr Unternehmen mit einer professionellen <span className="text-blue-400 mt-10">Webpräsenz</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-r from-purple-200 to-indigo-300 rounded-2xl shadow-lg p-6 transform transition-all hover:scale-105"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full mb-6 mx-auto">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-6">Webentwicklung</h3>
            <p className="text-xl mb-6">
              Ich bin ein freiberuflicher Webentwickler, spezialisiert auf die Erstellung moderner und leistungsfähiger Websites mit den neuesten Technologien. Meine Lösungen sind responsiv, benutzerfreundlich und für Suchmaschinen optimiert.
            </p>
            <p className="text-xl mb-6">
              Ob Sie eine einfache Unternehmenswebsite, einen komplexen Online-Shop oder eine maßgeschneiderte Webanwendung benötigen - ich kann Ihnen helfen, Ihre Online-Präsenz auf das nächste Level zu heben. Ich biete auch Wartung und Support nach der Fertigstellung an, um sicherzustellen, dass Ihre Website stets optimal funktioniert.
            </p>
            <p className="text-xl mb-8">
              Wenn Sie an einer Zusammenarbeit interessiert sind, kann ich Ihnen gerne Beispiele meiner bisherigen Projekte zeigen. Kontaktieren Sie mich für ein unverbindliches Gespräch, und lassen Sie uns gemeinsam Ihre Ideen in die digitale Realität umsetzen.
            </p>
          </div>
        </div>
      </div>

      {/* Projekte Sektion */}
      <div className="max-w-7xl mx-auto mt-20">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-400 text-center p-10">
          Beispiel einiger meiner bisherigen Arbeiten
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-r from-purple-200 to-indigo-300 rounded-2xl shadow-lg p-6 transition-all hover:scale-105 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-48 object-cover rounded-2xl mb-6"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 md:p-8 z-50">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 md:p-10 w-full max-w-3xl lg:max-w-5xl xl:max-w-7xl max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-300">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-red-400 transition duration-200"
              >
                <X className="w-8 h-8 md:w-10 md:h-10" />
              </button>
            </div>
            <p className="text-gray-300 mb-8 text-lg md:text-xl leading-relaxed">{selectedProject.modalDescription}</p>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {selectedProject.additionalImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${selectedProject.title} detail ${index + 1}`}
                  className="w-full h-48 md:h-64 lg:h-60 object-cover rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-lg"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}