"use client"

import { useRef, useState, useEffect } from "react"
import gsap from "gsap"

export default function Comparison() {
  const [activeTab, setActiveTab] = useState("comparison")
  const [mounted, setMounted] = useState(false)

  const titleRef = useRef<HTMLHeadingElement>(null)
  const titleRef2 = useRef<HTMLHeadingElement>(null)
  const backgroundBlobRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Initialize animations when component mounts
  useEffect(() => {
    setMounted(true)

    // Animate the background blob
    if (backgroundBlobRef.current) {
      gsap.to(backgroundBlobRef.current, {
        x: -50,
        y: 30,
        duration: 7.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      })
    }

    // Animate the card entrance
    if (cardRef.current) {
      gsap.fromTo(cardRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
    }

    // Animate the tabs entrance
    if (tabsRef.current) {
      gsap.fromTo(
        tabsRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" },
      )
    }

    // Initialize the title animation for first part
    if (titleRef.current) {
      const title = titleRef.current

      // Split the text into individual characters for animation
      const text = title.innerText
      title.innerHTML = ""

      // Create the wrapper for the 3D effect
      const wrapper = document.createElement("div")
      wrapper.className = "title-3d-wrapper"
      title.appendChild(wrapper)

      // Process each character
      ;[...text].forEach((char, i) => {
        if (char === " ") {
          // For spaces, add a space element
          const space = document.createElement("span")
          space.innerHTML = "&nbsp;"
          space.className = "char-space"
          wrapper.appendChild(space)
        } else {
          // For other characters, create animated spans
          const charSpan = document.createElement("span")
          charSpan.className = "animated-char cms-char"
          charSpan.textContent = char

          // Use GSAP for character animation instead of CSS delays
          wrapper.appendChild(charSpan)

          gsap.fromTo(
            charSpan,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: i * 0.05,
              ease: "power2.out",
            },
          )
        }
      })
    }

    // Initialize the title animation for second part
    if (titleRef2.current) {
      const title = titleRef2.current

      // Split the text into individual characters for animation
      const text = title.innerText
      title.innerHTML = ""

      // Create the wrapper for the 3D effect
      const wrapper = document.createElement("div")
      wrapper.className = "title-3d-wrapper"
      title.appendChild(wrapper)

      // Process each character
      ;[...text].forEach((char, i) => {
        if (char === " ") {
          // For spaces, add a space element
          const space = document.createElement("span")
          space.innerHTML = "&nbsp;"
          space.className = "char-space"
          wrapper.appendChild(space)
        } else if (char === "?") {
          // Special handling for question mark
          const qSpan = document.createElement("span")
          qSpan.className = "animated-char question-mark"
          qSpan.textContent = "?"
          wrapper.appendChild(qSpan)

          gsap.fromTo(
            qSpan,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: i * 0.05,
              ease: "power2.out",
            },
          )
        } else {
          // For other characters, create animated spans
          const charSpan = document.createElement("span")
          charSpan.className = "animated-char framework-char"
          charSpan.textContent = char
          wrapper.appendChild(charSpan)

          gsap.fromTo(
            charSpan,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: i * 0.05,
              ease: "power2.out",
            },
          )
        }
      })
    }

    // Cleanup function
    return () => {
      gsap.killTweensOf(backgroundBlobRef.current)
    }
  }, [])

  // Handle tab switching with GSAP animations
  const switchTab = (tab: string) => {
    if (tab === activeTab) return

    // Animate out current content
    gsap.to(contentRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setActiveTab(tab)

        // Animate in new content
        gsap.fromTo(contentRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" })
      },
    })
  }

  return (
    <section className="relative overflow-hidden py-16 mt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 z-0"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div ref={backgroundBlobRef} className="absolute top-20 right-10 w-72 h-72 rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto   sm:px-6 lg:px-8 relative z-10">
        {/* Animated card */}
        <div
          ref={cardRef}
          className="bg-gray-800/50 backdrop-blur-lg p-6 rounded-xl mb-10 border border-gray-700 shadow-xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-violet-600/20 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-violet-400"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">CMSs vs Frameworks</h2>
          </div>
          <p className="text-gray-300 text-lg">
            Als Freelancer bevorzuge ich die Arbeit mit modernen Frameworks wie Remix, Next.js und React. Diese bieten
            mir die Flexibilität, Geschwindigkeit und Kontrolle, die ich für maßgeschneiderte, leistungsstarke
            Webanwendungen benötige.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div
            ref={tabsRef}
            className="inline-flex rounded-md shadow-lg bg-gray-800/50 backdrop-blur-lg p-1 border border-gray-700"
            role="group"
          >
            <button
              type="button"
              className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeTab === "comparison"
                  ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg"
                  : "bg-transparent text-gray-300 hover:bg-gray-700/50"
              }`}
              onClick={() => switchTab("comparison")}
            >
              Vergleich
            </button>
            <button
              type="button"
              className={`px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeTab === "recommendation"
                  ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg"
                  : "bg-transparent text-gray-300 hover:bg-gray-700/50"
              }`}
              onClick={() => switchTab("recommendation")}
            >
              Was ist besser?
            </button>
          </div>
        </div>

        <div ref={contentRef}>{activeTab === "comparison" ? <ComparisonTable /> : <RecommendationSection />}</div>
      </div>
    </section>
  )
}

function ComparisonTable() {
  const tableRef = useRef<HTMLDivElement>(null)
  const rowRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    // Animate the table entrance
    if (tableRef.current) {
      gsap.fromTo(tableRef.current, { opacity: 0 }, { opacity: 1, duration: 0.5, ease: "power2.out" })
    }

    // Animate each row with staggered entrance
    rowRefs.current.forEach((row, index) => {
      if (row) {
        gsap.fromTo(
          row,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            delay: index * 0.1,
            ease: "power2.out",
          },
        )
      }
    })
  }, [])

  const comparisonData = [
    {
      aspect: "Basistechnologie",
      cms: "PHP + MySQL",
      framework: "JavaScript / TypeScript + moderne APIs",
      cmsIcon: "database",
      frameworkIcon: "code",
    },
    {
      aspect: "Ansatz",
      cms: '"Klicken & Bauen", mit Vorlagen und Plugins',
      framework: "Entwicklung (wie LEGO bauen)",
      cmsIcon: "mouse-pointer",
      frameworkIcon: "code-2",
    },
    {
      aspect: "Content-Management",
      cms: "Integriert (visuelle Editoren, Admin-Panel)",
      framework: "Headless-CMS Integration (Sanity, Strapi, usw.)",
      cmsIcon: "edit-3",
      frameworkIcon: "puzzle",
    },
    {
      aspect: "Lernkurve",
      cms: "Niedrig (für einen schnellen Start)",
      framework: "Mittel/hoch (erfordert moderne Programmierung)",
      cmsIcon: "trending-up",
      frameworkIcon: "bar-chart",
    },
    {
      aspect: "Geschwindigkeit",
      cms: "Abhängig von Hosting und Optimierung",
      framework: "Sehr hohe Geschwindigkeit mit SSR und SSG",
      cmsIcon: "activity",
      frameworkIcon: "zap",
    },
    {
      aspect: "Skalierbarkeit",
      cms: "Begrenzt ohne fortgeschrittene Plugins",
      framework: "Sehr hoch, ideal für große Projekte",
      cmsIcon: "git-branch",
      frameworkIcon: "git-merge",
    },
    {
      aspect: "Sicherheit",
      cms: "Anfälliger, wenn nicht aktualisiert",
      framework: "Sicherer bei bewährten Praktiken",
      cmsIcon: "shield",
      frameworkIcon: "shield-check",
    },
  ]

  return (
    <div
      ref={tableRef}
      className="overflow-hidden rounded-xl shadow-xl bg-gray-800/50 backdrop-blur-lg border border-gray-700"
    >
      {/* Header for mobile - will be hidden on desktop */}
      <div className="md:hidden p-4 bg-gray-900/80 border-b border-gray-700 text-center">
        <h3 className="text-lg font-semibold text-white mb-1">Vergleich</h3>
      </div>

      {/* Desktop header row */}
      <div className="hidden md:grid grid-cols-3 gap-0 divide-x divide-gray-700">
        <div className="bg-gray-900/60 p-6">
          <h3 className="text-lg font-semibold text-gray-200 mb-2">Aspekt</h3>
        </div>
        <div className="bg-amber-900/30 p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-800 flex items-center justify-center cms-icon-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-400"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-amber-400">WordPress / CMSs</h3>
          </div>
        </div>
        <div className="bg-violet-900/30 p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-violet-800 flex items-center justify-center framework-icon-pulse">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-violet-400"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M12 18v-6"></path>
                <path d="M8 18v-1"></path>
                <path d="M16 18v-3"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-violet-400">React, Remix, Next.js</h3>
          </div>
        </div>
      </div>

      {comparisonData.map((item, index) => (
        <div
          key={index}
          ref={(el) => (rowRefs.current[index] = el)}
          className="flex flex-col md:grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-700 border-t border-gray-700"
        >
          {/* Aspect title - full width on mobile */}
          <div className="p-4 md:p-6 bg-gray-900/40 md:bg-transparent">
            <p className="font-medium text-gray-200">{item.aspect}</p>
          </div>

          {/* Mobile comparison - side by side in a grid */}
          <div className="md:hidden grid grid-cols-2 divide-x divide-gray-700">
            {/* CMS side */}
            <div className="p-4 bg-amber-900/20 border-t-2 border-amber-700 relative">
              <div className="absolute -top-3 left-2 px-2 py-1 bg-amber-800 text-amber-200 text-xs font-bold rounded-md">
                CMS
              </div>
              <div className="flex items-start gap-2 mt-2">
                <div className="mt-1 w-5 h-5 rounded-full bg-amber-800 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-amber-400"
                  >
                    <path d={getIconPath(item.cmsIcon)}></path>
                  </svg>
                </div>
                <p className="text-sm text-gray-300 break-words">{item.cms}</p>
              </div>
            </div>

            {/* Framework side */}
            <div className="p-4 bg-violet-900/20 border-t-2 border-violet-700 relative">
              <div className="absolute -top-3 right-2 px-2 py-1 bg-violet-800 text-violet-200 text-xs font-bold rounded-md">
                Framework
              </div>
              <div className="flex items-start gap-2 mt-2">
                <div className="mt-1 w-5 h-5 rounded-full bg-violet-800 flex items-center justify-center flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-violet-400"
                  >
                    <path d={getIconPath(item.frameworkIcon)}></path>
                  </svg>
                </div>
                <p className="text-sm text-gray-300 break-words">{item.framework}</p>
              </div>
            </div>
          </div>

          {/* Desktop CMS column */}
          <div className="hidden md:block p-6 transition-colors duration-300 hover-highlight-cms">
            <div className="flex items-start gap-3">
              <div className="mt-1 w-6 h-6 rounded-full bg-amber-800 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-amber-400"
                >
                  <path d={getIconPath(item.cmsIcon)}></path>
                </svg>
              </div>
              <p className="text-gray-300">{item.cms}</p>
            </div>
          </div>

          {/* Desktop Framework column */}
          <div className="hidden md:block p-6 transition-colors duration-300 hover-highlight-framework">
            <div className="flex items-start gap-3">
              <div className="mt-1 w-6 h-6 rounded-full bg-violet-800 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-violet-400"
                >
                  <path d={getIconPath(item.frameworkIcon)}></path>
                </svg>
              </div>
              <p className="text-gray-300">{item.framework}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

function RecommendationSection() {
  const recommendations = [
    // Update all recommendations to German
    {
      need: "Schnelle Seite zur Anzeige von Inhalten",
      recommendation: "WordPress oder CMS",
      icon: "file-text",
      color: "amber",
    },
    {
      need: "Einfacher Blog mit visuellem Editor",
      recommendation: "WordPress",
      icon: "edit",
      color: "amber",
    },
    {
      need: "Ultraschnelle und optimierte Website",
      recommendation: "Remix oder Next.js",
      icon: "zap",
      color: "violet",
    },
    {
      need: "Komplexe Webanwendung (Login, Zahlungen, Dashboards...)",
      recommendation: "Remix / Next.js / React",
      icon: "layers",
      color: "violet",
    },
    {
      need: "Vollständige Kontrolle über Code und Design",
      recommendation: "Remix / Next.js",
      icon: "code",
      color: "violet",
    },
    {
      need: "Mehrsprachige Website mit SEO",
      recommendation: "Next.js mit i18n",
      icon: "globe",
      color: "violet",
    },
    {
      need: "Shop mit Warenkorb, Produkten, usw.",
      recommendation: "WordPress + WooCommerce oder Next.js + Backend",
      icon: "shopping-cart",
      color: "green",
    },
  ]

  const sectionRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const conclusionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate each recommendation card with staggered entrance
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: index * 0.1,
            ease: "power2.out",
          },
        )

        // Add hover animation
        card.addEventListener("mouseenter", () => {
          gsap.to(card, { y: -5, duration: 0.3, ease: "power2.out" })
        })

        card.addEventListener("mouseleave", () => {
          gsap.to(card, { y: 0, duration: 0.3, ease: "power2.out" })
        })
      }
    })

    // Animate the conclusion card
    if (conclusionRef.current) {
      gsap.fromTo(
        conclusionRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.8,
          ease: "power2.out",
        },
      )

      // Add pulsing shadow animation
      gsap.to(conclusionRef.current, {
        boxShadow: "0 0 20px rgba(139, 92, 246, 0.2)",
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    }
  }, [])

  return (
    <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="md:col-span-2 mb-2">
        <h2 className="text-2xl font-bold text-white">Was ist besser? Es hängt davon ab, was du brauchst:</h2>
      </div>

      {recommendations.map((item, index) => (
        <div
          key={index}
          ref={(el) => (cardRefs.current[index] = el)}
          className="bg-gray-800/50 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden border border-gray-700 hover:border-blue-500/40 transition-all duration-300"
        >
          <div className={`bg-${item.color}-900/30 p-4 flex items-center gap-4`}>
            <div
              className={`w-12 h-12 rounded-lg bg-${item.color}-800 flex items-center justify-center icon-pulse-${item.color}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`text-${item.color}-400`}
              >
                <path d={getIconPath(item.icon)}></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white">{item.need}</h3>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-300"
                >
                  <path d="M20 6 9 17l-5-5"></path>
                </svg>
              </div>
              <p className="font-medium text-gray-200">{item.recommendation}</p>
            </div>
          </div>
        </div>
      ))}

      <div ref={conclusionRef} className="md:col-span-2 mt-6">
        <div className="bg-gradient-to-r from-violet-600 to-blue-600 rounded-xl p-6 shadow-lg border border-violet-400/20">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 conclusion-icon-float">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M12 2 2 7l10 5 10-5-10-5Z"></path>
                <path d="m2 17 10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Fazit</h3>
              <p className="text-white/90">
                Die Wahl zwischen einem CMS wie WordPress und modernen Frameworks wie Remix oder Next.js hängt von
                deinen spezifischen Anforderungen, technischen Ressourcen und Projektzielen ab. Es gibt keine "beste"
                Lösung für alle Fälle, sondern die am besten geeignete für deine spezifische Situation. Als Freelancer
                bevorzuge ich jedoch moderne Frameworks für ihre Flexibilität und Leistung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function getIconPath(icon: string): string {
  switch (icon) {
    case "database":
      return "M21 5c0 1.1-3.9 2-9 2s-9-.9-9-2 3.9-2 9-2 9 .9 9 2M3 5v14c0 1.1 3.9 2 9 2s9-.9 9-2V5"
    case "code":
      return "m16 18 6-6-6-6M8 6l-6 6 6 6"
    case "mouse-pointer":
      return "m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3zM13 13l6 6"
    case "code-2":
      return "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1M16 3h1a2 2 0 0 1 2 2v5c0 1.1.9 2 2 2a2 2 0 0 1-2 2v5a2 2 0 0 1-2 2h-1"
    case "edit-3":
      return "M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"
    case "puzzle":
      return "M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925-.228-.608-.789-1.059-1.467-1.059h-1.6c-.735 0-1.33.595-1.33 1.33v1.6c0 .678.451 1.239 1.059 1.467.445.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968-.223.578-.76 1.01-1.413 1.01h-1.334c-.735 0-1.33-.595-1.33-1.33v-1.334c0-.653.432-1.19 1.01-1.413.464-.18-.894.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 3.85 12c0-.617.236-1.234.706-1.704L6.007 8.85a.979.979 0 0 1 .837-.277c.47.07.802.48.968.925.228.608.789 1.059 1.467 1.059h1.6c.735 0 1.33-.595 1.33-1.33v-1.6c0-.678-.451-1.239-1.059-1.467-.445-.166-.855-.497-.925-.968a.979.979 0 0 1 .277-.837l1.61-1.61a2.404 2.404 0 0 1 1.704-.706c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.878.29.493-.074.84-.504 1.02-.968.223-.578.76-1.01 1.413-1.01h1.334c.735 0 1.33.595 1.33 1.33v1.334c0 .653-.432 1.19-1.01 1.413-.464.18-.894.527-.968 1.02z"
    case "trending-up":
      return "m22 7-8.5 8.5-5-5L2 17"
    case "bar-chart":
      return "M12 20V10M18 20V4M6 20v-4"
    case "activity":
      return "M22 12h-4l-3 9L9 3l-3 9H2"
    case "zap":
      return "M13 2 3 14h9l-1 8 10-12h-9l1-8z"
    case "git-branch":
      return "M6 3v12M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 9a9 9 0 0 1-9 9"
    case "git-merge":
      return "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM6 21V9a9 9 0 0 0 9 9"
    case "shield":
      return "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
    case "shield-check":
      return "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4"
    case "file-text":
      return "M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z M14 2v6h6 M16 13H8 M16 17H8 M10 9H8"
    case "edit":
      return "M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7 M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4Z"
    case "layers":
      return "M12 2 2 7l10 5 10-5-10-5z M2 17l10 5 10-5 M2 12l10 5 10-5"
    case "globe":
      return "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z M2 12h20 M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
    case "shopping-cart":
      return "M8 10V7a4 4 0 1 1 8 0v3h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2z M12 17v-6 M8 17v-6"
    default:
      return ""
  }
}
