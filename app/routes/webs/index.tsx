import { blogPosts } from "~/data/Apps";
import { Link } from "@remix-run/react";
import WebsiteBlock from "~/components/webs/WebsiteBlock"; 
import Websitecomponent from "~/components/webs/websitecomponent"; 
import Wencompometopen from "~/components/webs/wencompometopen"; 
import { useState, useEffect } from "react";
import AnimatedGradientText from '~/components/AnimatedGradientText'; 
import Calculo from "~/components/Calculo"; 
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
    }, 0);  // 1 segundo de carga

    return () => clearTimeout(timer);
  }, []);

  // Loader más moderno y relacionado con temática espacial
  if (isLoading) {
    return (
      <div className="min-h-screen bg-animated-gradient bg-400% animate-gradientAnimation relative overflow-auto">
        {/* Estrellas animadas como fondo */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="star-field"></div>
        </div>

        {/* Loader moderno */}
        <div className="relative z-10 flex flex-col items-center space-y-4">
          {/* Loader animado estilo "planeta giratorio" */}
          <div className="w-16 h-16 rounded-full border-t-4 border-pink-500 border-solid animate-spin mt-96"></div>

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
      <div className="min-h-screen bg-animated-gradient bg-400% animate-gradientAnimation relative overflow-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50" />

      {/* Estrella fugaz */}
      <div className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full animate-shootingStar" />
 

      <div id="corePrinciplesBlock" className="w-full relative" data-aos="fade-up" data-aos-delay="200">
             
      <div className=" bg-cover bg-center flex flex-col items-center justify-start font-poppins rounded-lg mt-40 ">
      <AnimatedGradientText texts={['Responsive', 'Schnell', 'Modern', 'Animiert']} className="text-white" />
                  </div>
      
        <Websitecomponent />
        
        <Wencompometopen />

        <WebsiteBlock />
        <Calculo />
      
   </div>

  
      </div>

      <div className="relative">
        <header
          className={`w-full py-4 px-4 fixed top-0 left-0 z-90 transition-transform duration-300 ${
            isHeaderVisible ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="w-full md:max-w-[50%] mx-auto bg-[#6d6d864f] backdrop-filter backdrop-blur-lg rounded-full flex justify-center items-center px-4 md:px-8 py-3 shadow-lg z-10">
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
            <div className="flex items-center justify-center cursor-pointer" onClick={scrollToTop}>
              <span className="text-blue-400 text-lg sm:text-xl md:text-3xl font-bold">Moderne</span>
              <span className="ml-2 text-[#ff69b4] text-lg sm:text-xl md:text-3xl font-bold">Webentwicklung</span>
            </div>
          </div>
        </header>

      </div>
    </div>
  );
}
