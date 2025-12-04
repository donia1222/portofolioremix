"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  Globe,
  Smartphone,
  ArrowUpRight,
  X,
  Sparkles,
  Layout,
  AppWindow,
  ExternalLink,
  ChevronDown
} from "lucide-react"
import { useLanguage } from "~/context/LanguageContext"

// Tipos
interface PortfolioItem {
  id: number
  title: string
  category: "app" | "web"
  framework: string
  description: string
  imageUrl: string
  projectUrl: string
  technologies: string[]
  featured?: boolean
  size?: "small" | "medium" | "large"
}

// Datos de proyectos clasificados
const portfolioItems: PortfolioItem[] = [
  // APPS
  {
    id: 1,
    title: "BuyVoice",
    category: "app",
    framework: "Remix",
    description: "Sprich einfach – und die Liste erstellt sich von selbst. KI-gestützte Einkaufsliste.",
    imageUrl: "/app-icon.png",
    projectUrl: "https://www.buyvoice.app",
    technologies: ["Remix", "React", "TailwindCSS", "AI"],
    featured: true,
    size: "large"
  },
  {
    id: 2,
    title: "Hundezonen",
    category: "app",
    framework: "Next.js",
    description: "Die App für dich und deinen Hund. Finde Hundezonen in deiner Nähe.",
    imageUrl: "/hiundezonne.png",
    projectUrl: "https://www.hundezonen.ch",
    technologies: ["Next.js", "React", "Maps API"],
    featured: true,
    size: "medium"
  },
  {
    id: 3,
    title: "Vix Time",
    category: "app",
    framework: "Next.js",
    description: "Intelligente Zeiterfassung für Teams und Freelancer.",
    imageUrl: "/calendar.webp",
    projectUrl: "https://www.vixtime.com",
    technologies: ["Next.js", "React", "TailwindCSS"],
    size: "medium"
  },
  {
    id: 4,
    title: "FoodScan AI",
    category: "app",
    framework: "Next.js",
    description: "Transform Your Fridge into Recipes! KI-gestützte Rezeptvorschläge.",
    imageUrl: "/2149255915.jpg",
    projectUrl: "https://www.foodscan-ai.com",
    technologies: ["Next.js", "OpenAI", "React"],
    featured: true,
    size: "large"
  },
  {
    id: 5,
    title: "Rezeptsammlung",
    category: "app",
    framework: "React",
    description: "Scannen oder fotografieren Sie Ihre Rezepte, um sie zu digitalisieren.",
    imageUrl: "/bueli.png",
    projectUrl: "https://recipe-digitizer.vercel.app",
    technologies: ["React", "OCR", "TailwindCSS"],
    size: "small"
  },
  // WEBS
  {
    id: 6,
    title: "HOT & BBQ",
    category: "web",
    framework: "Next.js",
    description: "Die exklusivste Premium-Kollektion von Hot & BBQ Saucen und Gewürzen.",
    imageUrl: "/ff.jpg",
    projectUrl: "https://www.hot-bbq.ch",
    technologies: ["Next.js", "E-Commerce"],
    featured: true,
    size: "large"
  },
  {
    id: 7,
    title: "BeautyStyle",
    category: "web",
    framework: "Remix",
    description: "Moderner Friseursalon mit personalisierten Schönheitsdienstleistungen.",
    imageUrl: "/woman-getting-her-hair-cut-beauty-salon_23-2149167399.jpg",
    projectUrl: "https://beautystyles.vercel.app",
    technologies: ["Remix", "Framer Motion"],
    size: "medium"
  },
  {
    id: 8,
    title: "Crypto Dashboard",
    category: "web",
    framework: "Remix",
    description: "Echtzeit-Preisdaten, Portfolio-Tracking und Marktanalysen.",
    imageUrl: "/crypto-abstract-bg.png",
    projectUrl: "https://remix-crypto.vercel.app",
    technologies: ["Remix", "Web3", "API"],
    featured: true,
    size: "medium"
  },
  {
    id: 9,
    title: "WebM Converter",
    category: "web",
    framework: "Next.js",
    description: "Convert your videos to WebM format for better web performance.",
    imageUrl: "/20945639.jpg",
    projectUrl: "https://web-m-video-converter.vercel.app",
    technologies: ["Next.js", "FFmpeg"],
    size: "small"
  },
  {
    id: 10,
    title: "Ushuaia Bar",
    category: "web",
    framework: "Next.js",
    description: "Premium Cocktail, Hookah & Terrace. Luxuriöse Bar-Lounge in Buchs.",
    imageUrl: "/abstract-smoke.png",
    projectUrl: "https://www.ushuaia-bar.ch",
    technologies: ["Next.js", "React"],
    featured: true,
    size: "large"
  },
  {
    id: 11,
    title: "Cantina Tex-Mex",
    category: "web",
    framework: "Remix",
    description: "Restaurant mit Pub-Atmosphäre. Essen kombiniert mit Unterhaltung.",
    imageUrl: "/IMG_2733.jpeg",
    projectUrl: "https://www.cantinatexmex.ch",
    technologies: ["Remix", "React"],
    size: "medium"
  },
  {
    id: 12,
    title: "Flinck Sauber",
    category: "web",
    framework: "Next.js",
    description: "Professionelles Reinigungsunternehmen aus Liechtenstein.",
    imageUrl: "/IMG_2735.jpeg",
    projectUrl: "https://flink-sauber.li",
    technologies: ["Next.js", "React"],
    size: "small"
  },
  {
    id: 13,
    title: "Renovation",
    category: "web",
    framework: "Next.js",
    description: "Professionelles Renovationsunternehmen für moderne Wohnräume.",
    imageUrl: "/interior-design-with-photoframes-blue-couch.jpg",
    projectUrl: "https://renovation-tau.vercel.app",
    technologies: ["Next.js", "React"],
    size: "small"
  },
  {
    id: 14,
    title: "Bouquet Mediterraneo",
    category: "web",
    framework: "Remix",
    description: "Mediterrane Küche und erlesene Weine in stilvollem Ambiente.",
    imageUrl: "/gourmet-food-wine-festival.png",
    projectUrl: "https://www.bouquetmediterraneo.ch",
    technologies: ["Remix", "React"],
    size: "medium"
  },
  {
    id: 15,
    title: "Rrapi Immobilien",
    category: "web",
    framework: "HTML",
    description: "Immobilienagentur spezialisiert auf exklusive Immobilien.",
    imageUrl: "/apart.png",
    projectUrl: "https://rrapi.ch",
    technologies: ["HTML", "CSS", "PHP"],
    size: "small"
  },
]

