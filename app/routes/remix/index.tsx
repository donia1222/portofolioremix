'use client'

import { useState, useEffect } from 'react'
import { Link } from '@remix-run/react'
import { ArrowLeft, ArrowUp } from 'lucide-react'
import { motion } from 'framer-motion'
import CloudTextBlock from '~/components/showcase/CloudTextBlock'
import CloudTextBlock2 from '~/components/showcase/CloudTextBlock2'
import CloudTextBlock3 from '~/components/showcase/CloudTextBlock3'
import CloudTextBlock4 from '~/components/showcase/CloudTextBlock4'
import CloudTextBlock5 from '~/components/showcase/CloudTextBlock5'
import CloudTextBlock6 from '~/components/showcase/CloudTextBlock6'
import CloudTextBlock7 from '~/components/showcase/CloudTextBlock7'

import { PromptingIsAllYouNeed } from '~/components/PromptingIsAllYouNeed';

const components = [

  { name: '', Component: CloudTextBlock4, code: `// Código de CloudTextBlock4` },
  { name: '', Component: CloudTextBlock6, code: `// Código de CloudTextBlock6` },
  { name: '', Component: CloudTextBlock7, code: `// Código de CloudTextBlock7` },
]

export default function Component() {
  const [showScrollButton, setShowScrollButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true)
      } else {
        setShowScrollButton(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-animated-gradient bg-400% animate-gradientAnimation relative overflow-auto">
           <div className="w-full md:max-w-[50%] mx-auto bg-[#6d6d864f] backdrop-filter backdrop-blur-lg rounded-full flex justify-center items-center px-4 md:px-8 py-3 shadow-lg z-10 mt-4">
            
          <Link
        to="/"
        className="fixed  left-2 z-20 text-blue-100 hover:text-blue-100 transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
     
      </Link>
            {/* Nombre "Moderne Webentwicklung" con scroll hacia arriba al hacer clic */}
            <div className="flex items-center justify-center cursor-pointer"  onClick={scrollToTop}>
              <span className="text-blue-300 text-lg sm:text-xl md:text-3xl font-bold">React </span>
              <span className="ml-2 text-[#ff69b4] text-lg sm:text-xl md:text-3xl font-bold"> Custom-Code</span>
              
            </div>

          </div>
 
      <header className="p-10 mt-10">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <motion.h1
            className="text-3xl font-bold text-gray-100"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            Animierte Textkomponenten für<span className="ml-2 text-[#ff69b4] text-4xl font-bold"> Remix </span>
          </motion.h1>
          <p className="text-lg text-gray-300 mt-10">
            Dies ist ein Beispiel dafür, was ich tun kann, beispielsweise für Remix. Darüber hinaus kann ich
            benutzerdefinierte Plugins und Module für andere Frameworks, CMS oder nativen Code entwickeln.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 ">
      <div className="px-4 py-5 sm:p-6   sm:rounded-lg ">

<PromptingIsAllYouNeed />
</div>
        {components.map(({ name, Component, code }, index) => (
          <div
            key={index}
            className="mb-12 bg-white bg-opacity-90 shadow-lg overflow-hidden sm:rounded-lg transition-all hover:shadow-xl"
          >
            <div className="px-4 py-5 sm:px-6">
              <h2 className="text-xl leading-6 font-semibold text-gray-900">{name}</h2>
            </div>
       
            <div className="px-4 py-5 sm:p-6">
              <Component />
         
            </div>
          </div>
        ))}
      </main>

      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6 text-gray-800" />
        </button>
      )}

      <div className="text-center py-8">

        <Link
          to="https://animated-text-components-for-remix.vercel.app"
          className="inline-block bg-[#ff69b4] text-white font-bold py-2 px-4 rounded-full hover:bg-opacity-80 transition-colors duration-300"
        >
         mehr...
        </Link>
      </div>
    </div>
  )
}