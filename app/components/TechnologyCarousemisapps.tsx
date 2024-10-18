import { useState, useEffect, useRef } from 'react'
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
  const [currentAppIndex, setCurrentAppIndex] = useState(0)
  const [isLastAppScrolled, setIsLastAppScrolled] = useState(false)
  const phoneContentRef = useRef<HTMLDivElement>(null)
  const mainContentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (phoneContentRef.current && mainContentRef.current) {
        const phoneContent = phoneContentRef.current
        const phoneScrollTop = phoneContent.scrollTop
        const phoneScrollHeight = phoneContent.scrollHeight
        const phoneClientHeight = phoneContent.clientHeight

        // Calculate which app should be displayed based on scroll position
        const appIndex = Math.floor(phoneScrollTop / phoneClientHeight)
        setCurrentAppIndex(Math.min(appIndex, apps.length - 1))

        // Check if we've scrolled past the last app
        if (phoneScrollTop + phoneClientHeight >= phoneScrollHeight - 1) {
          setIsLastAppScrolled(true)
        } else {
          setIsLastAppScrolled(false)
        }
      }
    }

    const phoneContent = phoneContentRef.current
    if (phoneContent) {
      phoneContent.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (phoneContent) {
        phoneContent.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  useEffect(() => {
    const mainContent = mainContentRef.current
    if (mainContent) {
      if (isLastAppScrolled) {
        mainContent.style.overflowY = 'auto'
      } else {
        mainContent.style.overflowY = 'hidden'
      }
    }
  }, [isLastAppScrolled])

  const AppDisplay = ({ app }: { app: App }) => (
    <div className="h-full flex flex-col items-center justify-center p-4">
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 rounded-t-2xl w-full mb-4">
        <h1 className="text-2xl font-bold text-center">{app.name}</h1>
      </div>
      <img src={app.image} alt={app.name} className="w-32 h-32 object-cover rounded-2xl shadow-lg mb-4" />
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
  )

  return (
    <div className="mb-0"  ref={mainContentRef}>
        <section className="w-full text-center z-5  mb-0 bg-gray-900 py-16  pt-20">
      <div className="max-w-7xl mx-auto bg-gray-900  rounded-3xl  overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/3 p-6 lg:p-8">
            <h2 className="text-3xl font-bold text-white mt-20 text-center mb-10">My Published Apps</h2>
            <div className="space-y-4">
              {apps.map((app, index) => (
                <button 
                  key={app.id}
                  onClick={() => {
                    setCurrentAppIndex(index)
                    if (phoneContentRef.current) {
                      phoneContentRef.current.scrollTop = index * phoneContentRef.current.clientHeight
                    }
                  }}
                  className={`w-full px-6 py-3 rounded-full shadow-md flex items-center justify-center transition-colors ${
                    currentAppIndex === index ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' : 'bg-white text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  {app.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="lg:w-2/3 p-6 lg:p-8">
            <div className="relative border-[14px] border-gray-900 rounded-[3rem] overflow-hidden shadow-xl bg-gray-900 " 
                 style={{ height: '600px', width: '100%', maxWidth: '320px', margin: '0 auto' }}>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-7 bg-gray-900 rounded-b-3xl"></div>
              <div className="h-full w-full bg-white overflow-hidden rounded-[2.3rem]">
                <div ref={phoneContentRef} className="h-full overflow-y-auto snap-y snap-mandatory">
                  {apps.map((app) => (
                    <div key={app.id} className="h-full snap-start">
                      <AppDisplay app={app} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  )
}