'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const remixTerms = [
  'Remix', 'React', 'Router', 'Loader', 'Action', 'Form', 'Outlet', 'Link',
  'useParams', 'useLoaderData', 'useFetcher', 'ErrorBoundary', 'CatchBoundary',
  'Meta', 'Links', 'Scripts', 'LiveReload', 'json', 'redirect', 'Response'
]

const CodeRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const columns = Math.floor(canvas.width / 20)
    const drops: number[] = new Array(columns).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(240, 248, 255, 0.1)' // Very light blue with high transparency
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#4299e1' // Blue color for the text
      ctx.font = '15px monospace'

      for (let i = 0; i < drops.length; i++) {
        const text = remixTerms[Math.floor(Math.random() * remixTerms.length)]
        ctx.fillText(text, i * 20, drops[i] * 20)

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-64 overflow-hidden bg-gradient-to-b from-blue-100 to-white rounded-lg shadow-inner mb-40">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold text-blue-600 bg-white bg-opacity-70 px-6 py-3 rounded-full shadow-lg">
         React Native
        </h2>
      </motion.div>
    </div>
  )
}

export default CodeRain