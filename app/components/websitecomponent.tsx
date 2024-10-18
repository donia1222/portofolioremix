import { useState, useEffect, useRef } from 'react'
import { ChevronRight } from 'lucide-react'

interface WebPage {
  id: number
  title: string
  content: string
  list?: string[]
  image: string
  link: string
}

const webPages: WebPage[] = [
  {
    id: 1,
    title: "WEBENTWICKLUNG MIT JOOMLA",
    content: "Joomla ist ein leistungsstarkes Content-Management-System (CMS), das zahlreiche Vorteile bietet:",
    list: [
      "Benutzerfreundlichkeit: Ideal sowohl für Entwickler als auch für Endbenutzer und ermöglicht eine einfache Verwaltung von Inhalten.",
      "Flexibilität: Bietet eine große Auswahl an Erweiterungen und Vorlagen, um Ihre Website nach Ihren Bedürfnissen anzupassen.",
      "SEO-freundlich: Joomla erleichtert die Suchmaschinenoptimierung und verbessert die Sichtbarkeit Ihrer Website.",
      "Sicherheit: Bietet regelmäßige Updates und Sicherheitstools, um Ihre Website zu schützen."
    ],
    image: "https://lweb.ch/images/2024/08/21/free-joomla-3628862-30300021.png",
    link: "https://www.joomla.org"
  },
  {
    id: 2,
    title: "PERSONALISIERTE WEBGESTALTUNG",
    content: "Die Entwicklung moderner und animierter Webseiten mit Joomla ist ein Prozess, der Kreativität, Technologie und Individualisierung auf einzigartige Weise vereint. Wenn du eine Weblösung benötigst, die nicht nur effektiv, sondern auch unverwechselbar ist, mit einem modernen Design und Animationen, die deine Besucher fesseln, stehe ich bereit, um deine Vision in eine beeindruckende Realität umzusetzen.",
    image: "https://lweb.ch/images/2024/08/06/code1-2.png",
    link: "#personalized-design"
  },
  {
    id: 3,
    title: "ASTRO",
    content: "Zusätzlich kann ich mit Astro arbeiten, einem modernen Framework für den Bau schneller und effizienter Websites.",
    image: "https://lweb.ch/images/2024/08/21/astro-icon-dark1.png",
    link: "https://astro.build"
  },
  {
    id: 4,
    title: "E-COMMERCE-LÖSUNG",
    content: "EasyStore von JoomShaper ist eine umfassende E-Commerce-Lösung für Joomla. Es ermöglicht die effiziente Erstellung und Verwaltung von Online-Shops, inklusive automatisierter Lagerverwaltung, vielfältigen Produktoptionen und effektiver Bestellabwicklung. Mit fortschrittlichen Anpassungsoptionen, Steuer- und Versandverwaltung erleichtert EasyStore die Schaffung einer optimalen Einkaufserfahrung. Die Integration mit SP Page Builder ermöglicht das Design von visuell ansprechenden Shops und gewährleistet ein flüssiges und zufriedenstellendes Benutzererlebnis.",
    image: "https://lweb.ch/images/2024/01/06/easystore-feature-img23.webp",
    link: ""
  },
  {
    id: 5,
    title: "HOSTPOINT",
    content: "Hostpoint, Marktführer in der Schweiz. Ich kümmere mich um den Kauf von Domains und das Webhosting über Hostpoint, wodurch Leistung und Zuverlässigkeit sichergestellt werden. Ich verwalte auch sichere und skalierbare Datenbanken, die eine robuste Infrastruktur für Projekte jeder Größenordnung bieten. Diese Partnerschaft mit Hostpoint ist der Schlüssel, um überlegene digitale Erlebnisse und hochwertige Entwicklungsdienste anzubieten.",
    image: "https://lweb.ch/images/2024/01/11/hostpoint_icon1.png",
    link: "https://www.hostpoint.ch"
  }
]

export default function WebDevShowcase() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, clientHeight, scrollHeight } = contentRef.current
        const scrollPosition = scrollTop + clientHeight
        const sectionHeight = scrollHeight / webPages.length
        const currentIndex = Math.floor(scrollPosition / sectionHeight)
        setCurrentPageIndex(Math.min(currentIndex, webPages.length - 1))
      }
    }

    const content = contentRef.current
    if (content) {
      content.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (content) {
        content.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const scrollToPage = (index: number) => {
    if (contentRef.current) {
      const sectionHeight = contentRef.current.scrollHeight / webPages.length
      contentRef.current.scrollTop = index * sectionHeight
    }
  }

  return (
    <div className="mb-40">
      <div className="max-w-7xl mx-auto rounded-3xl  bg-[#73738a59] shadow-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 p-6 lg:p-8">
            <h2 className="text-3xl font-bold text-white mt-20 text-center mb-10">Webentwicklung Showcase</h2>
            <div className="space-y-4">
              {webPages.map((page, index) => (
                <button 
                  key={page.id}
                  onClick={() => scrollToPage(index)}
                  className={`w-full px-6 py-3 rounded-full shadow-md flex items-center justify-center transition-colors ${
                    currentPageIndex === index ? 'bg-white text-blue-400' : 'bg-blue-400 text-white hover:bg-purple-800'
                  }`}
                >
                  {page.title}
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:w-2/3 p-6 lg:p-8">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden" style={{ height: '500px' }}>
              <div ref={contentRef} className="h-full overflow-y-auto">
                {webPages.map((page) => (
                  <div key={page.id} className="min-h-full p-6 snap-start">
                    <h2 className="text-3xl font-bold mb-4 text-blue-500">{page.title}</h2>
                    <img src={page.image} alt={page.title} className="w-32 h-32 object-cover rounded-xl shadow-lg mb-4 mx-auto" />
                    <p className="text-gray-700 mb-6">{page.content}</p>
                    {page.list && (
                      <ul className="list-disc pl-5 mb-6 text-gray-700">
                        {page.list.map((item, index) => (
                          <li key={index} className="mb-2">{item}</li>
                        ))}
                      </ul>
                    )}
       
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}