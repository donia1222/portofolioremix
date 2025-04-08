"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Code,
  Globe,
  Github,
  ExternalLink,
  Database,
  Server,
  Smartphone,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import type React from "react"

interface PortfolioItem {
  id: number
  title: string
  category: string
  description: string
  imageUrl: string
  icon: string
  projectUrl: string
  technologies: string[]
  colors: {
    primary: string
    secondary: string
    text: string
    shadow: string
  }
}

// Sample data with web projects and appropriate images
const initialProjects: PortfolioItem[] = [
  {
    id: 1,
    title: "Ushuaia&Cantina",
    category: "React & PHP",
    description:
      "Ein Restaurant mit einer Pub-Atmosphäre, das ein einzigartiges gastronomisches Erlebnis bietet und Essen mit Unterhaltung kombiniert.",
    imageUrl: "/IMG_2733.jpeg",
    icon: "globe",
    projectUrl: "https://www.cantinatexmex.ch",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    colors: {
      primary: "#1a1a1a",
      secondary: "#333333",
      text: "#ffffff",
      shadow: "rgba(0, 0, 0, 0.5)",
    },
  },
  {
    id: 2,
    title: "Bouquet Mediterraneo",
    category: "E-Commerce & SEO",
    description:
      "Italienisches Restaurant, das authentische mediterrane Aromen mit frischen Zutaten und traditionellen Rezepten bietet.",
    imageUrl: "IMG_2734.jpeg",
    icon: "globe",
    projectUrl: "https://www.bouquetmediterraneo.ch",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    colors: {
      primary: "#0f2b46",
      secondary: "#1e4976",
      text: "#ffffff",
      shadow: "rgba(15, 43, 70, 0.6)",
    },
  },
  {
    id: 3,
    title: "Sharazan",
    category: "Joomla",
    description:
      "International anerkannte spanische Musikgruppe, bekannt für ihren einzigartigen Stil und unvergessliche Auftritte.",
    imageUrl: "IMG_2736.jpeg",
    icon: "database",
    projectUrl: "https://es.sharazan.es",
    technologies: ["Joomla", "MySQL", "REST API"],
    colors: {
      primary: "#2d4a22",
      secondary: "#4a7a38",
      text: "#ffffff",
      shadow: "rgba(45, 74, 34, 0.6)",
    },
  },
  {
    id: 4,
    title: "Flinck Sauber",
    category: "Joomla",
    description:
      "Professionelles Reinigungsunternehmen aus Liechtenstein, spezialisiert auf Lösungen für Privathaushalte und Unternehmen.",
    imageUrl: "IMG_2735.jpeg",
    icon: "server",
    projectUrl: "https://flink-sauber.li",
    technologies: ["Joomla", "PHP"],
    colors: {
      primary: "#5a3a31",
      secondary: "#8c5b4a",
      text: "#ffffff",
      shadow: "rgba(90, 58, 49, 0.6)",
    },
  },
  {
    id: 5,
    title: "Rrapi Immobilien",
    category: "React Native",
    description:
      "Immobilienagentur, spezialisiert auf exklusive Immobilien mit maßgeschneiderten Dienstleistungen für Käufer und Verkäufer.",
    imageUrl: "IMG_2738.jpeg",
    icon: "mobile",
    projectUrl: "https://rrapi.ch",
    technologies: ["React Native", "Firebase", "PHP"],
    colors: {
      primary: "#1a3a5f",
      secondary: "#2d5f8a",
      text: "#ffffff",
      shadow: "rgba(26, 58, 95, 0.6)",
    },
  },
]

