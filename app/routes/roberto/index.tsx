import { blogPosts } from "~/data/Apps";
import { Link } from "@remix-run/react";
import WebsiteBlock from "~/components/webs/WebsiteBlock"; 
import Websitecomponent from "~/components/webs/ubermich"; 
import ImageRevealTextScroll from "~/components/image-reveal-text-scroll"; 
import { useState, useEffect } from "react";
import Corazones from "~/components/Corazones/Corazonesdos"; 
import ContactModule from "~/components/Contact/contactModuledos"; 
import Header from "~/components/Header";

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
    }, 100);  // 1 segundo de carga

    return () => clearTimeout(timer);
  }, []);

  // Loader más moderno y relacionado con temática espacial
  if (isLoading) {
    return (
      <div className="min-h-screen bg-animated-gradient bg-400% animate-gradientAnimation relative overflow-auto">
        {/* Estrellas animadas como fondo */}
        <div className="absolute inset-0 overflow-hidden">

        </div>

        {/* Loader moderno */}
        <div className="relative z-10 flex flex-col items-center space-y-4">
          {/* Loader animado estilo "planeta giratorio" */}
          <div className="w-16 h-16 rounded-full border-t-4 border-pink-500 border-solid animate-spin mt-96 d"></div>

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
        className="fixed inset-0 bg-[url('/programming-background-with-person-working-with-codes-computer.jpg')] bg-cover bg-center transform transition-transform duration-[10000ms] ease-in-out animate-zoom"
        style={{ backgroundAttachment: 'fixed' }}
      />
      <div className="fixed inset-0 bg-black bg-opacity-50" />

      <div id="corePrinciplesBlock" className="w-full relative" data-aos="fade-up" data-aos-delay="200 ">
        <Websitecomponent />

        <div id="corePrinciplesBlock" className="w-full relative" data-aos="fade-up" data-aos-delay="200">
        <Corazones />
        <ContactModule /> 
      </div>
      
      </div>
      <div className="relative">
      <div className="relative z-[9999]">
  <Header />
</div>


      </div>
    </div>
    
  );
}
