"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Globe, Database, Server, Smartphone, Bitcoin, ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react"

// Tipos
interface PortfolioItem {
  id: number
  title: string
  category: string
  description: string
  imageUrl: string
  icon: string
  projectUrl: string
  technologies: string[]
}

// Datos de proyectos
const portfolioItems: PortfolioItem[] = [
    {
    id: 8,
    title: "BuyVoice App",
    category: "Remix",
    description:
      "Italienisches Restaurant, das authentische mediterrane Aromen mit frischen Zutaten und traditionellen Rezepten bietet.",
    imageUrl: "/app-icon.png",
    icon: "globe",
    projectUrl: "https://www.buyvoice.app",
    technologies: ["Remix", "React", "TailwindCSS"],
  },

        {
    id: 13,
    title: "Vix Time App",
   category: "Next.js",
    description:
      "Intelligente Zeiterfassung",
    imageUrl: "/calendar.webp",
    icon: "globe",
    projectUrl: "https://www.vixtime.com",
    technologies: ["Next.js", "React", "TailwindCSS"],
  },
          {
    id: 12,
    title: "HOT & BBQ",
   category: "Next.js",
    description:
      "Die exklusivste Premium-Kollektion von Hot & BBQ",
    imageUrl: "/ff.jpg",
    icon: "globe",
    projectUrl: "https://www.hot-bbq.ch",
    technologies: ["Website im Aufbau"],
  },


      {
    id: 2,
    title: "BeautyStyle",
    category: "Remix & Framer Motion",
    description:
      "Moderner Friseursalon mit personalisierten Schönheitsdienstleistungen und interaktiven Animationen für ein einzigartiges Kundenerlebnis.",
    imageUrl: "/woman-getting-her-hair-cut-beauty-salon_23-2149167399.jpg",
    icon: "globe",
    projectUrl: "https://beautystyles.vercel.app",
    technologies: ["Remix", "React", "Framer Motion", "TailwindCSS"],
  },
  

  {
    id: 1,
    title: "Crypto",
    category: "Remix & Web3",
    description:
      "Eine moderne Kryptowährungs-Dashboard-Anwendung mit Echtzeit-Preisdaten, Portfolio-Tracking, Marktanalysen und Conexion APIs.",
    imageUrl: "/crypto-abstract-bg.png",
    icon: "crypto",
    projectUrl: "https://remix-crypto.vercel.app",
    technologies: ["Remix", "React","API",  "Web3.js", "TailwindCSS"],
  },
  
      {
    id: 11,
    title: "WebM, WebP Converter",
   category: "Next.js",
    description:
      "Convert your videos to WebM format for better web performance",
    imageUrl: "/20945639.jpg",
    icon: "globe",
    projectUrl: "https://web-m-video-converter.vercel.app",
    technologies: ["Next.js", "React", "TailwindCSS"],
  },
    {
    id: 0,
    title: "Ushuaia Bar & Lounge",
    category: "Next.js",
    description:
      "Premium Cocktail, Hookah & Terrace in Buchs. Eine luxuriöse Bar-Lounge mit einzigartiger Atmosphäre, modernem Design und erstklassigem Service.",
    imageUrl:
      "/abstract-smoke.png",
    icon: "server",
    projectUrl: "https://www.ushuaia-bar.ch",
    technologies: ["Next.js", "React", "Framer Motion", "TailwindCSS"],
  },

  {
    id: 3,
    title: "Cantina Tex-Mex",
    category: "Remix",
    description:
      "Ein Restaurant mit einer Pub-Atmosphäre, das ein einzigartiges gastronomisches Erlebnis bietet und Essen mit Unterhaltung kombiniert.",
    imageUrl: "/IMG_2733.jpeg",
    icon: "globe",
    projectUrl: "https://www.cantinatexmex.ch",
    technologies: ["Remix", "React", "TailwindCSS"],
  },
  {
    id: 4,
    title: "Flinck Sauber",
    category: "Next.js",
    description:
      "Professionelles Reinigungsunternehmen aus Liechtenstein, spezialisiert auf Lösungen für Privathaushalte und Unternehmen.",
    imageUrl: "/IMG_2735.jpeg",
    icon: "server",
    projectUrl: "https://flink-sauber.li",
    technologies: ["Next.js", "React", "TailwindCSS"],
  },
  {
    id: 5,
    title: "Renovation",
    category: "Next.js",
    description:
      "Professionelles Renovationsunternehmen spezialisiert auf die Modernisierung von Häusern und Wohnungen. Hochwertige Handwerksarbeit mit innovativen Lösungen für Ihr Zuhause.",
    imageUrl: "/interior-design-with-photoframes-blue-couch.jpg",
    icon: "server",
    projectUrl: "https://renovation-tau.vercel.app", // En proceso - 80%
    technologies: ["Next.js", "React", "TailwindCSS"],
  
  },

  {
    id: 6,
    title: "Bouquet Mediterraneo",
    category: "Remix",
    description:
      "Professionelles Renovationsunternehmen spezialisiert auf die Modernisierung von Häusern und Wohnungen. Hochwertige Handwerksarbeit mit innovativen Lösungen für Ihr Zuhause.",
    imageUrl: "/gourmet-food-wine-festival.png",
    icon: "server",
    projectUrl: "https://www.bouquetmediterraneo.ch", // En proceso - 80%
     technologies: ["Remix", "React", "Web3.js", "TailwindCSS"],
  
  },

    {
    id: 9,
    title: "Rrapi Immobilien",
    category: "HTML",
    description:
      "Immobilienagentur, spezialisiert auf exklusive Immobilien mit maßgeschneiderten Dienstleistungen für Käufer und Verkäufer.",
    imageUrl: "/apart.png",
    icon: "globe",
    projectUrl: "https://rrapi.ch",
    technologies: ["HTML", "CSS", "PHP", "JavaScript"],
  },
  

    {
    id: 10,
    title: "FoodScan AI",
   category: "Next.js",
    description:
      "Transform Your Fridge into Recipes!",
    imageUrl: "/2149255915.jpg",
    icon: "globe",
    projectUrl: "https://www.foodscan-ai.com",
    technologies: ["Next.js", "React", "TailwindCSS"],
  },

]

