"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
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
    id: 10,
    title: "FoodScan App",
   category: "Next.js",
    description:
      "Transform Your Fridge into Recipes!",
    imageUrl: "/2149255915.jpg",
    icon: "globe",
    projectUrl: "https://www.foodscan-ai.com",
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
    technologies: ["Remix", "React", "TailwindCSS"],
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
    technologies: ["Next.js", "React", "TailwindCSS"],
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
    id: 14,
    title: "Digitale Rezeptsammlung",
    category: "React",
    description:
      "Scannen oder fotografieren Sie Ihre Rezepte, um sie zu digitalisieren.",
    imageUrl: "/bueli.png",
    icon: "globe",
    projectUrl: "https://recipe-digitizer.vercel.app",
     technologies: ["React", "Web3.js", "TailwindCSS"],
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
  const [isAnimating, setIsAnimating] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [cardWidth, setCardWidth] = useState(380)
  const [activeIndex, setActiveIndex] = useState(0)
  const [progressModal, setProgressModal] = useState<{
    show: boolean
    project: PortfolioItem | null
    progress: number
  }>({
    show: false,
    project: null,
    progress: 0,
  })

  // Set card width based on screen size
  useEffect(() => {
    const updateCardWidth = () => {
      if (window.innerWidth < 768) {
        // On mobile, make cards almost full width minus padding
        setCardWidth(window.innerWidth - 48) // 24px padding on each side
      } else {
        // Desktop size
        setCardWidth(380)
      }
    }

    updateCardWidth()
    window.addEventListener('resize', updateCardWidth)
    return () => window.removeEventListener('resize', updateCardWidth)
  }, [])


  // Manejar cambio de filtro con animación
  const handleFilterChange = (newFilter: string) => {
    if (filter === newFilter) return

    setIsAnimating(true)
    setTimeout(() => {
      setFilter(newFilter)
      // Reset scroll position when filter changes
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft = 0
      }
      setTimeout(() => {
        setIsAnimating(false)
        checkScrollButtons()
      }, 50)
    }, 300)
  }

  // Filtrar proyectos
  const filteredProjects = portfolioItems.filter((project) => {
    // Filtrar por categoría
    const categoryMatch = filter === "all" || project.category.toLowerCase().includes(filter.toLowerCase())

    // Filtrar por búsqueda
    const searchMatch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()))

    return categoryMatch && searchMatch
  })

  // Check scroll button states
  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 10)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  // Scroll handlers
  const scrollToDirection = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return

    const scrollAmount = cardWidth + 24 // Width of one card plus gap
    const currentScroll = scrollContainerRef.current.scrollLeft
    const newScroll = direction === 'left'
      ? Math.max(0, currentScroll - scrollAmount)
      : currentScroll + scrollAmount

    scrollContainerRef.current.scrollTo({
      left: newScroll,
      behavior: 'smooth'
    })
  }

  // Monitor scroll position and update dots
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      checkScrollButtons()

      // Update active dot based on scroll position
      const scrollLeft = container.scrollLeft
      const cardWidthWithGap = cardWidth + 24
      const newIndex = Math.round(scrollLeft / cardWidthWithGap)
      setActiveIndex(Math.min(Math.max(0, newIndex), filteredProjects.length - 1))
    }

    container.addEventListener('scroll', handleScroll)
    checkScrollButtons() // Initial check

    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [filteredProjects, cardWidth])

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

      {/* Horizontal scroll container with navigation buttons */}
      <div className="relative">
        {/* Left scroll button - hidden on mobile */}
        <button
          className={`hidden md:flex group absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-purple-600/80 backdrop-blur-sm text-white transition-all duration-300 items-center justify-center ${
            canScrollLeft
              ? 'opacity-100 hover:bg-purple-600 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/40'
              : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => scrollToDirection('left')}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:scale-110" />
        </button>

        {/* Right scroll button - hidden on mobile */}
        <button
          className={`hidden md:flex group absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-purple-600/80 backdrop-blur-sm text-white transition-all duration-300 items-center justify-center ${
            canScrollRight
              ? 'opacity-100 hover:bg-purple-600 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/40'
              : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => scrollToDirection('right')}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:scale-110" />
        </button>

        {/* Scrollable container */}
        <div
          ref={scrollContainerRef}
          className={`flex gap-6 overflow-x-auto scroll-smooth pb-4 transition-all duration-500 ${
            isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          } scrollbar-hide snap-x snap-mandatory`}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          <style>{`
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 border border-zinc-800/50 cursor-pointer hover:border-purple-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/30 flex-shrink-0 group hover:scale-[1.02] hover:-translate-y-1 snap-center"
              style={{
                width: `${cardWidth}px`,
                height: '480px'
              }}
              onClick={(e) => handleProjectClick(e, project)}
            >
              {/* Image section - top */}
              <div className="relative h-[220px] w-full overflow-hidden bg-gradient-to-br from-purple-900/20 to-pink-900/20">
                <img
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"></div>

                {/* Category badge floating */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-lg rounded-full px-3 py-1.5 border border-white/10 shadow-xl">
                  <span className="flex h-4 w-4 items-center justify-center text-purple-400">
                    <ProjectIcon type={project.icon} />
                  </span>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">{project.category.split(' ')[0]}</span>
                </div>

                {/* Live status */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-green-500/20 backdrop-blur-lg rounded-full px-3 py-1.5 border border-green-400/30">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                  <span className="text-xs text-green-400 font-bold">LIVE</span>
                </div>
              </div>

              {/* Content section - bottom */}
              <div className="relative flex flex-col h-[260px] p-6 bg-gradient-to-b from-zinc-900/50 to-zinc-950">
                {/* Title with gradient effect */}
                <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-300 mb-3 group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-500">
                  {project.title}
                </h3>

                {/* Description with better styling */}
                <p className="text-sm text-gray-400 line-clamp-3 mb-5 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Modern technology pills */}
                <div className="flex flex-wrap gap-2 mb-auto">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/30 px-3 py-1 text-xs font-semibold text-purple-300 group-hover:from-purple-500/20 group-hover:to-pink-500/20 group-hover:border-purple-400/40 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="inline-flex items-center rounded-lg bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/50 px-3 py-1 text-xs font-semibold text-zinc-400">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Modern action button */}
                <button
                  className="group/btn w-full mt-4 relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 px-4 py-3 font-bold text-sm text-white shadow-lg transition-all duration-300 hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-[0.98]"
                  onClick={(e) => handleProjectClick(e, project)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative flex items-center justify-center gap-2">
                    Projekt erkunden
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {filteredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (scrollContainerRef.current) {
                  const scrollTo = index * (cardWidth + 24)
                  scrollContainerRef.current.scrollTo({
                    left: scrollTo,
                    behavior: 'smooth'
                  })
                }
              }}
              className={`transition-all duration-300 rounded-full ${
                index === activeIndex
                  ? 'w-8 h-2 bg-purple-500'
                  : 'w-2 h-2 bg-zinc-600 hover:bg-zinc-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Mensaje si no hay resultados */}
      {filteredProjects.length === 0 && !isAnimating && (
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