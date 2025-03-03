"use client"

import { useEffect, useState } from "react"
import { ChevronUp } from "lucide-react"

interface ScrollToTopProps {
  threshold?: number
  right?: number
  bottom?: number
  size?: number
}

export default function ScrollToTop({ threshold = 300, right = 20, bottom = 20, size = 40 }: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false)

  // This effect needs to run in the browser, not during SSR
  useEffect(() => {
    let lastScrollY = window.scrollY

    const toggleVisibility = () => {
      const currentScrollY = window.scrollY
      const isScrollingDown = currentScrollY > lastScrollY

      if (isScrollingDown && currentScrollY > threshold) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      lastScrollY = currentScrollY
    }

    window.addEventListener("scroll", toggleVisibility)

    // Initial check
    toggleVisibility()

    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [threshold])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed z-50 p-2 text-white bg-primary rounded-full shadow-lg transition-all duration-300 hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
          style={{ right: `${right}px`, bottom: `${bottom}px` }}
          aria-label="Scroll to top"
        >
          <ChevronUp size={size - 16} />
        </button>
      )}
    </>
  )
}

