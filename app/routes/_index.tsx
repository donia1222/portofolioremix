// Importaciones existentes
import { Link } from "@remix-run/react";
import Header from "~/components/Header";
import DeliverBlock from "~/components/DeliverBlock";
import CorePrinciplesBlock from "~/components/CorePrinciplesBlock";
import OpenSourceBlock from "~/components/OpenSourceBlock"; 
import CommunityBlock from "~/components/CommunityBlock"; 
import Corazones from "~/components/Corazoneshome"; 
import ContactModule from "~/components/contactModuledos"; 
import TechnologyCarousel from "~/components/TechnologyCarousel/TechnologyCarousel"; 
import { useEffect, useState, useRef } from "react";
import AOS from "aos";
import type { LinksFunction } from "@remix-run/node";
import { FiMessageSquare } from "react-icons/fi";
import Chat from "~/components/Chat";
import CookieBanner from "~/components/CookieBanner"; 
import TechnologyCarousemisappsindex from "~/components/TechnologyCarousel/TechnologyCarousemisappsindex"; 
import CloudTextBlock5 from '~/components/CloudTextBlock/CloudTextBlock'; 

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
  const [isChatVisible, setIsChatVisible] = useState(true);
  // Guardamos la posición anterior del scroll
  const lastScrollY = useRef(0);

  // Ejemplo de chips para algún otro componente o funcionalidad
  const chips = [
    "Moderne Webseiten",
    "KI-Lösungen",
    "App-Entwicklung",
    "Custom Plugins",
    "und mehr"
  ];

  useEffect(() => {
    // Inicializa AOS
    AOS.init({ once: true });

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Si el scroll actual es mayor que el anterior (scroll hacia abajo) y supera un umbral, ocultamos el Chat
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsChatVisible(false);
      }
      // Si el usuario hace scroll hacia arriba, mostramos el Chat
      else if (currentScrollY < lastScrollY.current) {
        setIsChatVisible(true);
      }
      // Actualizamos la posición anterior
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-animated-gradient bg-400% animate-gradientAnimation relative overflow-auto">
      <div className="fixed inset-0 bg-black bg-opacity-70" />

      {/* Banner de Cookies */}
      <CookieBanner />

      {/* Navegación */}
      <nav className="absolute top-0 left-0 right-0 flex justify-center items-center p-8 z-20">
        <Header />
      </nav>

      {/* Contenido Principal */}
      <main className="text-center relative p-10">
        {/* Aquí puedes agregar el contenido principal */}
      </main>

      <CloudTextBlock5 />

      {/* Bloques de Contenido con Animaciones AOS */}
      <div id="deliverBlock" className="w-full relative" data-aos="fade-up">
        <DeliverBlock />
      </div>

      <div id="corePrinciplesBlock" className="w-full relative" data-aos="fade-up" data-aos-delay="200">
        <CorePrinciplesBlock />
      </div>

      <div id="communityBlock" className="w-full relative" data-aos="fade-up" data-aos-delay="1000">
        <CommunityBlock />
      </div>

      <div id="openSourceBlock" className="w-full relative" data-aos="fade-up" data-aos-delay="400">
        <OpenSourceBlock />
      </div>

      <div id="technologyCarousel" className="w-full relative" data-aos="fade-up" data-aos-delay="800">
        <TechnologyCarousel />
      </div>

      <div id="contactModule" className="w-full relative" data-aos="fade-up" data-aos-delay="1200">
        <ContactModule />
      </div>

      {/* Condicionalmente renderizamos el Chat según el scroll */}
      {isChatVisible && (
        <div id="Chat" className="w-full relative" data-aos="fade-up" data-aos-delay="1200">
          <Chat />
        </div>
      )}
    </div>
  );
}
