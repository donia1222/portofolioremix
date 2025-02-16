"use client"

import { motion } from "framer-motion"

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    d: `M-${95 - i * 1.25 * position} -${47.25 + i * 1.5}C-${
      95 - i * 1.25 * position
    } -${47.25 + i * 1.5} -${78 - i * 1.25 * position} ${54 - i * 1.5} ${
      38 - i * 1.25 * position
    } ${85.75 - i * 1.5}C${154 - i * 1.25 * position} ${117.5 - i * 1.5} ${
      171 - i * 1.25 * position
    } ${218.75 - i * 1.5} ${171 - i * 1.25 * position} ${218.75 - i * 1.5}`,
    width: 0.2 + i * 0.01,
  }))

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 174 79" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="white"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.02}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export default function BackgroundPaths({
  title = "",
}: {
  title?: string
}) {
  const words = title.split(" ")

  return (
    <div className="relative h-[300px] w-full flex items-center justify-center overflow-hidden ">
      <div className="absolute inset-0 scale-150">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tighter">
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block mr-3 last:mr-0">
                {word.split("").map((letter, letterIndex) => (
                  <motion.span
                    key={`${wordIndex}-${letterIndex}`}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: wordIndex * 0.1 + letterIndex * 0.03,
                      type: "spring",
                      stiffness: 150,
                      damping: 25,
                    }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80"
                  >
                    {letter}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
        </motion.div>
      </div>
    </div>
  )
}

