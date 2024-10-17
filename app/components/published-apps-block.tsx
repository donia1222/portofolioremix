import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

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

export default function PublishedAppsBlock() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextApp = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % apps.length)
  }

  const prevApp = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + apps.length) % apps.length)
  }

  return (
    <div className="w-full py-16  text-white overflow-hidden  bg-gray-800 ">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold  text-center text-blue-400 mb-20">Entdecken Sie unsere veröffentlichten Apps</h2>
        <div className="relative">
          <div className="flex items-center justify-center">
            <button
              onClick={prevApp}
              className="absolute left-0 z-10 p-2 bg-blue-400 rounded-full hover:bg-blue-600 transition-colors duration-300"
              aria-label="Previous app"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8"
            >
              <img
                src={apps[currentIndex].image}
                alt={apps[currentIndex].name}
                className="w-64 h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="max-w-md text-center md:text-left">
                <h3 className="text-2xl font-semibold mb-2">{apps[currentIndex].name}</h3>
                <p className="text-blue-200 mb-4">{apps[currentIndex].description}</p>
                <a
                  href={apps[currentIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  Launch App
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
            <button
              onClick={nextApp}
              className="absolute right-0 z-10 p-2 bg-blue-400 rounded-full hover:bg-blue-600 transition-colors duration-300"
              aria-label="Next app"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {apps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-blue-500' : 'bg-blue-300'
              }`}
              aria-label={`Go to app ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}