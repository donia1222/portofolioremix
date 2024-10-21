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
                className="bg-gradient-to-r from-blue-100 to-blue-400 rounded-2xl shadow-lg p-6 transform transition-all hover:scale-105"
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
            <h3 className="text-3xl font-bold mb-6 text-blue-400">Webentwicklung</h3>
            <p className="text-l mb-6">
              Ich bin ein freiberuflicher Webentwickler, spezialisiert auf die Erstellung moderner und leistungsfähiger Websites mit den neuesten Technologien. Meine Lösungen sind responsiv, benutzerfreundlich und für Suchmaschinen optimiert.
            </p>
            <p className="text-l mb-6">
              Ob Sie eine einfache Unternehmenswebsite, einen komplexen Online-Shop oder eine maßgeschneiderte Webanwendung benötigen - ich kann Ihnen helfen, Ihre Online-Präsenz auf das nächste Level zu heben. Ich biete auch Wartung und Support nach der Fertigstellung an, um sicherzustellen, dass Ihre Website stets optimal funktioniert.
            </p>
            <p className="text-l mb-8">
              Wenn Sie an einer Zusammenarbeit interessiert sind, kann ich Ihnen gerne Beispiele meiner bisherigen Projekte zeigen. Kontaktieren Sie mich für ein unverbindliches Gespräch, und lassen Sie uns gemeinsam Ihre Ideen in die digitale Realität umsetzen.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}