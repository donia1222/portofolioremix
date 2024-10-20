import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'
import TechnologyCarouselphone from "~/components/TechnologyCarouselphone"; 
import TechnologyCarousemisapps from "~/components/TechnologyCarousemisapps"; 
import TechnologyCarouseltexto from "~/components/TechnologyCarouseltexto"; 
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
    <div className="w-full py-16  text-white overflow-hidden mt-10">


      <div className="container mx-auto px-4 py-10 mt-10 ">
      <TechnologyCarouseltexto />

      <TechnologyCarouselphone />

          <TechnologyCarousemisapps  />


        </div>
      </div>

  )
}