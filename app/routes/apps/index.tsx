
import AppBlock from "~/components/AppBlock"; 
import Header from "~/components/Header";
import ContactModule from "~/components/Contact/contactModuledos"; 
import ScrollToTop from "~/components/scroll-to-top"
import { useState, useEffect } from "react";
import FreelanceAvailability from "~/components/freelance-availability"

export default function BlogIndex() {
  const [isLoading, setIsLoading] = useState(true);  // Estado para el loader



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




      <div className="relative">
      <div className="relative z-[9999]">
  <Header />
  


  <div id="corePrinciplesBlock" className="w-full relative" data-aos="fade-up" data-aos-delay="200">
        <AppBlock />
      </div>


</div>
<div id="contactModule" className="w-full relative" data-aos="fade-up" data-aos-delay="1200">
<FreelanceAvailability />
        <ContactModule />
      </div>
      <ScrollToTop />
      </div>
    </div>
    </div>
  );
}