// Function to get average color from an image
const getAverageColor = async (
  imageUrl: string,
): Promise<{
  primary: string
  secondary: string
  text: string
  shadow: string
}> => {
  return new Promise((resolve) => {
    const img = new Image()
    img.crossOrigin = "anonymous"
    img.src = imageUrl

    img.onload = () => {
      const canvas = document.createElement("canvas")
      const context = canvas.getContext("2d")

      if (!context) {
        // Fallback colors if canvas is not supported
        resolve({
          primary: "#1a3a5f",
          secondary: "#2d5f8a",
          text: "#ffffff",
          shadow: "rgba(26, 58, 95, 0.6)",
        })
        return
      }

      const width = img.width
      const height = img.height

      canvas.width = width
      canvas.height = height

      context.drawImage(img, 0, 0, width, height)

      try {
        // Get pixel data from the image
        const imageData = context.getImageData(0, 0, width, height).data

        let r = 0,
          g = 0,
          b = 0
        let r2 = 0,
          g2 = 0,
          b2 = 0
        let count = 0

        // Sample pixels (every 5th pixel to improve performance)
        for (let i = 0; i < imageData.length; i += 20) {
          r += imageData[i]
          g += imageData[i + 1]
          b += imageData[i + 2]

          // Get a slightly different color for secondary
          if (i % 40 === 0) {
            r2 += imageData[i]
            g2 += imageData[i + 1]
            b2 += imageData[i + 2]
          }

          count++
        }

        // Calculate average colors
        r = Math.floor(r / count)
        g = Math.floor(g / count)
        b = Math.floor(b / count)

        r2 = Math.floor(r2 / (count / 2))
        g2 = Math.floor(g2 / (count / 2))
        b2 = Math.floor(b2 / (count / 2))

        // Determine if text should be white or black based on primary color brightness
        const brightness = (r * 299 + g * 587 + b * 114) / 1000
        const textColor = brightness < 128 ? "#ffffff" : "#000000"

        // Create color scheme
        const primaryColor = `rgb(${r}, ${g}, ${b})`
        const secondaryColor = `rgb(${r2}, ${g2}, ${b2})`
        const shadowColor = `rgba(${r}, ${g}, ${b}, 0.6)`

        resolve({
          primary: primaryColor,
          secondary: secondaryColor,
          text: textColor,
          shadow: shadowColor,
        })
      } catch (error) {
        console.error("Error extracting colors:", error)
        // Fallback colors
        resolve({
          primary: "#1a3a5f",
          secondary: "#2d5f8a",
          text: "#ffffff",
          shadow: "rgba(26, 58, 95, 0.6)",
        })
      }
    }

    img.onerror = () => {
      console.error("Error loading image")
      // Fallback colors
      resolve({
        primary: "#1a3a5f",
        secondary: "#2d5f8a",
        text: "#ffffff",
        shadow: "rgba(26, 58, 95, 0.6)",
      })
    }
  })
}

// Function to render technology badge
const TechBadge = ({ name, textColor }: { name: string; textColor: string }) => {
  return (
    <span
      className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium"
      style={{ backgroundColor: `${textColor}15`, color: textColor }}
    >
      {name}
    </span>
  )
}

interface ProjectCardProps {
  project: PortfolioItem
  index: number
  viewNextProject: (id: number) => void
  getIconComponent: (iconName: string) => JSX.Element
  handleVisitProject: (e: React.MouseEvent, url: string) => void
  totalProjects: number
  isMobile: boolean
}

