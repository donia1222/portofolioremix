// Importaciones existentes
import { Link } from "@remix-run/react";
import Header from "~/components/Header";
import DeliverBlock from "~/components/DeliverBlock";
import CorePrinciplesBlock from "~/components/CorePrinciplesBlock";
import OpenSourceBlock from "~/components/OpenSourceBlock"; 
import CommunityBlock from "~/components/Community/CommunityBlock"; 
import Corazones from "~/components/Corazones/Corazoneshome"; 
import ContactModule from "~/components/Contact/contactModuleFooter"; 
import TechnologyCarousel from "~/components/TechnologyCarousel/TechnologyCarousel"; 
import { useEffect, useState } from "react";
import AOS from "aos";
import type { LinksFunction } from "@remix-run/node";
import { FiMessageSquare } from "react-icons/fi";
import Chat from "~/components/Chat";
import CookieBanner from "~/components/CookieBanner"; 
import TechnologyCarousemisappsindex from "~/components/TechnologyCarousel/TechnologyCarousemisappsindex"; 
import CloudTextBlock5 from '~/components/CloudTextBlock/CloudTextBlock'; 
import CloudTextAnime from '~/components/CloudTextBlock/AnimateTexVida'; 
import ScrollToTop from "~/components/scroll-to-top"
import CardStack from "../components/webs/PortfolioGrid"
import FreelanceAvailability from "../components/freelance-availability"
import CommunityTemplate from "~/components/Community/CommunityTemplate";
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

;


  return (
    <div className="min-h-screen bg-animated-gradient bg-400% animate-gradientAnimation relative overflow-auto">
    <div className="fixed inset-0 bg-black bg-opacity-90" />

      
 
      {/* Banner de Cookies */}
      <CookieBanner />

      {/* Navegación */}
      <nav className="absolute top-0 left-0 right-0 flex justify-center items-center p-8 z-20">
        <Header />

      </nav>

      <CloudTextBlock5 />

      {/* Bloques de Contenido con Animaciones AOS */}
      <div id="deliverBlock" className="w-full relative" data-aos="fade-up">
        <DeliverBlock />
      </div>

      <div id="corePrinciplesBlock" className="w-full relative" data-aos="fade-up" data-aos-delay="200">
        <CorePrinciplesBlock />
      </div>


      <div id="communityBlock" className="w-full relative" data-aos="fade-up" data-aos-delay="1000">
        <CommunityTemplate/>
      </div>

      <div id="contactModule" className="w-full relative" data-aos="fade-up" data-aos-delay="1200">
        <CloudTextAnime />
      </div>


      <div id="openSourceBlock" className="w-full relative" data-aos="fade-up" data-aos-delay="400">
        <OpenSourceBlock />
      </div>





      <div id="technologyCarousel" className="w-full relative" data-aos="fade-up" data-aos-delay="800">
        <TechnologyCarousel />
      </div>
      <FreelanceAvailability />
      <div id="contactModule" className="w-full relative" data-aos="fade-up" data-aos-delay="1200">
        <ContactModule />
      </div>

      <div id="Chat" className="w-full relative" data-aos="fade-up" data-aos-delay="1200">
        <Chat />
      </div>
      <ScrollToTop />
    </div>
  );
}