// Categorías con iconos (Webs primero, Apps segundo, Todos tercero)
const getCategoryLabel = (id: string, t: (key: string) => string) => {
  switch (id) {
    case "web": return t("websites")
    case "app": return t("apps")
    case "all": return t("allProjects")
    default: return id
  }
}

const categories = [
  { id: "web", icon: Globe },
  { id: "app", icon: Smartphone },
  { id: "all", icon: Layout },
]

export default function PortfolioGrid() {
  const { t } = useLanguage()
  const [activeCategory, setActiveCategory] = useState<string>("web")
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const [showAll, setShowAll] = useState(false)
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const INITIAL_ITEMS = 6

  // Filtrar proyectos
  const filteredProjects = portfolioItems.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  )

  // Proyectos a mostrar
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, INITIAL_ITEMS)

  // Cambiar categoría con animación
  const handleCategoryChange = (categoryId: string) => {
    if (activeCategory === categoryId) return
    setIsAnimating(true)
    setShowAll(false)
    setTimeout(() => {
      setActiveCategory(categoryId)
      setTimeout(() => setIsAnimating(false), 50)
    }, 200)
  }

  // Obtener tamaño de grid para cada item
  const getGridClass = (project: PortfolioItem, index: number) => {
    if (project.featured && project.size === "large") {
      return "md:col-span-2 md:row-span-2"
    }
    if (project.size === "medium") {
      return "md:col-span-1 md:row-span-2"
    }
    return "md:col-span-1 md:row-span-1"
  }

  // Abrir proyecto
  const handleProjectClick = (project: PortfolioItem) => {
    window.open(project.projectUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-500/20 mb-6">
          <Sparkles className="w-4 h-4 text-violet-400" />
          <span className="text-sm font-medium text-violet-300">Portfolio 2025</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
          {t("portfolioTitle")}
          <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
            {t("portfolioTitleHighlight")}
          </span>
        </h1>

        <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          {t("portfolioSubtitle")}
        </p>
      </div>

      {/* Category Tabs - Glassmorphism Style */}
      <div className="flex justify-center mb-12 px-2">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-0 sm:inline-flex p-1.5 sm:p-1.5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl">
          {categories.map((category) => {
            const Icon = category.icon
            const isActive = activeCategory === category.id
            const count = category.id === "all"
              ? portfolioItems.length
              : portfolioItems.filter(p => p.category === category.id).length

            return (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`
                  relative flex items-center justify-center gap-2
                  px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl font-medium text-sm
                  transition-all duration-300 ease-out
                  min-w-[100px] sm:min-w-0
                  ${isActive
                    ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/25"
                    : "text-zinc-400 hover:text-white hover:bg-white/10"
                  }
                `}
              >
                <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-white" : ""}`} />
                <span className="whitespace-nowrap">{getCategoryLabel(category.id, t)}</span>
                <span className={`
                  ml-1 px-2 py-0.5 rounded-full text-xs font-semibold flex-shrink-0
                  ${isActive
                    ? "bg-white/20 text-white"
                    : "bg-zinc-800 text-zinc-500"
                  }
                `}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="flex justify-center gap-8 mb-12">
        <div className="text-center">
          <div className="text-3xl font-bold text-white">{portfolioItems.filter(p => p.category === "app").length}</div>
          <div className="text-sm text-zinc-500">{t("apps")}</div>
        </div>
        <div className="w-px h-12 bg-zinc-800" />
        <div className="text-center">
          <div className="text-3xl font-bold text-white">{portfolioItems.filter(p => p.category === "web").length}</div>
          <div className="text-sm text-zinc-500">{t("websites")}</div>
        </div>
        <div className="w-px h-12 bg-zinc-800" />
        <div className="text-center">
          <div className="text-3xl font-bold text-white">{portfolioItems.length}</div>
          <div className="text-sm text-zinc-500">Total</div>
        </div>
      </div>

      {/* Bento Grid */}
      <div
        ref={containerRef}
        className={`
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-[200px]
          transition-opacity duration-300
          ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}
        `}
      >
        {displayedProjects.map((project, index) => (
          <div
            key={project.id}
            className={`
              group relative overflow-hidden rounded-2xl cursor-pointer
              border border-white/10 hover:border-violet-500/50
              bg-zinc-900/50 backdrop-blur-sm
              shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-violet-500/10
              ${getGridClass(project, index)}
              transition-all duration-500 ease-out
            `}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => handleProjectClick(project)}
            style={{
              animationDelay: `${index * 50}ms`
            }}
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={project.imageUrl || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-fuchsia-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>

            {/* Glassmorphism Card Content */}
            <div className="absolute inset-0 p-5 flex flex-col justify-between">
              {/* Top Section */}
              <div className="flex items-start justify-between">
                {/* Category Badge */}
                <div className="flex items-center gap-2">
                  <div className={`
                    flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide
                    backdrop-blur-xl border-2 transition-all duration-300 shadow-lg
                    ${project.category === "app"
                      ? "bg-emerald-500/30 border-emerald-400/50 text-emerald-200 shadow-emerald-500/20"
                      : "bg-sky-500/30 border-sky-400/50 text-sky-200 shadow-sky-500/20"
                    }
                  `}>
                    {project.category === "app" ? (
                      <AppWindow className="w-3.5 h-3.5" />
                    ) : (
                      <Globe className="w-3.5 h-3.5" />
                    )}
                    <span>{project.category === "app" ? "App" : "Web"}</span>
                  </div>

                  {project.featured && (
                    <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/30 border-2 border-amber-400/50 backdrop-blur-xl shadow-lg shadow-amber-500/20">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span className="text-[10px] font-bold text-amber-200 uppercase tracking-wide">Featured</span>
                    </div>
                  )}
                </div>

                {/* External Link Icon */}
                <div className={`
                  p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10
                  transform transition-all duration-300
                  ${hoveredId === project.id ? "translate-x-0 opacity-100 scale-100" : "translate-x-2 opacity-0 scale-90"}
                `}>
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Bottom Section */}
              <div className="space-y-3">
                {/* Framework Tag */}
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono text-zinc-400 bg-black/30 backdrop-blur-sm border border-zinc-700/50">
                  {project.framework}
                </span>

                {/* Title */}
                <h3 className={`
                  font-bold text-white leading-tight transition-all duration-300
                  ${project.size === "large" ? "text-2xl md:text-3xl" : project.size === "medium" ? "text-xl md:text-2xl" : "text-lg"}
                `}>
                  {project.title}
                </h3>

                {/* Description - Shows on hover for large cards */}
                <p className={`
                  text-sm text-zinc-300 leading-relaxed
                  transition-all duration-300 ease-out
                  ${project.size === "large" || project.size === "medium"
                    ? "opacity-100"
                    : hoveredId === project.id ? "opacity-100" : "opacity-0 translate-y-2"
                  }
                  line-clamp-2
                `}>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className={`
                  flex flex-wrap gap-2 transition-all duration-300
                  ${hoveredId === project.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                `}>
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white/15 backdrop-blur-xl text-white border border-white/20 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button - Visible on hover */}
                <div className={`
                  flex items-center gap-2 pt-2
                  transition-all duration-300 ease-out
                  ${hoveredId === project.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
                `}>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-zinc-200 transition-colors">
                    <span>{t("viewProject")}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Show More Button */}
      {!showAll && filteredProjects.length > INITIAL_ITEMS && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(true)}
            className="group relative flex items-center gap-3 px-8 py-4 rounded-full overflow-hidden"
          >
            {/* Button Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-10 group-hover:opacity-20 transition-opacity" />
            <div className="absolute inset-0 border border-violet-500/30 rounded-full group-hover:border-violet-500/50 transition-colors" />

            {/* Content */}
            <ChevronDown className="w-5 h-5 text-violet-400 group-hover:translate-y-0.5 transition-transform" />
            <span className="text-white font-medium">
              {t("loadMore")}
            </span>
            <span className="px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 text-sm font-semibold">
              +{filteredProjects.length - INITIAL_ITEMS}
            </span>
          </button>
        </div>
      )}

      {/* Empty State */}
      {filteredProjects.length === 0 && !isAnimating && (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-800/50 mb-4">
            <Layout className="w-8 h-8 text-zinc-500" />
          </div>
          <p className="text-lg text-zinc-400">Keine Projekte in dieser Kategorie gefunden.</p>
        </div>
      )}

      {/* Decorative Elements */}
      <div className="fixed top-1/4 -left-32 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 -right-32 w-64 h-64 bg-fuchsia-600/20 rounded-full blur-3xl pointer-events-none" />
    </div>
  )
}
