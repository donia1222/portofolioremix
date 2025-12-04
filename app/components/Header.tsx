"use client"

import type React from "react"

import { NavLink, useLocation } from "@remix-run/react"
import { useState, useEffect, useCallback } from "react"
import { Code, Menu, X, Home, Brain, Globe } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLanguage, languageFlags, type Language } from "~/context/LanguageContext"
import "./header.css"
import "./transitions.css"

// Animated navigation indicator
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
  const [isLangOpen, setIsLangOpen] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollPosition, setLastScrollPosition] = useState(0)
  const location = useLocation()
  const { language, setLanguage, t } = useLanguage()

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
        className={`w-full py-4 px-18 fixed top-0 left-0 z-[90]`}
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
              {t("switzerland")}
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
          <nav className="hidden md:flex space-x-8 relative">
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
              <span>{t("home")}</span>
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
              <span>{t("projects")}</span>
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
              <span>{t("aiSolutions")}</span>
            </NavLink>

            <NavLink
              to="/roberto"
              className={({ isActive }) =>
                `nav-link transition-colors duration-200 group relative ${
                  isActive ? "active" : ""
                }`
              }
              onClick={handleNavigation}
            >
              <motion.div
                className="flex items-center gap-2 pl-1 pr-4 py-1 rounded-full bg-white/10 border border-violet-500/50 hover:border-violet-400 hover:bg-white/15 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src="/yo2.png"
                  alt="Avatar de Roberto Salvador"
                  className="w-8 h-8 rounded-full border-2 border-violet-500"
                />
                <span className="text-sm font-medium text-white">
                  {t("aboutMe")}
                </span>
              </motion.div>
            </NavLink>

            {/* Language selector - Desktop with floating globes */}
            <div className="relative">
              <motion.button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{languageFlags[language].flag}</span>
              </motion.button>

              <AnimatePresence>
                {isLangOpen && (
                  <>
                    {/* Backdrop */}
                    <motion.div
                      className="fixed inset-0 z-40"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={() => setIsLangOpen(false)}
                    />

                    {/* Floating language globes */}
                    <motion.div
                      className="absolute top-full right-0 mt-4 z-50"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      {(Object.keys(languageFlags) as Language[]).map((lang, index) => {
                        // Position globes in a curved pattern
                        const positions = [
                          { x: 0, y: 0 },
                          { x: -70, y: 20 },
                          { x: -120, y: 70 },
                          { x: -140, y: 140 },
                          { x: -120, y: 210 },
                        ]
                        const pos = positions[index] || { x: 0, y: index * 60 }

                        return (
                          <motion.div
                            key={lang}
                            className="absolute"
                            initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                            animate={{
                              scale: 1,
                              opacity: 1,
                              x: pos.x,
                              y: pos.y,
                            }}
                            exit={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 260,
                              damping: 20,
                              delay: index * 0.05,
                            }}
                          >
                            <motion.div
                              animate={{
                                y: [0, -6, 0],
                              }}
                              transition={{
                                duration: 2 + index * 0.3,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            >
                              <motion.button
                                onClick={() => {
                                  setLanguage(lang)
                                  setIsLangOpen(false)
                                }}
                                className={`
                                  relative flex items-center justify-center
                                  w-14 h-14 rounded-full
                                  bg-gradient-to-br from-violet-600/80 to-fuchsia-600/80
                                  backdrop-blur-sm
                                  shadow-xl shadow-black/30
                                  border-2 ${language === lang ? 'border-white' : 'border-white/30'}
                                  overflow-hidden
                                  group
                                `}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                {/* Glow effect */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />

                                {/* Flag */}
                                <span className="relative z-10 text-2xl">{languageFlags[lang].flag}</span>

                                {/* Active indicator */}
                                {language === lang && (
                                  <motion.div
                                    className="absolute inset-0 rounded-full border-2 border-white"
                                    initial={{ scale: 1.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                  />
                                )}
                              </motion.button>

                              {/* Language name tooltip */}
                              <motion.span
                                className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-white/80 whitespace-nowrap px-2 py-0.5 rounded-full bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{ pointerEvents: 'none' }}
                              >
                                {languageFlags[lang].name}
                              </motion.span>
                            </motion.div>
                          </motion.div>
                        )
                      })}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Animated navigation indicator */}
            <NavigationIndicator />
          </nav>
        </motion.div>
      </motion.header>

      {/* Mobile menu overlay - Floating Bubbles Style */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-zinc-950/90 backdrop-blur-xl z-[100] flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Background animated blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute w-64 h-64 bg-violet-600/20 rounded-full blur-3xl"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{ top: '10%', left: '10%' }}
              />
              <motion.div
                className="absolute w-80 h-80 bg-fuchsia-600/20 rounded-full blur-3xl"
                animate={{
                  x: [0, -80, 0],
                  y: [0, 80, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                style={{ bottom: '10%', right: '5%' }}
              />
              <motion.div
                className="absolute w-48 h-48 bg-cyan-600/15 rounded-full blur-3xl"
                animate={{
                  x: [0, 60, 0],
                  y: [0, 60, 0],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                style={{ top: '40%', right: '20%' }}
              />
            </div>

            {/* Close button */}
            <motion.button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 border border-white/20 text-white z-50"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="h-6 w-6" />
            </motion.button>

            {/* Language selector - Mobile with floating globes */}
            <motion.div
              className="absolute top-6 left-6 z-50"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/20 text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl">{languageFlags[language].flag}</span>
              </motion.button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {(Object.keys(languageFlags) as Language[]).map((lang, index) => {
                      // Position globes in a diagonal cascade
                      const positions = [
                        { x: 0, y: 0 },
                        { x: 50, y: 50 },
                        { x: 20, y: 110 },
                        { x: 70, y: 160 },
                        { x: 30, y: 220 },
                      ]
                      const pos = positions[index] || { x: 0, y: index * 60 }

                      return (
                        <motion.div
                          key={lang}
                          className="absolute"
                          initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                          animate={{
                            scale: 1,
                            opacity: 1,
                            x: pos.x,
                            y: pos.y,
                          }}
                          exit={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: index * 0.06,
                          }}
                        >
                          <motion.div
                            animate={{
                              y: [0, -8, 0],
                            }}
                            transition={{
                              duration: 2.5 + index * 0.4,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <motion.button
                              onClick={() => {
                                setLanguage(lang)
                                setIsLangOpen(false)
                              }}
                              className={`
                                relative flex items-center justify-center
                                w-14 h-14 rounded-full
                                bg-gradient-to-br from-violet-600/80 to-fuchsia-600/80
                                backdrop-blur-sm
                                shadow-xl shadow-black/30
                                border-2 ${language === lang ? 'border-white' : 'border-white/30'}
                                overflow-hidden
                              `}
                              whileHover={{ scale: 1.15 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              {/* Glow effect */}
                              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 blur-lg opacity-50" />

                              {/* Flag */}
                              <span className="relative z-10 text-2xl">{languageFlags[lang].flag}</span>

                              {/* Active indicator */}
                              {language === lang && (
                                <motion.div
                                  className="absolute inset-0 rounded-full border-2 border-white"
                                  initial={{ scale: 1.5, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                />
                              )}
                            </motion.button>
                          </motion.div>
                        </motion.div>
                      )
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Floating bubble menu items */}
            <nav className="relative w-full h-full flex items-center justify-center">
              {[
                { to: "/", icon: <Home className="h-7 w-7" />, label: t("home"), color: "from-violet-500 to-purple-600", x: -60, y: -120 },
                { to: "/webs", icon: <Code className="h-7 w-7" />, label: t("projects"), color: "from-sky-500 to-cyan-600", x: 70, y: -80 },
                { to: "/ki-losungen", icon: <Brain className="h-7 w-7" />, label: t("aiSolutions"), color: "from-emerald-500 to-teal-600", x: -80, y: 40 },
                { to: "/roberto", icon: <img src="/yo2.png" alt="Avatar" className="w-full h-full rounded-full object-cover" />, label: t("aboutMe"), color: "from-rose-500 to-pink-600", x: 60, y: 100, isAvatar: true },
              ].map((item, index) => (
                <motion.div
                  key={item.to}
                  className="absolute"
                  initial={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                    x: item.x,
                    y: item.y,
                  }}
                  exit={{ scale: 0, opacity: 0, x: 0, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                    delay: index * 0.1,
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <NavLink
                      onClick={(e) => {
                        setIsMenuOpen(false)
                        handleNavigation(e)
                      }}
                      to={item.to}
                      className={({ isActive }) =>
                        `group flex flex-col items-center gap-2 ${isActive ? "scale-110" : ""}`
                      }
                    >
                      <motion.div
                        className={`
                          relative flex items-center justify-center
                          w-20 h-20 rounded-full
                          ${('isAvatar' in item && item.isAvatar) ? '' : `bg-gradient-to-br ${item.color}`}
                          shadow-2xl shadow-black/30
                          ${('isAvatar' in item && item.isAvatar) ? 'border-[3px] border-red-500' : 'border-2 border-white/20'}
                          overflow-hidden
                        `}
                        whileHover={{ scale: 1.15 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Glow ring */}
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${('isAvatar' in item && item.isAvatar) ? 'from-red-500 to-rose-600' : item.color} blur-xl opacity-50`} />

                        {/* Icon */}
                        <span className={`relative z-10 text-white ${('isAvatar' in item && item.isAvatar) ? 'w-full h-full' : ''}`}>
                          {item.icon}
                        </span>
                      </motion.div>

                      {/* Label */}
                      <motion.span
                        className="text-white font-medium text-sm px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm border border-white/10"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.3 }}
                      >
                        {item.label}
                      </motion.span>
                    </NavLink>
                  </motion.div>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

