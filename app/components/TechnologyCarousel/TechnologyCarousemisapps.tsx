import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, ChevronRight, ChevronLeft } from 'lucide-react'

interface App {
  id: number
  name: string
  description: string
  image: string
  link: string
}

const apps: App[] = [
  {
    id: 0,
    name: "Hundezonen",
    description: "15.000 Downloads in der Schweiz!",
    image: "adaptive-iconcopia2.jpeg",
    link: "https://foodscan-ai.com"
  },
  {
    id: 1,
    name: "Voice Shopping",
    description: "Create Shopping List by Voice.",
    image: "app-icon-1024x10241x-copia1.png",
    link: "https://speak-list.com"
  },
  {
    id: 2,
    name: "GastroStamps",
    description: "Punkte sammeln beim Essen!",
    image: "app-icon-1024x10241x-copia13.png",
    link: "https://gastrostamps.ch"
  },
  {
    id: 3,
    name: "Dog-Mentor",
    description: "Discover the world of your dog with our app",
    image: "app-icon-1024x10241x-copia121.png",
    link: "https://dog-mentor.com"
  },
  {
    id: 4,
    name: "FoodScan AI",
    description: "Transform Your Fridge into Recipes!",
    image: "app-icon-1024x10241x-copia11-1.png",
    link: "https://foodscan-ai.com"
  },
]

export default function ThreeDCubeAppShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isRotating, setIsRotating] = useState(false)
  const [rotationDirection, setRotationDirection] = useState(1)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      nextApp()
    }, 10000)

    return () => clearInterval(timer)
  }, [currentIndex])

  const nextApp = () => {
    setRotationDirection(1)
    setIsRotating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % apps.length)
      setIsRotating(false)
    }, 500)
  }

  const prevApp = () => {
    setRotationDirection(-1)
    setIsRotating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + apps.length) % apps.length)
      setIsRotating(false)
    }, 500)
  }

  const handleDownloadClick = (appIndex: number) => {
    if (appIndex === 0) {
      setShowModal(true)
    }
  }

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center rounded-3xl">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12">
        Dies sind meine veröffentlichten <span className="ml-2 text-[#ff69b4] text-4xl md:text-5xl font-extrabold text-center mb-12">Apps</span>
      </h2>
      <div className="relative w-full max-w-md aspect-square perspective-1000">
        <AnimatePresence>
          <motion.div
            key={currentIndex}
            className="w-full h-full absolute"
            initial={{ rotateY: rotationDirection * 90 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: rotationDirection * -90 }}
            transition={{ duration: 0.5 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-3xl shadow-xl p-8 flex flex-col justify-between transform-gpu">
              <div>
                <img 
                  src={apps[currentIndex].image} 
                  alt={apps[currentIndex].name} 
                  className="w-32 h-32 mx-auto mb-6 rounded-2xl shadow-lg"
                />
                <h3 className="text-3xl font-bold text-white text-center mb-4">{apps[currentIndex].name}</h3>
                <p className="text-xl text-indigo-200 text-center mb-8">{apps[currentIndex].description}</p>
              </div>
              {currentIndex === 0 ? (
                <button
                  onClick={() => handleDownloadClick(currentIndex)}
                  className="w-full bg-white text-indigo-600 py-3 px-6 rounded-full text-center text-lg mt-10 font-semibold hover:bg-indigo-100 transition-colors duration-300 flex items-center justify-center"
                >
                  <Download className="w-6 h-6 mr-2" />
                  Download App
                  <ChevronRight className="w-6 h-6 ml-2" />
                </button>
              ) : (
                <a 
                  href={apps[currentIndex].link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full bg-white text-indigo-600 py-3 px-6 rounded-full text-center text-lg mt-10 font-semibold hover:bg-indigo-100 transition-colors duration-300 flex items-center justify-center"
                >
                  <Download className="w-6 h-6 mr-2" />
                  Download App
                  <ChevronRight className="w-6 h-6 ml-2" />
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="flex justify-center items-center space-x-6 mt-28">
        <button
          onClick={prevApp}
          disabled={isRotating}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 focus:outline-none transition-colors duration-300"
          aria-label="Previous app"
        >
          <ChevronLeft className="w-8 h-8 text-white" />
        </button>
        <div className="flex items-center space-x-2">
          {apps.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setRotationDirection(index > currentIndex ? 1 : -1)
                setIsRotating(true)
                setTimeout(() => {
                  setCurrentIndex(index)
                  setIsRotating(false)
                }, 500)
              }}
              disabled={isRotating}
              className={`w-3 h-3 rounded-full focus:outline-none transition-colors duration-300 ${
                index === currentIndex ? 'bg-white' : 'bg-white bg-opacity-30 hover:bg-opacity-50'
              }`}
              aria-label={`Go to app ${index + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextApp}
          disabled={isRotating}
          className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 focus:outline-none transition-colors duration-300"
          aria-label="Next app"
        >
          <ChevronRight className="w-8 h-8 text-white" />
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <h3 className="text-2xl font-bold text-indigo-900 mb-4">App in Erneuerung</h3>
              <p className="text-gray-700 mb-6">
               Es befindet sich im Umbau. Es wird bald wieder veröffentlicht. Vielen Dank für Ihre Geduld!
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-300"
              >
                Schließen
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}