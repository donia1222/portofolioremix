// Importaciones existentes
import { Link } from "@remix-run/react";
import Header from "~/components/Header";
import DeliverBlock from "~/components/DeliverBlock";
import CorePrinciplesBlock from "~/components/CorePrinciplesBlock";
import OpenSourceBlock from "~/components/OpenSourceBlock"; 
import CommunityBlock from "~/components/CommunityBlock"; 
import Corazones from "~/components/Corazones"; 
import ContactModule from "~/components/ContactModule"; 
import TechnologyCarousel from "~/components/TechnologyCarousel"; 
import { useEffect, useState } from "react";
import AOS from "aos";
import type { LinksFunction } from "@remix-run/node";
import { FiMessageSquare } from "react-icons/fi";
import Chat from "~/components/Chat";
import CookieBanner from "~/components/CookieBanner"; 
import TechnologyCarousemisappsindex from "~/components/TechnologyCarousemisappsindex"; 

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css",
      integrity: "sha512-pvYprV3PQstB6Oa6QvSwc0u5A/BdrXBtU1cVQw+KvA0kCw9vF3Wc50FEsl+wEQPjhJwP6jLeY+VYgeNU9uKeiQ==",
      crossOrigin: "anonymous",
      referrerPolicy: "no-referrer",
    },
  ];
};

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [stars, setStars] = useState<Star[]>([]);
  
  const chips = [
    "Moderne Webseiten",
    "KI-Lösungen",
    "App-Entwicklung",
    "Custom Plugins",
    "und mehr"
  ]

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    // Inicializar estrellas
    const initialStars = Array.from({ length: 300 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 0.05 + 0.01,
      opacity: Math.random() * 0.5 + 0.5,
    }));
    setStars(initialStars);

    let animationFrameId: number;

    const animateStars = () => {
      setStars((prevStars) =>
        prevStars.map((star) => ({
          ...star,
          x: (star.x + star.speed) % 100,
        }))
      );
      animationFrameId = requestAnimationFrame(animateStars);
    };

    animateStars();

    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {

    return (
        <div className="min-h-screen bg-animated-gradient bg-400% animate-gradientAnimation relative overflow-auto">
        <div className="absolute inset-0 overflow-hidden">
          <div className="star-field"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center space-y-4">
          <div className="w-16 h-16 rounded-full border-t-4 border-pink-500 border-solid animate-spin mt-96"></div>
      
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-animated-gradient bg-400% animate-gradientAnimation relative overflow-auto">
      {/* Estrellas */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full transition-all duration-50 ease-linear"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.y}%`,
              left: `${star.x}%`,
              opacity: star.opacity,
            }}
          />
        ))}
      </div>
      
      {/* Banner de Cookies */}
      <CookieBanner />

      {/* Navegación */}
      <nav className="absolute top-0 left-0 right-0 flex justify-center items-center p-8 z-20">
        <Header />
        <div className="w-full max-w-[80%]">
          {/* Puedes agregar elementos adicionales aquí */}
        </div>
      </nav>

      {/* Contenido Principal */}
      <main className="text-center mt-56 relative">
      <h2
          className="text-4xl md:text-6xl font-bold text-gray-300 mb-6 max-w-4xl mx-auto"
          data-aos="fade-up"
        >
          MODERNIZE YOUR DECISIONS
        </h2>

        <div
          className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto p-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {chips.map((chip, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-300 rounded-full text-sm font-semibold"
            >
              {chip}
            </span>
          ))}
        </div>
      </main>

      {/* Bloques de Contenido con Animaciones AOS */}
      <div id="deliverBlock" className="w-full relative" data-aos="fade-up">
        <DeliverBlock />
      </div>

      <div id="corePrinciplesBlock" className="w-full relative" data-aos="fade-up" data-aos-delay="200">
        <CorePrinciplesBlock />
      </div>

      <div id="corazonesBlock" className="w-full relative" data-aos="fade-up" data-aos-delay="200">
        <Corazones />
      </div>

      <div id="communityBlock" className="w-full relative" data-aos="fade-up" data-aos-delay="1000">
        <CommunityBlock />
      </div>

      <div id="openSourceBlock" className="w-full relative" data-aos="fade-up" data-aos-delay="400">
        <OpenSourceBlock />
      </div>

 
      <div id="publishedAppsBlock" className="w-full relative" data-aos="fade-up" data-aos-delay="600">
        <TechnologyCarousemisappsindex/>
      </div>


      <div id="technologyCarousel" className="w-full relative" data-aos="fade-up" data-aos-delay="800">
        <TechnologyCarousel />
      </div>

      <div id="contactModule" className="w-full relative" data-aos="fade-up" data-aos-delay="1200">
        <ContactModule />
      </div>

      <div id="Chat" className="w-full relative" data-aos="fade-up" data-aos-delay="1200">
        <Chat />
      </div>
    </div>
  );
}