// Componente para renderizar el icono según el tipo de proyecto
const ProjectIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "globe":
      return <Globe className="h-5 w-5" />
    case "database":
      return <Database className="h-5 w-5" />
    case "server":
      return <Server className="h-5 w-5" />
    case "mobile":
      return <Smartphone className="h-5 w-5" />
    case "crypto":
      return <Bitcoin className="h-5 w-5" />
    default:
      return <Globe className="h-5 w-5" />
  }
}

export default function PortfolioMasonry() {
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null)
  const [filter, setFilter] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [columns, setColumns] = useState(3)
  const [isAnimating, setIsAnimating] = useState(false)
  const [projectsToShow, setProjectsToShow] = useState(4)
  const [isMobile, setIsMobile] = useState(false)
  const [progressModal, setProgressModal] = useState<{
    show: boolean
    project: PortfolioItem | null
    progress: number
  }>({
    show: false,
    project: null,
    progress: 0,
  })

  // Responsive columns and mobile detection
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const mobile = width < 1024 // lg breakpoint
      setIsMobile(mobile)

      if (width < 640) {
        setColumns(1)
      } else if (width < 1024) {
        setColumns(2)
      } else {
        setColumns(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Manejar cambio de filtro con animación
  const handleFilterChange = (newFilter: string) => {
    if (filter === newFilter) return

    setIsAnimating(true)
    if (isMobile) {
      setProjectsToShow(4) // Reset to show only 4 projects on mobile
    }
    setTimeout(() => {
      setFilter(newFilter)
      setTimeout(() => {
        setIsAnimating(false)
      }, 50)
    }, 300)
  }

  // Filtrar proyectos
  const allFilteredProjects = portfolioItems.filter((project) => {
    // Filtrar por categoría
    const categoryMatch = filter === "all" || project.category.toLowerCase().includes(filter.toLowerCase())

    // Filtrar por búsqueda
    const searchMatch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))

    return categoryMatch && searchMatch
  })

  // En pantallas grandes mostrar todos, en móviles solo los limitados
  const filteredProjects = isMobile ? allFilteredProjects.slice(0, projectsToShow) : allFilteredProjects

  // Distribuir proyectos en columnas equilibradas
  const distributeProjects = () => {
    const result: PortfolioItem[][] = Array.from({ length: columns }, () => [])

    // Distribuir proyectos para equilibrar las columnas
    filteredProjects.forEach((project, index) => {
      const columnIndex = index % columns
      result[columnIndex].push(project)
    })

    return result
  }

  const projectColumns = distributeProjects()

  // Obtener categorías únicas
  const categories = [
    "all",
    ...Array.from(new Set(portfolioItems.map((item) => item.category.split(" & ")[0].toLowerCase()))),
  ]

  // Manejar navegación en el modal
  const currentIndex = selectedProject ? portfolioItems.findIndex((p) => p.id === selectedProject.id) : -1

  const handlePrevProject = () => {
    if (currentIndex > 0) {
      setSelectedProject(portfolioItems[currentIndex - 1])
    }
  }

  const handleNextProject = () => {
    if (currentIndex < portfolioItems.length - 1) {
      setSelectedProject(portfolioItems[currentIndex + 1])
    }
  }

  // Manejar clic en proyecto para ir directamente a la web o mostrar progreso
  const handleProjectClick = (e: React.MouseEvent, project: PortfolioItem) => {
    e.stopPropagation()

    // Proyectos en desarrollo
    if (project.projectUrl === "#") {
      let progress = 50
      if (project.title === "LKS Renovatio") progress = 80

      setProgressModal({
        show: true,
        project: project,
        progress: progress,
      })
      return
    }

    window.open(project.projectUrl, "_blank", "noopener,noreferrer")
  }

  const handleShowMore = () => {
    setProjectsToShow((prev) => prev + 4)
  }

  return (
    <div className="w-full">
      {/* Encabezado */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
          Projekte <span className="text-purple-400">2025</span>
        </h1>
        <div className="mx-auto mt-3 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
          Eine Sammlung meiner neuesten Arbeiten und Projekte. Entdecken Sie meine kreativen Lösungen.
        </p>
      </div>

      {/* Filtros y búsqueda */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/30 scale-110"
                  : "bg-zinc-800/50 text-white/70 border border-zinc-700 hover:border-zinc-600 hover:scale-105"
              }`}
              onClick={() => handleFilterChange(category)}
            >
              {category === "all" ? "Alle" : category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid layout con imágenes de fondo */}
      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-500 ${
          isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
        }`}
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="relative overflow-hidden rounded-xl border border-zinc-700 cursor-pointer hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 h-[280px] group"
            onClick={(e) => handleProjectClick(e, project)}
          >
            {/* Imagen de fondo */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/40 backdrop-blur-[2px]"></div>
            </div>

            {/* Contenido */}
            <div className="relative z-10 flex flex-col h-full p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/30 backdrop-blur-sm">
                  <ProjectIcon type={project.icon} />
                </span>
                <span className="text-sm font-medium text-white/90">{project.category}</span>
              </div>

              <h3 className="text-xl font-bold text-white mt-10">{project.title}</h3>

              <div className="mt-auto">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex rounded-full bg-purple-500/20 border border-purple-500/30 backdrop-blur-sm px-2.5 py-0.5 text-xs text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="inline-flex rounded-full bg-zinc-800/70 backdrop-blur-sm px-2.5 py-0.5 text-xs text-white/70">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex justify-end">
                  <button
                    className="flex items-center gap-1 text-sm font-medium text-purple-300 transition-colors hover:text-purple-200 group-hover:underline"
                    onClick={(e) => handleProjectClick(e, project)}
                  >
                    Web besuchen
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botón Ver más - Solo en móviles */}
      {isMobile && projectsToShow < allFilteredProjects.length && !isAnimating && (
        <div className="mt-12 text-center">
          <button
            onClick={handleShowMore}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105"
          >
            Mehr anzeigen
            <ArrowUpRight className="h-4 w-4" />
          </button>
          <p className="mt-3 text-sm text-white/60">
            {allFilteredProjects.length - projectsToShow} weitere Projekte verfügbar
          </p>
        </div>
      )}

      {/* Mensaje si no hay resultados */}
      {allFilteredProjects.length === 0 && !isAnimating && (
        <div className="mt-12 text-center">
          <p className="text-lg text-white/70">Keine Projekte gefunden. Versuchen Sie es mit anderen Suchkriterien.</p>
        </div>
      )}

      {/* Modal de detalle - Mantenido por si se quiere volver a usar en el futuro */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-2xl bg-zinc-900 border border-zinc-700 shadow-2xl shadow-purple-500/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Imagen de fondo en el modal */}
            <div className="relative h-64 w-full overflow-hidden">
              <img
                src={selectedProject.imageUrl || "/placeholder.svg"}
                alt={selectedProject.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-zinc-900/20"></div>

              {/* Botón cerrar */}
              <button
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-black/40"
                onClick={() => setSelectedProject(null)}
              >
                <X className="h-5 w-5" />
              </button>

              {/* Navegación */}
              <div className="absolute left-4 top-1/2 z-10 -translate-y-1/2">
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-black/40 disabled:opacity-50"
                  onClick={handlePrevProject}
                  disabled={currentIndex <= 0}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
              </div>
              <div className="absolute right-4 top-1/2 z-10 -translate-y-1/2">
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-black/40 disabled:opacity-50"
                  onClick={handleNextProject}
                  disabled={currentIndex >= portfolioItems.length - 1}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Contenido del modal */}
            <div className="relative -mt-16 rounded-t-3xl bg-zinc-900 p-6">
              <div className="flex flex-col items-start text-left">
                {/* Categoría */}
                <div className="flex items-center gap-2 mb-1">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20">
                    <ProjectIcon type={selectedProject.icon} />
                  </span>
                  <span className="text-sm font-medium text-white/80">{selectedProject.category}</span>
                </div>

                {/* Título */}
                <h2 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h2>

                {/* Tecnologías en columna */}
                <div className="flex flex-col gap-1 mb-6">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="text-sm text-purple-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 w-full">
                  <h3 className="mb-2 text-xl font-semibold text-white">Beschreibung</h3>
                  <p className="text-white/80">{selectedProject.description}</p>
                </div>

                <div className="mt-8">
                  <a
                    href={selectedProject.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105"
                  >
                    Web besuchen
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de progreso */}
      {progressModal.show && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setProgressModal({ show: false, project: null, progress: 0 })}
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-zinc-900 border border-zinc-700 shadow-2xl shadow-purple-500/10 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-white transition-colors hover:bg-zinc-700"
              onClick={() => setProgressModal({ show: false, project: null, progress: 0 })}
            >
              <X className="h-4 w-4" />
            </button>

            {/* Contenido del modal */}
            <div className="text-center">
              <div className="mb-4">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-purple-500/20">
                  <ProjectIcon type={progressModal.project?.icon || "globe"} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{progressModal.project?.title}</h3>
                <p className="text-sm text-white/70 mb-6">Projekt in Entwicklung</p>
              </div>

              {/* Barra de progreso */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-white/80">Fortschritt</span>
                  <span className="text-sm font-medium text-purple-300">{progressModal.progress}%</span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${progressModal.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-white/80 text-sm mb-4">
                  Dieses Projekt befindet sich derzeit in der Entwicklungsphase. Wir arbeiten hart daran, es bald
                  fertigzustellen.
                </p>
                <div className="flex items-center justify-center gap-2 text-xs text-white/60">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span>In Bearbeitung...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