function ProjectCard({
  project,
  index,
  viewNextProject,
  getIconComponent,
  handleVisitProject,
  totalProjects,
  isMobile,
}: ProjectCardProps) {
  const zIndex = totalProjects - index
  const yOffset = index * 30 // Increased vertical offset
  const xOffset = index * 5 // Added horizontal offset

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 100, x: xOffset }}
      animate={{
        opacity: 1,
        y: yOffset,
        x: xOffset,
        scale: 1 - index * 0.04,
        rotateZ: index * -3, // Slight rotation for each card
      }}
      exit={{
        opacity: 0,
        transition: { duration: 0.2 },
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 50,
        mass: 1,
      }}
      style={{
        zIndex,
        boxShadow: `0 ${10 + index * 5}px ${30 + index * 10}px ${project.colors.shadow}`,
        backgroundColor: project.colors.primary,
      }}
      className="absolute left-0 top-0 h-full w-full cursor-grab overflow-hidden rounded-2xl active:cursor-grabbing"
      drag={isMobile && index === 0} // Allow drag only on mobile for the top card
      dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
      dragElastic={0.6}
      onDragEnd={(_, info) => {
        if (isMobile && index === 0) {
          const distance = Math.sqrt(Math.pow(info.offset.x, 2) + Math.pow(info.offset.y, 2))
          if (distance > 150) {
            // Adjust this threshold as needed
            viewNextProject(project.id)
          }
        }
      }}
      whileDrag={{
        scale: 1.05,
        boxShadow: `0 ${15 + index * 5}px ${40 + index * 10}px ${project.colors.shadow}`,
      }}
    >
      <motion.div
        className="relative flex h-full flex-col overflow-hidden rounded-2xl"
        style={{ color: project.colors.text }}
      >
        {/* Card Header */}
        <div className="flex items-center justify-between p-4">
          <div className="rounded-full bg-opacity-20 p-2" style={{ backgroundColor: `${project.colors.text}20` }}>
            {getIconComponent(project.icon)}
          </div>
          <motion.button
            className="rounded-full bg-opacity-20 p-2"
            style={{ backgroundColor: `${project.colors.text}20` }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => handleVisitProject(e, project.projectUrl)}
          >
            <ExternalLink className="h-5 w-5" />
          </motion.button>
        </div>

        {/* Card Title */}
        <div className="px-4 py-2">
          <h2 className="text-3xl font-bold">{project.title}</h2>
          <h3 className="text-xl font-medium" style={{ color: `${project.colors.text}99` }}>
            {project.category}
          </h3>
        </div>

        {/* Card Image */}
        <div className="mt-2 overflow-hidden px-4">
          <div
            className="aspect-video w-full overflow-hidden rounded-xl bg-cover bg-center"
            style={{
              backgroundImage: `url(${project.imageUrl})`,
              boxShadow: `0 10px 30px ${project.colors.shadow}`,
            }}
          />
        </div>

        {/* Card Footer */}
        <div className="mt-auto p-4">
          {/* Technology tags */}
          <div className="mb-3 flex flex-wrap gap-1">
            {project.technologies.map((tech, i) => (
              <TechBadge key={i} name={tech} textColor={project.colors.text} />
            ))}
          </div>

          <div
            className="rounded-full px-3 py-1 text-sm"
            style={{
              backgroundColor: `${project.colors.text}20`,
              display: "inline-flex",
              alignItems: "center",
              gap: "0.25rem",
            }}
          >
            {getIconComponent(project.icon)}
            {project.category}
          </div>
          <p className="mt-3 mb-10 text-sm opacity-80">{project.description}</p>
        </div>

        {/* Drag indicator for the top card - only on mobile */}
        {isMobile && index === 0 && (
          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 flex-col items-center">
            <motion.div
              className="h-1 w-10 rounded-full"
              style={{ backgroundColor: `${project.colors.text}40` }}
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            />
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default function PortfolioShowcase() {
  const [projects, setProjects] = useState<PortfolioItem[]>(initialProjects)
  const [loading, setLoading] = useState(true)
  const [extractedColors, setExtractedColors] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  // Check if the screen is mobile or desktop
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Extract colors from images when component mounts
  useEffect(() => {
    const extractColors = async () => {
      if (extractedColors) return

      const updatedProjects = [...projects]

      for (let i = 0; i < updatedProjects.length; i++) {
        const project = updatedProjects[i]
        try {
          const colors = await getAverageColor(project.imageUrl)
          updatedProjects[i].colors = colors
        } catch (error) {
          console.error("Error extracting colors:", error)
        }
      }

      setProjects(updatedProjects)
      setExtractedColors(true)
      setLoading(false)
    }

    extractColors()
  }, [projects, extractedColors])

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "shopping":
        return <ShoppingCart className="h-5 w-5" />
      case "globe":
        return <Globe className="h-5 w-5" />
      case "database":
        return <Database className="h-5 w-5" />
      case "server":
        return <Server className="h-5 w-5" />
      case "mobile":
        return <Smartphone className="h-5 w-5" />
      case "github":
        return <Github className="h-5 w-5" />
      case "code":
        return <Code className="h-5 w-5" />
      case "external":
      default:
        return <ExternalLink className="h-5 w-5" />
    }
  }

  const handleVisitProject = (e: React.MouseEvent, url: string) => {
    e.stopPropagation()
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const handlePrevProject = () => {
    // Get the last project and move it to the front
    setProjects((prevProjects) => {
      const lastProject = prevProjects[prevProjects.length - 1]
      const restProjects = prevProjects.slice(0, prevProjects.length - 1)
      return [lastProject, ...restProjects]
    })
  }

  const handleNextProject = () => {
    // Move the first project to the end
    setProjects((prevProjects) => {
      const firstProject = prevProjects[0]
      const restProjects = prevProjects.slice(1)
      return [...restProjects, firstProject]
    })
  }

  const handleSwipeComplete = (id: number) => {
    // Find the index of the project with the given id
    const index = projects.findIndex((project) => project.id === id)
    if (index !== -1) {
      // Move this project to the end of the array
      setProjects((prevProjects) => {
        const projectToMove = prevProjects[index]
        const newProjects = prevProjects.filter((_, i) => i !== index)
        return [...newProjects, projectToMove]
      })
    }
  }

  if (loading) {
    return <div className="flex h-96 w-full items-center justify-center">Cargando portafolio...</div>
  }

  return (
    <>
      <div className="w-full text-center mb-8 py-6 rounded-lg">
        <h1 className="text-4xl font-bold tracking-tight text-white">Projekte 2025</h1>
        <div className="h-1 w-24 bg-white mx-auto mt-2 mb-3 opacity-50"></div>
        <p className="text-gray-400 mt-2">Meine bisher abgeschlossenen Projekte für das Jahr 2025</p>
      </div>
      <div className="relative h-[600px] w-full">
        <AnimatePresence mode="popLayout">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              viewNextProject={handleSwipeComplete}
              getIconComponent={getIconComponent}
              handleVisitProject={handleVisitProject}
              totalProjects={Math.min(projects.length, 3)}
              isMobile={isMobile}
            />
          ))}
        </AnimatePresence>

        {/* Navigation buttons - only visible on desktop */}
        {!isMobile && (
          <div className="absolute bottom-[-160px] left-0 right-0 flex justify-center space-x-4">
            <motion.button
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-white shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrevProject}
            >
              <ChevronLeft className="h-6 w-6" />
            </motion.button>
            <motion.button
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-white shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNextProject}
            >
              <ChevronRight className="h-6 w-6" />
            </motion.button>
          </div>
        )}
      </div>
    </>
  )
}
