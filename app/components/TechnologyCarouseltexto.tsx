import { Bell,  CreditCard, ShoppingCart, Apple, Chrome, Home, User} from 'lucide-react'

export default function AppBenefitsShowcase() {
  const benefits = [
    {
      icon: Bell,
      title: "Benachrichtigungen in der App",
      description: "Halten Sie Ihre Nutzer mit Echtzeit-Push-Benachrichtigungen auf dem Laufenden."
    },
    {
      icon: User,
      title: "Mehrsprachige Apps",
      description: "Erreichen Sie ein globales Publikum mit Apps, die mehrere Sprachen unterstützen."
    },
    {
      icon: CreditCard,
      title: "Abonnements in der App",
      description: "Implementieren Sie wiederkehrende Einnahmemodelle mit einfach zu verwaltenden Abonnements."
    },
    {
      icon: ShoppingCart,
      title: "In-App-Käufe",
      description: "Monetarisieren Sie Ihre App mit nahtlosen In-App-Kaufmöglichkeiten."
    }
  ]

  return (
    <div className="mb-40">
      <div className="max-w-7xl mx-auto bg-gradient-to-br bg-[#73738a59] rounded-3xl shadow-xl overflow-hidden">
        <div className="p-8 md:p-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
            Stärken Sie Ihr Unternehmen mit einer <span className="text-purple-400  mt-10 ">App</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className=" bg-gradient-to-r from-purple-200 to-indigo-200 rounded-2xl shadow-lg p-6 transform transition-all hover:scale-105"
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
            <h3 className="text-3xl font-bold mb-6">Entwicklung</h3>
            <p className="text-xl mb-6">
              Ich bin ein freiberuflicher Entwickler, spezialisiert auf die Erstellung mobiler Anwendungen mit React Native. Dank dieser Technologie sind meine Anwendungen sowohl mit iOS als auch mit Android kompatibel und funktionieren einwandfrei. Ich kann vollständige Anwendungen entwickeln und in den jeweiligen App-Stores veröffentlichen.
            </p>
            <p className="text-xl mb-6">
              Außerdem biete ich meine Dienstleistungen auch externen Unternehmen an. Wenn Sie interessiert sind, kann ich Ihnen unverbindlich ein Beispiel eines Projekts zusenden, das Ihren Vorstellungen entspricht. Ich werde Ihnen eine kostenlose Testversion einer Anwendung zur Verfügung stellen, damit Sie die Qualität meiner Arbeit beurteilen können.
            </p>
            <p className="text-xl mb-8">
              Wenn Sie ein Webentwicklungsunternehmen sind, das nach einer Zusammenarbeit in mobilen Projekten sucht, würde ich mich freuen, mit Ihnen zusammenzuarbeiten. Kontaktieren Sie mich für weitere Details und erfahren Sie, wie ich Ihnen helfen kann, Ihre Idee auf die nächste Stufe zu bringen.
            </p>
  
          </div>
        </div>
      </div>
    </div>
  )
}