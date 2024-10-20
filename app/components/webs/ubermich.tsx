import { useState } from 'react'
import { Rocket, Smartphone, Globe, Bot, Star, ChevronRight } from 'lucide-react'

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

export default function AboutMePage() {
  const [activeSection, setActiveSection] = useState('about')

  const sections = [
    { id: 'about', title: 'Über mich', icon: Star },
    { id: 'mobile', title: 'Mobile Apps', icon: Smartphone },
    { id: 'web', title: 'Webentwicklung', icon: Globe },
    { id: 'chatgpt', title: 'ChatGPT Co-Pilot', icon: Bot },
    { id: 'why', title: 'Warum mich wählen', icon: Rocket },
  ]

  return (
    <div className="min-h-screen text-white">
      <header className="py-12 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black opacity-90"></div>
          <div className="absolute inset-0 bg-[url('/black-prism-concept-ai-generated.jpg')] bg-cover bg-center opacity-80"></div>
        </div>
        <div className="relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold mb-40"></h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-blue-500"></p>
        </div>
      </header>

      <nav className="bg-gray-900 p-4 sticky top-0 z-50">
        <div className="flex justify-center space-x-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                setActiveSection(section.id);
                scrollToSection(section.id);
              }}
              className={`flex items-center px-3 py-2 rounded-md transition-colors ${
                activeSection === section.id
                  ? ' text-blue-500'
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <section.icon className="w-5 h-5 mr-2" />
              <span className="hidden sm:inline">{section.title}</span>
            </button>
          ))}
        </div>
      </nav>

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-24">
        <section id="about" className={`transition-opacity duration-500 ${activeSection === 'about' ? 'opacity-100' : 'opacity-50'}`}>
  <h2 className="text-3xl font-bold mb-6 flex items-center mt-20 ml-16">
    <Star className="w-8 h-8 mr-2 text-yellow-400" />
    Über mich
  </h2>
  
  {/* Aquí agregamos la imagen del avatar */}
  <div className="ml-10 mb-6">
    <img 
      src="/yo2.png" // Reemplaza esta ruta con la ubicación de tu imagen
      alt="Avatar de Roberto Salvador"
      className="w-64 h-38 rounded-lg object-cover"
    />
  </div>

  <div className="bg-gray-900 bg-opacity-50 rounded-lg p-6 backdrop-filter backdrop-blur-sm ">
    <p className="mb-4">
      Hallo 👋, Ich bin Roberto Salvador. Seit 2019 begeistert mich die Entwicklung von Webseiten und mobilen Anwendungen. Täglich widme ich 4 bis 5 Stunden dem autodidaktischen Lernen und Üben.
    </p>
    <p className="mb-4">
      Im Jahr 2020 habe ich meine erste Anwendung veröffentlicht. Derzeit, im Jahr 2024, habe ich fünf Anwendungen veröffentlicht und etwa 25 Webseiten erstellt.
    </p>
  </div>
</section>


          <section id="mobile" className={`transition-opacity duration-500 ${activeSection === 'mobile' ? 'opacity-100' : 'opacity-50'}`}>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Smartphone className="w-8 h-8 mr-2 text-blue-400" />
              Entwicklung von mobilen Anwendungen
            </h2>
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 backdrop-filter backdrop-blur-sm">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 mr-2 text-purple-400 flex-shrink-0" />
                  <span><strong className="text-purple-300">iOS und Android Apps:</strong> Ich erstelle native und plattformübergreifende mobile Anwendungen, die optimale Leistung und eine hervorragende Benutzererfahrung gewährleisten.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 mr-2 text-purple-400 flex-shrink-0" />
                  <span><strong className="text-purple-300">UI/UX Design:</strong> Intuitive und ansprechende Designs, die die Interaktion der Benutzer mit Ihrer Anwendung verbessern.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 mr-2 text-purple-400 flex-shrink-0" />
                  <span><strong className="text-purple-300">API-Integration:</strong> Ich verbinde Ihre Anwendung mit externen Diensten und Plattformen, um ihre Funktionalität zu erweitern.</span>
                </li>
              </ul>
            </div>
          </section>

          <section id="web" className={`transition-opacity duration-500 ${activeSection === 'web' ? 'opacity-100' : 'opacity-50'}`}>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Globe className="w-8 h-8 mr-2 text-green-400" />
              Webentwicklung Werdenberg und Liechtenstein
            </h2>
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 backdrop-filter backdrop-blur-sm">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 mr-2 text-purple-400 flex-shrink-0" />
                  <span><strong className="text-purple-300">Responsives Webdesign:</strong> Ich gestalte Webseiten, die sich an jedes Gerät anpassen und eine konsistente Benutzererfahrung bieten.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 mr-2 text-purple-400 flex-shrink-0" />
                  <span><strong className="text-purple-300">E-Commerce:</strong> Ich entwickle Online-Shops mit fortschrittlichen Funktionen, damit Sie Ihre Produkte effizient verkaufen können.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 mr-2 text-purple-400 flex-shrink-0" />
                  <span><strong className="text-purple-300">SEO-Optimierung:</strong> Ich implementiere SEO-Techniken, um die Sichtbarkeit Ihrer Website in Suchmaschinen zu verbessern und mehr organischen Traffic zu generieren.</span>
                </li>
              </ul>
            </div>
          </section>

          <section id="chatgpt" className={`transition-opacity duration-500 ${activeSection === 'chatgpt' ? 'opacity-100' : 'opacity-50'}`}>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Bot className="w-8 h-8 mr-2 text-pink-400" />
              ChatGPT mein Co-Pilot ✨
            </h2>
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 backdrop-filter backdrop-blur-sm">
              <p>
                Seit einem Jahr nutze ich ChatGPT als meinen Co-Piloten, um die Arbeit zu beschleunigen. Dadurch spare ich enorm viel Zeit. Obwohl man alles immer sorgfältig überwachen muss.
              </p>
            </div>
          </section>

          <section id="why" className={`transition-opacity duration-500 ${activeSection === 'why' ? 'opacity-100' : 'opacity-50'}`}>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Rocket className="w-8 h-8 mr-2 text-red-400" />
              Warum sollten Sie genau mich wählen
            </h2>
            <div className="bg-gray-800 bg-opacity-50 rounded-lg p-6 backdrop-filter backdrop-blur-sm">
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 mr-2 text-purple-400 flex-shrink-0" />
                  <span><strong className="text-purple-300">Maßgeschneiderte Lösungen:</strong> Ich lege großen Wert darauf, die Bedürfnisse Ihres Unternehmens zu verstehen, um maßgeschneiderte Lösungen zu bieten, die Ihr Wachstum fördern.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 mr-2 text-purple-400 flex-shrink-0" />
                  <span><strong className="text-purple-300">Kontinuierlicher Support:</strong> Ich biete kontinuierliche Unterstützung und Wartung, um sicherzustellen, dass Ihre App oder Website jederzeit einwandfrei funktioniert.</span>
                </li>
              </ul>
              <p className="mt-6 text-lg font-semibold text-purple-300">
                Ich biete kostenlose Proben für Unternehmen oder Privatpersonen an, die an meinen Dienstleistungen interessiert sind. Wenn Ihnen die Arbeit gefällt, können wir ohne Verpflichtung fortfahren.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}