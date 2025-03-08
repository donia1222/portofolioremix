"use client"

import type React from "react"

import { NavLink, useLocation } from "@remix-run/react"
import { useState, useEffect, useCallback } from "react"
import { Code, AppWindow, Menu, X, Home, Brain, Package } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import "./header.css"
import "./transitions.css"

// Bubble component remains the same
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

// FloatingBubbles component remains the same
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

// New component for animated navigation indicator
function NavigationIndicator() {
  const location = useLocation()

  // Define positions for each route
  const indicatorPositions = {
    "/": 0,
    "/webs": 1,
    "/apps": 2,
    "/ki-losungen": 3,
    "/komponenten": 4,
    "/roberto": 5,
  }

  const position = indicatorPositions[location.pathname as keyof typeof indicatorPositions] || 0

  return (
    <motion.div
      className="absolute bottom-0 h-1rounded-full"
      initial={false}
      animate={{
        width: "40px",
        x: `calc(${position} * (100% + 24px) + 20px)`,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    />
  )
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollPosition, setLastScrollPosition] = useState(0)
  const location = useLocation()

  const controlHeaderVisibility = useCallback(() => {
    if (isMenuOpen) return
    const currentScrollPosition = window.scrollY || document.documentElement.scrollTop
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

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  // Prevent default link behavior and handle navigation manually
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // The NavLink component will handle the actual navigation
    // Just prevent any additional behaviors from happening
    if (window.scrollY > 0) {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      })
    }
  }

  return (
    <>
      <motion.header
        className={`w-full py-4 px-4 fixed top-0 left-0 z-[90]`}
        initial={{ y: 0 }}
        animate={{ y: isHeaderVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="w-full md:max-w-[95%] mx-auto bg-[#6d6d864f] backdrop-filter backdrop-blur-lg rounded-full flex justify-between items-center px-4 md:px-8 py-3 shadow-lg z-40"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Logo and name */}
          <NavLink to="/" className="flex items-center" onClick={handleNavigation}>
            <motion.span
              className="text-blue-300 text-lg sm:text-xl md:text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              LWEB
            </motion.span>
            <motion.span
              className="ml-2 text-[#ff69b4] text-lg sm:text-xl md:text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Schweiz
            </motion.span>
          </NavLink>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-8 w-8 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-8 w-8 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Menu for large screens */}
          <nav className="hidden md:flex space-x-6 relative">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link text-white flex items-center space-x-2 hover:text-[#40e0d0] transition-colors duration-200 group relative ${
                  isActive ? "active" : ""
                }`
              }
              onClick={handleNavigation}
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
              onClick={handleNavigation}
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
              onClick={handleNavigation}
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
              onClick={handleNavigation}
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
              onClick={handleNavigation}
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
              onClick={handleNavigation}
            >
              <span>Über mich</span>
              <motion.img
                src="/yo2.png"
                alt="Avatar de Roberto Salvador"
                className="w-10 h-10 rounded-full ml-2 border-2 border-gray-700"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </NavLink>

            {/* Animated navigation indicator */}
            <NavigationIndicator />
          </nav>
        </motion.div>
      </motion.header>

      {/* Mobile menu overlay with FloatingBubbles background */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-[100] flex items-start pt-20 justify-center overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FloatingBubbles />
            <motion.nav
              className="relative bg-[#9393b2d5] backdrop-filter backdrop-blur-lg rounded-lg p-8 space-y-6 w-11/12 max-w-sm mb-10"
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <motion.button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 text-white focus:outline-none"
                aria-label="Cerrar menú"
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-6 w-6" />
              </motion.button>

              {/* Mobile menu items with staggered animation */}
              {[
                { to: "/", icon: <Home className="h-6 w-6" />, label: "Home" },
                { to: "/webs", icon: <Code className="h-6 w-6" />, label: "Webentwicklung" },
                { to: "/apps", icon: <AppWindow className="h-6 w-6" />, label: "App-Entwicklung" },
                { to: "/ki-losungen", icon: <Brain className="h-6 w-6" />, label: "KI-Lösungen" },
                { to: "/komponenten", icon: <Package className="h-6 w-6" />, label: "Komponenten" },
                {
                  to: "/roberto",
                  icon: <img src="/yo2.png" alt="Avatar" className="w-12 h-12 rounded-full border-2 border-gray-600" />,
                  label: "Über mich",
                },
              ].map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="py-2"
                >
                  <NavLink
                    onClick={(e) => {
                      setIsMenuOpen(false)
                      handleNavigation(e)
                    }}
                    to={item.to}
                    className={({ isActive }) =>
                      `nav-link flex items-center hover:text-[#40e0d0] transition-colors duration-200 group relative ${
                        isActive ? "active" : ""
                      }`
                    }
                  >
                    <span className="flex items-center justify-center w-10">{item.icon}</span>
                    <span className="ml-3 text-lg">{item.label}</span>
                  </NavLink>
                </motion.div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

