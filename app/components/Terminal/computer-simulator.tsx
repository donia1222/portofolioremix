"use client"

import { useState, useEffect, useRef } from "react"
import { Terminal } from "./terminal"
import { WebsitePreview } from "./website-preview"
import { Monitor } from "lucide-react"

export function ComputerSimulator() {
  const [stage, setStage] = useState<"terminal" | "website">("terminal")
  const [progress, setProgress] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const simulatorRef = useRef<HTMLDivElement>(null)

  // Usar Intersection Observer para detectar cuando el componente es visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Si el componente es visible y el proceso no ha comenzado aún
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      {
        // El componente se considera visible cuando al menos el 30% está en la pantalla
        threshold: 0.3,
      },
    )

    if (simulatorRef.current) {
      observer.observe(simulatorRef.current)
    }

    return () => {
      if (simulatorRef.current) {
        observer.unobserve(simulatorRef.current)
      }
    }
  }, [hasStarted])

  // Iniciar el proceso solo cuando hasStarted sea true
  useEffect(() => {
    if (!hasStarted) return

    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(intervalRef.current!)
          setTimeout(() => {
            setStage("website")
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, 50)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [hasStarted])

  return (
    <div className="w-full max-w-4xl" ref={simulatorRef}>
      <div className="bg-gray-800 rounded-t-lg p-3 flex items-center gap-2">
        <Monitor className="text-white h-5 w-5" />
        <div className="text-white font-medium">{stage === "terminal" ? "Terminal" : "Remix Website"}</div>
        <div className="flex ml-auto gap-2">
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
        </div>
      </div>
      <div className="border-4 border-gray-800 bg-black rounded-b-lg overflow-hidden h-[70vh] sm:h-[75vh] md:h-[80vh]">
        {stage === "terminal" ? <Terminal progress={progress} /> : <WebsitePreview />}
      </div>
    </div>
  )
}

