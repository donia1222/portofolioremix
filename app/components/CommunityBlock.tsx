"use client"

import { motion } from "framer-motion"
import { ArrowRight, Newspaper, Calculator } from 'lucide-react'
import { Link } from "@remix-run/react"

export default function Component() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white bg-opacity-10 backdrop-blur-lg  bg-gradient-to-r mt-20 mb-20 ">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]"
        >
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl xl:text-5xl/none text-white text-center">
                Aktuelle Neuigkeiten
              </h2>
      
            </div>
          </div>
          <div className="flex flex-col items-start space-y-4">
            <Link
              to="/blog#animierte-und-dynamische-webseiten-im-jahr-2025"
              className="w-full"
            >
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="w-full p-6 bg-blue-900 bg backdrop-blur-lg rounded-2xl shadow-lg hover:bg-opacity-20 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500 p-3 rounded-full">
                    <Newspaper className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
                    Vorteile der Beauftragung eines Freelancer
                    </h3>
            
                  </div>
                  <ArrowRight className="h-5 w-5 text-blue-300 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </motion.div>
            </Link>

            <Link
            to="/calculo"
  className="w-full"
>
  <motion.div
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
    className="w-full p-6 bg-blue-900  backdrop-blur-lg rounded-2xl shadow-lg hover:bg-opacity-20 transition-all duration-300 group"
  >
    <div className="flex items-center space-x-4">
      <div className="bg-blue-500 p-3 rounded-full">
        <Calculator className="h-6 w-6 text-white" />
      </div>
      <div className="flex-1 space-y-1">
        <h3 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors duration-300">
          Wie viel kostet eine Webseite?
        </h3>
      </div>
      <ArrowRight className="h-5 w-5 text-blue-300 group-hover:translate-x-1 transition-transform duration-300" />
    </div>
  </motion.div>
</Link>

          </div>
        </motion.div>
      </div>
    </section>
  )
}