import { blogPosts } from "~/data/Apps";
import { Link } from "@remix-run/react";
import AppBlock from "~/components/AppBlock"; 

import { useState, useEffect } from "react";

export default function BlogIndex() {
  const [isLoading, setIsLoading] = useState(true);  // Estado para el loader
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Efecto para simular el tiempo de carga de 1 segundo
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);  // 1 segundo de carga

    return () => clearTimeout(timer);
  }, []);

  // Loader más moderno y relacionado con temática espacial
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-purple-900 to-indigo-900 relative">
        {/* Estrellas animadas como fondo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="star-field"></div>
        </div>

        {/* Loader moderno */}
        <div className="relative z-10 flex flex-col items-center space-y-4">
          {/* Loader animado estilo "planeta giratorio" */}
          <div className="w-16 h-16 rounded-full border-t-4 border-pink-500 border-solid animate-spin"></div>

          {/* Texto animado */}
          <div className="text-white text-xl font-semibold animate-pulse">
         
          </div>
        </div>
      </div>
    );
  }

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

      <div id="corePrinciplesBlock" className="w-full relative" data-aos="fade-up" data-aos-delay="200">
        <AppBlock />
      </div>

      <div className="relative">
        <header
          className={`w-full py-4 px-4 fixed top-0 left-0 z-90 transition-transform duration-300 ${
            isHeaderVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="w-full md:max-w-[50%] mx-auto bg-[#6d6d8617] backdrop-filter backdrop-blur-lg rounded-full flex justify-center items-center px-4 md:px-8 py-3 shadow-lg z-50">
            {/* Nombre "App Entwicklung" con scroll hacia arriba al hacer clic */}
            <div className="flex items-center justify-center cursor-pointer" onClick={scrollToTop}>
              <span className="text-blue-400 text-lg sm:text-xl md:text-3xl font-bold">App</span>
              <span className="ml-2 text-[#ff69b4] text-lg sm:text-xl md:text-3xl font-bold">Entwicklung</span>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}
