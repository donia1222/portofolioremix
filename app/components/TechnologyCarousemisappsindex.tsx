import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, ChevronRight, ChevronLeft, RotateCcw } from 'lucide-react'
import { Link } from "@remix-run/react";
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

export default function ThreeDCubeAppShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isRotating, setIsRotating] = useState(false)
  const [rotationDirection, setRotationDirection] = useState(1)

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

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 py-20 px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center ">
      <h2 className="text-4xl md:text-5xl font-extrabold text-white text-center mb-12">
        Discover Our Innovative  <span className="ml-2 text-[#ff69b4] text-4xl md:text-5xl font-extrabold  text-center mb-12">
        Apps
          </span>
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
              <a 
                href={apps[currentIndex].link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full bg-white text-indigo-600 py-3  mt-20 px-6 rounded-full text-center text-lg  font-semibold hover:bg-indigo-100 transition-colors duration-300 flex items-center justify-center"
              >
                <Download className="w-6 h-6 mr-2" />
                Download App
                <ChevronRight className="w-6 h-6 ml-2" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className=" flex justify-center items-center space-x-6 mt-28">
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
      <Link
          to="/apps"
          className="relative inline-flex items-center text-xl group mt-10 "
        >
          <span className="relative z-10  px-5 py-3 font-semibold transition-colors duration-200 ease-in-out bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent group-hover:from-orange-400 group-hover:to-red-500">
            App Entwicklung
            <span aria-hidden="true" className="ml-2">↗</span>
          </span>
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-in-out bg-gradient-to-r from-blue-400 to-green-400 rounded-lg blur opacity-30 group-hover:opacity-100 group-hover:from-orange-400 group-hover:to-red-500"></span>
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-in-out bg-gradient-to-r from-blue-400 to-green-400 rounded-lg opacity-0 group-hover:opacity-30"></span>
          <span className="absolute inset-0 w-full h-full border-2 border-white border-opacity-10 rounded-lg"></span>
        </Link>
    </div>
  )
}