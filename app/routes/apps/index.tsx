import { blogPosts } from "~/data/Apps"
import { Link } from "@remix-run/react"
import AppBlock from "~/components/AppBlock"; 

import { useState, useEffect } from "react";
export default function BlogIndex() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="min-h-screen relative">
      {/* Fondo con animación de zoom */}
      <div 
        className="fixed inset-0 bg-[url('/5532919.jpg')] bg-cover bg-center transform transition-transform duration-[10000ms] ease-in-out animate-zoom"
        style={{ backgroundAttachment: 'fixed' }}
      />
      <div className="fixed inset-0 bg-black bg-opacity-50" />

      {/* Estrella fugaz */}
      <div className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full animate-shootingStar" />
      <Link
  to="/"
  className="fixed top-6 left-6 z-20 text-blue-100 hover:text-blue-100 transition-colors duration-300"
>
  <div className="h-12 w-12 bg-blue-500 rounded-full flex items-center justify-center">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
    </svg>
  </div>
</Link>



      <div id="corePrinciplesBlock" className="w-full relative" data-aos="fade-up" data-aos-delay="200">
        <AppBlock />
      </div>

      <div className="relative ">
      <header
      className={`w-full py-4 px-4 fixed top-0 left-0 z-90 transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
     
        {/* Nombre "LWEB Schweiz" con scroll hacia arriba al hacer clic */}
        <div className="w-full md:max-w-[30%] mx-auto bg-[#6d6d8617] backdrop-filter backdrop-blur-lg rounded-full flex justify-center items-center px-4 md:px-8 py-3 shadow-lg z-10">
  {/* Nombre "Cosmic News" con scroll hacia arriba al hacer clic */}
  <div className="flex items-center justify-center cursor-pointer" onClick={scrollToTop}>
    <span className="text-blue-400 text-lg sm:text-xl md:text-3xl font-bold">App</span>
    <span className="ml-2 text-[#ff69b4] text-lg sm:text-xl md:text-3xl font-bold">Entwicklung</span>
  </div>

      </div>


    </header>
      </div>
    </div>
  )
}

