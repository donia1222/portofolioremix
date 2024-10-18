import { useState } from 'react'
import { Download } from 'lucide-react'

interface App {
  id: number
  name: string
  description: string
  image: string
  link: string
}

const apps: App[] = [
  {
    id: 1,
    name: "Voice Shopping",
    description: "Create Shopping List by Voice.",
    image: "https://lweb.ch/images/2024/07/30/app-icon-1024x10241x-copia1.png",
    link: "https://speak-list.com"
  },
  {
    id: 2,
    name: "GastroStamps",
    description: "Punkte sammeln beim Essen!",
    image: "https://lweb.ch/images/2024/07/30/app-icon-1024x10241x-copia13.png",
    link: "https://gastrostamps.ch"
  },
  {
    id: 3,
    name: "Dog-Mentor",
    description: "Discover the world of your dog with our app",
    image: "https://lweb.ch/images/2024/07/30/app-icon-1024x10241x-copia121.png",
    link: "https://dog-mentor.com"
  },
  {
    id: 4,
    name: "FoodScan AI",
    description: "Transform Your Fridge into Recipes!",
    image: "https://lweb.ch/images/2024/08/11/app-icon-1024x10241x-copia11-1.png",
    link: "https://foodscan-ai.com"
  }
]

export default function PublishedAppsShowcase() {
  const [currentApp, setCurrentApp] = useState<number>(1)

  const AppDisplay = ({ app }: { app: App }) => (
    <div className="h-full bg-gradient-to-b from-gray-50 to-gray-100 overflow-y-auto">
      <div className="sticky top-0 bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 shadow-md z-10">
        <h1 className="text-2xl font-bold">{app.name}</h1>
      </div>
      <div className="p-4 flex flex-col items-center">
        <img src={app.image} alt={app.name} className="w-32 h-32 object-cover rounded-2xl shadow-lg mb-4 mt-20" />
        <p className="text-gray-700 text-center mb-6">{app.description}</p>
        <a 
          href={app.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 px-6 rounded-full text-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition-colors flex items-center"
        >
          <Download className="w-5 h-5 mr-2" />
          Download App
        </a>
      </div>
    </div>
  )

  const renderApp = () => {
    const app = apps.find(a => a.id === currentApp)
    return app ? <AppDisplay app={app} /> : null
  }

  return (
    <div className="w-full min-h-screen p-4 md:p-8 ">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-purple-400 to-gray-300  backdrop-blur-md rounded-3xl shadow-xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 p-6 lg:p-8 ">
            <h2 className="text-3xl font-bold mb-6 text-gray-700 text-center mt-20">My Published Apps</h2>
            <div className="space-y-4">
              {apps.map((app) => (
                <button 
                  key={app.id}
                  onClick={() => setCurrentApp(app.id)}
                  className={`w-full px-6 py-3 rounded-full shadow-md flex items-center justify-center transition-colors ${
                    currentApp === app.id ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' : 'bg-white text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {app.name}
                </button>
              ))}
            </div>
          </div>
          <div className="lg:w-2/3 p-6 lg:p-8">
            <div className="relative border-[14px] border-gray-900 rounded-[3rem] overflow-hidden shadow-xl bg-gray-900" 
                 style={{ height: '600px', width: '100%', maxWidth: '320px', margin: '0 auto' }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-gray-900 rounded-b-3xl"></div>
              <div className="h-full w-full bg-white overflow-hidden rounded-[2.3rem]">
                {renderApp()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}