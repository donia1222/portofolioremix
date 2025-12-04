"use client"

import { useEffect, useRef, useState } from "react"
import {
  Smartphone,
  Brain,
  Globe,
  Sparkles,
  Code2,
  Shield,
  Zap
} from "lucide-react"
import { useLanguage } from "~/context/LanguageContext"

const principles = [
  {
    icon: Smartphone,
    titleKey: "appDev",
    descKey: "appDevDesc",
    color: "violet",
  },
  {
    icon: Brain,
    titleKey: "aiTitle",
    descKey: "aiDesc",
    color: "emerald",
  },
  {
    icon: Globe,
    titleKey: "webTitle",
    descKey: "webDesc",
    color: "sky",
  },
  {
    icon: Sparkles,
    titleKey: "innovation",
    descKey: "innovationDesc",
    color: "amber",
  },
  {
    icon: Code2,
    titleKey: "cleanCode",
    descKey: "cleanCodeDesc",
    color: "rose",
  },
  {
    icon: Shield,
    titleKey: "security",
    descKey: "securityDesc",
    color: "cyan",
  },
]

const colorClasses: Record<string, { bg: string; border: string; text: string; glow: string; shimmer: string }> = {
  violet: {
    bg: "bg-violet-500/10",
    border: "border-violet-500/30 group-hover:border-violet-400/60",
    text: "text-violet-400",
    glow: "group-hover:shadow-violet-500/20",
    shimmer: "via-violet-400/20",
  },
  emerald: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30 group-hover:border-emerald-400/60",
    text: "text-emerald-400",
    glow: "group-hover:shadow-emerald-500/20",
    shimmer: "via-emerald-400/20",
  },
  sky: {
    bg: "bg-sky-500/10",
    border: "border-sky-500/30 group-hover:border-sky-400/60",
    text: "text-sky-400",
    glow: "group-hover:shadow-sky-500/20",
    shimmer: "via-sky-400/20",
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/30 group-hover:border-amber-400/60",
    text: "text-amber-400",
    glow: "group-hover:shadow-amber-500/20",
    shimmer: "via-amber-400/20",
  },
  rose: {
    bg: "bg-rose-500/10",
    border: "border-rose-500/30 group-hover:border-rose-400/60",
    text: "text-rose-400",
    glow: "group-hover:shadow-rose-500/20",
    shimmer: "via-rose-400/20",
  },
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30 group-hover:border-cyan-400/60",
    text: "text-cyan-400",
    glow: "group-hover:shadow-cyan-500/20",
    shimmer: "via-cyan-400/20",
  },
}

export default function CorePrinciplesBlock() {
  const { t } = useLanguage()
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    cardsRef.current.forEach((card, index) => {
      if (!card) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Delay escalonado: cada card aparece 150ms después de la anterior
              setTimeout(() => {
                setVisibleCards((prev) =>
                  prev.includes(index) ? prev : [...prev, index]
                )
              }, index * 150)
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0.2 }
      )

      observer.observe(card)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section className="relative py-24 overflow-hidden bg-zinc-950">
      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(100%) rotate(45deg); }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.05); }
        }

        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 8s ease-in-out infinite;
          animation-delay: -2s;
        }

        .group:hover .shimmer-effect {
          animation: shimmer 0.8s ease-in-out;
        }

        .icon-pulse {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-fuchsia-600/5 rounded-full blur-3xl animate-float-delayed" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <Zap className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-zinc-400">Was ich biete</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("coreTitle")}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"> {t("coreTitleHighlight")}</span>
          </h2>

          <p className="text-zinc-500 max-w-xl mx-auto">
            {t("coreSubtitle")}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {principles.map((principle, index) => {
            const colors = colorClasses[principle.color]
            const Icon = principle.icon

            return (
              <div
                key={index}
                ref={(el) => { cardsRef.current[index] = el }}
                className={`
                  group relative p-6 rounded-2xl cursor-pointer overflow-hidden
                  bg-zinc-900/50 backdrop-blur-sm
                  border ${colors.border}
                  transition-all duration-700 ease-out
                  hover:bg-zinc-900/80
                  hover:shadow-2xl ${colors.glow}
                  hover:-translate-y-2 hover:scale-[1.02]
                  ${visibleCards.includes(index)
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-12'
                  }
                `}
              >
                {/* Shimmer effect on hover */}
                <div className={`
                  shimmer-effect absolute inset-0
                  bg-gradient-to-r from-transparent ${colors.shimmer} to-transparent
                  opacity-0 group-hover:opacity-100
                  -translate-x-full
                `} />

                {/* Glow effect */}
                <div className={`
                  absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                  bg-gradient-to-br from-white/5 to-transparent
                  transition-opacity duration-500
                `} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`
                    inline-flex items-center justify-center
                    w-14 h-14 rounded-xl mb-5
                    ${colors.bg} border ${colors.border}
                    transition-all duration-500
                    group-hover:scale-110 group-hover:rotate-3
                  `}>
                    <Icon className={`w-7 h-7 ${colors.text} transition-transform duration-300 group-hover:scale-110`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 transition-all duration-300 group-hover:translate-x-1">
                    {t(principle.titleKey as any)}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-400 text-sm leading-relaxed transition-all duration-300 group-hover:text-zinc-300">
                    {t(principle.descKey as any)}
                  </p>
                </div>

                {/* Corner decoration - animated */}
                <div className={`
                  absolute top-4 right-4 w-2 h-2 rounded-full
                  ${colors.bg} ${colors.text}
                  transition-all duration-300
                  group-hover:scale-150 group-hover:opacity-100
                  opacity-50
                `} />

                {/* Floating particles on hover */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className={`
                        absolute w-1 h-1 rounded-full ${colors.bg}
                        opacity-0 group-hover:opacity-60
                        transition-all duration-1000
                      `}
                      style={{
                        left: `${20 + i * 30}%`,
                        bottom: '10%',
                        transitionDelay: `${i * 100}ms`,
                        transform: `translateY(${i % 2 === 0 ? '0' : '20px'})`,
                      }}
                    />
                  ))}
                </div>

                {/* Number badge */}
                <div className="absolute bottom-4 right-4 text-zinc-800 font-bold text-4xl opacity-20 group-hover:opacity-40 transition-all duration-300 group-hover:scale-110">
                  0{index + 1}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
