"use client"

import { type ReactNode, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLocation } from "@remix-run/react"

interface CubeTransitionProps {
  children: ReactNode
}

export default function CubeTransition({ children }: CubeTransitionProps) {
  const location = useLocation()
  const [prevPath, setPrevPath] = useState(location.pathname)
  const [direction, setDirection] = useState(0)

  // Determine direction of transition
  useEffect(() => {
    if (location.pathname !== prevPath) {
      // Generate a consistent direction based on the path
      const pathSum = location.pathname.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0)
      const prevPathSum = prevPath.split("").reduce((sum, char) => sum + char.charCodeAt(0), 0)

      // Use the difference to determine direction (1 for right, -1 for left)
      setDirection(pathSum > prevPathSum ? 1 : -1)
      setPrevPath(location.pathname)
    }
  }, [location.pathname, prevPath])

  // 3D cube variants
  const cubeVariants = {
    initial: (direction: number) => ({
      rotateY: direction * 90,
      opacity: 0,
      z: -200,
    }),
    animate: {
      rotateY: 0,
      opacity: 1,
      z: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    exit: (direction: number) => ({
      rotateY: direction * -90,
      opacity: 0,
      z: -200,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    }),
  }

  return (
    <div className="cube-container">
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.div
          key={location.pathname}
          custom={direction}
          variants={cubeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="cube-face"
          style={{ transformOrigin: direction > 0 ? "left center" : "right center" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

