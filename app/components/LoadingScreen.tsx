"use client"

import { useEffect, useState } from "react"

interface LoadingScreenProps {
  minDuration?: number
}

export default function LoadingScreen({ minDuration = 500 }: LoadingScreenProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, minDuration)

    return () => clearTimeout(timer)
  }, [minDuration])

  if (!visible) return null

  return (
    <div className="fixed inset-0 bg-slate-900 z-[100] flex flex-col items-center justify-center">
      <div className="relative w-16 h-16">
        {/* Orbit circles */}
        <div className="absolute inset-0 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-1 border-4 border-r-indigo-400 border-t-transparent border-b-transparent border-l-transparent rounded-full animate-spin animation-delay-150"></div>
        <div className="absolute inset-2 border-4 border-b-purple-300 border-t-transparent border-r-transparent border-l-transparent rounded-full animate-spin animation-delay-300"></div>

        {/* Center dot */}
        <div className="absolute inset-[30%] bg-white rounded-full animate-pulse"></div>
      </div>

    </div>
  )
}
