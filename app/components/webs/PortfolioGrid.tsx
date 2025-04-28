"use client"

import { useState } from "react"
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
    id: 1,
    title: "Ushuaia&Cantina",
    category: "React & PHP",
    description:
      "Ein Restaurant mit einer Pub-Atmosphäre, das ein einzigartiges gastronomisches Erlebnis bietet und Essen mit Unterhaltung kombiniert.",
    imageUrl: "/IMG_2733.jpeg",
    icon: "globe",
    projectUrl: "https://www.cantinatexmex.ch",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
  },
  {
    id: 2,
    title: "Bouquet Mediterraneo",
    category: "E-Commerce & SEO",
    description:
      "Italienisches Restaurant, das authentische mediterrane Aromen mit frischen Zutaten und traditionellen Rezepten bietet.",
    imageUrl: "/IMG_2734.jpeg",
    icon: "globe",
    projectUrl: "https://www.bouquetmediterraneo.ch",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
  },
  {
    id: 3,
    title: "Sharazan",
    category: "Joomla",
    description:
      "International anerkannte spanische Musikgruppe, bekannt für ihren einzigartigen Stil und unvergessliche Auftritte.",
    imageUrl: "/IMG_2736.jpeg",
    icon: "database",
    projectUrl: "https://es.sharazan.es",
    technologies: ["Joomla", "MySQL", "REST API"],
  },
  {
    id: 4,
    title: "Flinck Sauber",
    category: "Joomla",
    description:
      "Professionelles Reinigungsunternehmen aus Liechtenstein, spezialisiert auf Lösungen für Privathaushalte und Unternehmen.",
    imageUrl: "/IMG_2735.jpeg",
    icon: "server",
    projectUrl: "https://flink-sauber.li",
    technologies: ["Joomla", "PHP"],
  },
  {
    id: 5,
    title: "Rrapi Immobilien",
    category: "React Native",
    description:
      "Immobilienagentur, spezialisiert auf exklusive Immobilien mit maßgeschneiderten Dienstleistungen für Käufer und Verkäufer.",
    imageUrl: "/IMG_2738.jpeg",
    icon: "mobile",
    projectUrl: "https://rrapi.ch",
    technologies: ["React Native", "Firebase", "PHP"],
  },
  {
    id: 6,
    title: "Crypto",
    category: "Remix & Web3",
    description:
      "Eine moderne Kryptowährungs-Dashboard-Anwendung mit Echtzeit-Preisdaten, Portfolio-Tracking und Marktanalysen.",
    imageUrl: "/crypto-dashboard.jpeg",
    icon: "crypto",
    projectUrl: "https://remix-crypto.vercel.app",
    technologies: ["Remix", "React", "Web3.js", "TailwindCSS"],
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

  return (
    <div className="w-full ">
      {/* Encabezado */}
      <div className="mb-12 text-center ">
        <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl ">
          Meine Projekte <span className="text-purple-400">2025</span>
        </h1>
        <div className="mx-auto mt-3 h-1 w-24 bg-gradient-to-r from-purple-500 to-pink-500"></div>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
          Eine Sammlung meiner neuesten Arbeiten und Projekte. Entdecken Sie meine kreativen Lösungen.
        </p>
      </div>

      {/* Filtros y búsqueda */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${
                filter === category
                  ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                  : "bg-zinc-800/50 text-white/70 border border-zinc-700 hover:border-zinc-600"
              }`}
              onClick={() => setFilter(category)}
            >
              {category === "all" ? "Alle" : category}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry layout */}
      <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="mb-6 break-inside-avoid overflow-hidden rounded-xl bg-gradient-to-br from-zinc-800 to-zinc-900 border border-zinc-700 p-5 cursor-pointer hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            onClick={() => setSelectedProject(project)}
          >
            {/* Cabecera con imagen tipo avatar */}
            <div className="flex items-center gap-4 mb-4">
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border-2 border-purple-500/30">
                <img
                  src={project.imageUrl || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{project.title}</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500/20">
                    <ProjectIcon type={project.icon} />
                  </span>
                  <span className="text-sm font-medium text-white/80">{project.category}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 3).map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex rounded-full bg-purple-500/10 border border-purple-500/20 px-2.5 py-0.5 text-xs text-purple-300"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="inline-flex rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs text-white/70">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>

            <p className="mt-3 text-sm text-white/60 line-clamp-2">{project.description}</p>

            <div className="mt-4 flex justify-end">
              <button className="flex items-center gap-1 text-sm font-medium text-purple-400 transition-colors hover:text-purple-300">
              Siehe Details
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mensaje si no hay resultados */}
      {filteredProjects.length === 0 && (
        <div className="mt-12 text-center">
          <p className="text-lg text-white/70">Keine Projekte gefunden. Versuchen Sie es mit anderen Suchkriterien.</p>
        </div>
      )}

      {/* Modal de detalle */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-2xl bg-zinc-900 border border-zinc-700 shadow-2xl shadow-purple-500/10"
            onClick={(e) => e.stopPropagation()}
          >
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

            {/* Imagen de cabecera */}
            <div className="relative p-6 pt-12 flex flex-col sm:flex-row items-center gap-6">
              <div className="relative h-32 w-32 flex-shrink-0 overflow-hidden rounded-full border-4 border-purple-500/30">
                <img
                  src={selectedProject.imageUrl || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col sm:flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20">
                    <ProjectIcon type={selectedProject.icon} />
                  </span>
                  <span className="text-sm font-medium text-white/80">{selectedProject.category}</span>
                </div>
                <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-flex rounded-full bg-purple-500/10 border border-purple-500/20 px-3 py-1 text-sm text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contenido */}
            <div className="p-6 text-white">
              <div className="mb-6">
                <h3 className="mb-2 text-xl font-semibold">Beschreibung</h3>
                <p className="text-white/80">{selectedProject.description}</p>
              </div>

              <a
                href={selectedProject.projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105"
              >
                Projekt besuchen
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
