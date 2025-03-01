"use client"

import { NavLink } from "@remix-run/react"
import { useState, useEffect, useCallback } from "react"
import { Code, AppWindow, Menu, X, Home, Brain, Package } from "lucide-react"
import { motion } from "framer-motion"
import "./header.css"

// Importamos los componentes necesarios del FloatingBubblesBackground
function Bubble({ x, y, size, color }: { x: number; y: number; size: number; color: string }) {
  return (
    <motion.circle
      cx={x}
      cy={y}
      r={size}
      fill={color}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0.7, 0.3, 0.7],
        scale: [1, 1.2, 1],
        x: x + Math.random() * 100 - 50,
        y: y + Math.random() * 100 - 50,
      }}
      transition={{
        duration: 5 + Math.random() * 10,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    />
  )
}

function FloatingBubbles() {
  const [bubbles, setBubbles] = useState<Array<{ id: number; x: number; y: number; size: number; color: string }>>([])

  useEffect(() => {
    const newBubbles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 20 + 5,
      color: `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.3)`,
    }))
    setBubbles(newBubbles)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full">
        <title>Floating Bubbles</title>
        {bubbles.map((bubble) => (
          <Bubble key={bubble.id} {...bubble} />
        ))}
      </svg>
    </div>
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollPosition, setLastScrollPosition] = useState(0)

  const controlHeaderVisibility = useCallback(() => {
    if (isMenuOpen) return
    const currentScrollPosition = window.pageYOffset
    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
      setIsHeaderVisible(false)
    } else {
      setIsHeaderVisible(true)
    }
    setLastScrollPosition(currentScrollPosition)
  }, [lastScrollPosition, isMenuOpen])

  useEffect(() => {
    window.addEventListener("scroll", controlHeaderVisibility)
    return () => {
      window.removeEventListener("scroll", controlHeaderVisibility)
    }
  }, [controlHeaderVisibility])

  return (
    <>
      <header
        className={`w-full py-4 px-4 fixed top-0 left-0 z-40 transition-transform duration-300 ${
          isHeaderVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full md:max-w-[95%] mx-auto bg-[#6d6d864f] backdrop-filter backdrop-blur-lg rounded-full flex justify-between items-center px-4 md:px-8 py-3 shadow-lg z-40">
          {/* Logo and name */}
          <NavLink to="/" className="flex items-center">
            <span className="text-blue-300 text-lg sm:text-xl md:text-2xl font-bold">LWEB</span>
            <span className="ml-2 text-[#ff69b4] text-lg sm:text-xl md:text-2xl font-bold">Schweiz</span>
          </NavLink>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-8 w-8 text-white transition-transform duration-300" />
              ) : (
                <Menu className="h-8 w-8 text-white transition-transform duration-300" />
              )}
            </button>
          </div>

          {/* Menu for large screens */}
          <nav className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link text-white flex items-center space-x-2 hover:text-[#40e0d0] transition-colors duration-200 group relative ${
                  isActive ? "active" : ""
                }`
              }
            >
              <Home className="h-5 w-5 group-hover:scale-125 transition-transform duration-300" />
              <span>Home</span>
            </NavLink>

            <NavLink
              to="/webs"
              className={({ isActive }) =>
                `nav-link text-white flex items-center space-x-2 hover:text-[#40e0d0] transition-colors duration-200 group relative ${
                  isActive ? "active" : ""
                }`
              }
            >
              <Code className="h-5 w-5 group-hover:scale-125 transition-transform duration-300" />
              <span>Webentwicklung</span>
            </NavLink>

            <NavLink
              to="/apps"
              className={({ isActive }) =>
                `nav-link text-white flex items-center space-x-2 hover:text-[#40e0d0] transition-colors duration-200 group relative ${
                  isActive ? "active" : ""
                }`
              }
            >
              <AppWindow className="h-5 w-5 group-hover:translate-y-[-4px] transition-transform duration-300" />
              <span>App-Entwicklung</span>
            </NavLink>

            <NavLink
              to="/ki-losungen"
              className={({ isActive }) =>
                `nav-link text-white flex items-center space-x-2 hover:text-[#40e0d0] transition-colors duration-200 group relative ${
                  isActive ? "active" : ""
                }`
              }
            >
              <Brain className="h-5 w-5 animate-pulse" />
              <span>KI-Lösungen</span>
            </NavLink>

            <NavLink
              to="/komponenten"
              className={({ isActive }) =>
                `nav-link text-white flex items-center space-x-2 hover:text-[#40e0d0] transition-colors duration-200 group relative ${
                  isActive ? "active" : ""
                }`
              }
            >
              <Package className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Komponenten</span>
            </NavLink>

            <NavLink
              to="/roberto"
              className={({ isActive }) =>
                `nav-link text-white flex items-center space-x-2 hover:text-[#40e0d0] transition-colors duration-200 group relative ${
                  isActive ? "active" : ""
                }`
              }
            >
              <span>Über mich</span>
              <img
                src="/yo2.png"
                alt="Avatar de Roberto Salvador"
                className="w-10 h-10 rounded-full ml-2 border-2 border-gray-700"
              />
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay with FloatingBubbles background */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center">
          <FloatingBubbles />
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-6 left-1/2 transform -translate-x-1/2 text-white mt-20 focus:outline-none"
            aria-label="Cerrar menú"
          >
            <X className="h-8 w-8" />
          </button>
          <nav className="relative bg-[#9393b2d5] backdrop-filter backdrop-blur-lg rounded-lg p-8 space-y-6 w-11/12 max-w-sm">
            <NavLink
              onClick={() => setIsMenuOpen(false)}
              to="/"
              className={({ isActive }) =>
                `nav-link flex items-center space-x-2 hover:text-[#40e0d0] transition-colors duration-200 group relative ${
                  isActive ? "active" : ""
                }`
              }
            >
              <Home className="h-5 w-5 group-hover:scale-125 transition-transform duration-300" />
              <span>Home</span>
            </NavLink>

            <NavLink
              onClick={() => setIsMenuOpen(false)}
              to="/webs"
              className={({ isActive }) =>
                `nav-link flex items-center space-x-2 hover:text-[#40e0d0] transition-colors duration-200 group relative ${
                  isActive ? "active" : ""
                }`
              }
            >
              <Code className="h-5 w-5 group-hover:scale-125 transition-transform duration-300" />
              <span>Webentwicklung</span>
            </NavLink>

            <NavLink
              onClick={() => setIsMenuOpen(false)}
              to="/apps"
              className={({ isActive }) =>
                `nav-link flex items-center space-x-2 hover:text-[#40e0d0] transition-colors duration-200 group relative ${
                  isActive ? "active" : ""
                }`
              }
            >
              <AppWindow className="h-5 w-5 group-hover:translate-y-[-4px] transition-transform duration-300" />
              <span>App-Entwicklung</span>
            </NavLink>

            <NavLink
              onClick={() => setIsMenuOpen(false)}
              to="/ki-losungen"
              className={({ isActive }) =>
                `nav-link flex items-center space-x-2 hover:text-[#40e0d0] transition-colors duration-200 group relative ${
                  isActive ? "active" : ""
                }`
              }
            >
              <Brain className="h-5 w-5 animate-pulse" />
              <span>KI-Lösungen</span>
            </NavLink>

            <NavLink
              onClick={() => setIsMenuOpen(false)}
              to="/komponenten"
              className={({ isActive }) =>
                `nav-link flex items-center space-x-2 hover:text-[#40e0d0] transition-colors duration-200 group relative ${
                  isActive ? "active" : ""
                }`
              }
            >
              <Package className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>Komponenten</span>
            </NavLink>

            <NavLink
              onClick={() => setIsMenuOpen(false)}
              to="/roberto"
              className={({ isActive }) =>
                `nav-link flex items-center space-x-2 hover:text-[#40e0d0] transition-colors duration-200 group relative ${
                  isActive ? "active" : ""
                }`
              }
            >
              <img
                src="/yo2.png"
                alt="Avatar de Roberto Salvador"
                className="w-12 h-12 rounded-full border-2 border-gray-600"
              />
              <span>Über mich</span>
            </NavLink>
          </nav>
        </div>
      )}
    </>
  )
}

