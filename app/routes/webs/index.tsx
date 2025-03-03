import { blogPosts } from "~/data/Apps";
import { Link } from "@remix-run/react";
import WebsiteBlock from "~/components/webs/WebsiteBlock"; 
import Websitecomponent from "~/components/webs/websitecomponent"; 
import Wencompometopen from "~/components/webs/wencompometopen"; 
import { useState, useEffect } from "react";
import AnimatedGradientText from '~/components/AnimatedGradientText'; 
import Header from "~/components/Header";
import { motion } from "framer-motion"
import { ArrowRight, Newspaper, Calculator } from 'lucide-react'
import ContactModule from "~/components/contactModuledos"; 
import CommunityBlock from "~/components/CommunityBlockWeb"; 
import ScrollToTop from "~/components/scroll-to-top"
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

                  <div className="relative z-[9999]">
  <Header />
</div>

        <Websitecomponent />
        
        <CommunityBlock />å

        <Wencompometopen />

        <WebsiteBlock />


   </div>
   <ScrollToTop />
  
      </div>

      <div className="relative">

      </div>
    </div>
  );
}
