"use client"
import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ScrollPanel {
  id: string
  title: string
  content: string
  bgColor: string
  textColor: string
}

export default function HorizontalScrollSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isClient, setIsClient] = useState(false)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  useEffect(() => {
    setIsClient(true)
  }, [])

  const panels: ScrollPanel[] = [
    {
      id: "1",
      title: "Modern Design",
      content: "Beautiful, responsive interfaces that adapt to any device with smooth animations and intuitive user experience.",
      bgColor: "from-blue-600 to-purple-600",
      textColor: "text-white"
    },
    {
      id: "2", 
      title: "Performance First",
      content: "Optimized code and lightning-fast loading times ensure your users never wait for content to appear.",
      bgColor: "from-green-500 to-teal-600",
      textColor: "text-white"
    },
    {
      id: "3",
      title: "AI Integration",
      content: "Intelligent features powered by cutting-edge AI technology to enhance user engagement and automation.",
      bgColor: "from-orange-500 to-red-500", 
      textColor: "text-white"
    },
    {
      id: "4",
      title: "Scalable Solutions",
      content: "Built to grow with your business using modern tech stack and best practices for maintainability.",
      bgColor: "from-purple-600 to-pink-600",
      textColor: "text-white"
    }
  ]

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"])

  if (!isClient) {
    return <div className="h-[400vh]" />
  }

  return (
    <div ref={containerRef} className="h-[400vh] relative">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div 
          style={{ x }}
          className="flex"
        >
          {panels.map((panel, index) => (
            <div
              key={panel.id}
              className="min-w-screen h-screen flex items-center justify-center relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${panel.bgColor}`} />
              
              <motion.div
                className="relative z-10 max-w-2xl mx-auto text-center px-8"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: false }}
              >
                <motion.h2 
                  className={`text-4xl md:text-6xl font-bold mb-6 ${panel.textColor}`}
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.2, duration: 0.6 }}
                >
                  {panel.title}
                </motion.h2>
                
                <motion.p 
                  className={`text-lg md:text-xl leading-relaxed ${panel.textColor} opacity-90`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.9 }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.8 }}
                >
                  {panel.content}
                </motion.p>

                <motion.div
                  className="mt-8 flex justify-center"
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.1 + 0.6, duration: 0.8, type: "spring" }}
                >
                  <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{panel.id}</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative elements */}
              <motion.div
                className="absolute top-20 left-20 w-32 h-32 rounded-full bg-white/10 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              />
              
              <motion.div
                className="absolute bottom-20 right-20 w-24 h-24 rounded-full bg-white/10 blur-xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}