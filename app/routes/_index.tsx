import { Link } from "@remix-run/react";
import Header from "~/components/Header";
import DeliverBlock from "~/components/DeliverBlock";
import CorePrinciplesBlock from "~/components/CorePrinciplesBlock";
import OpenSourceBlock from "~/components/OpenSourceBlock"; 
import CommunityBlock from "~/components/CommunityBlock"; 
import Corazones from "~/components/Corazones"; 
import ContactModule from "~/components/ContactModule"; 
import PublishedAppsBlock from "~/components/published-apps-block"; 
import { useEffect, useState, useRef } from "react";
import TechnologyCarousel from "~/components/TechnologyCarousel"; 
import AOS from "aos";
import type { LinksFunction } from "@remix-run/node";
import { FiMessageSquare } from "react-icons/fi"; // Importar el ícono de chat
import Chat from "~/components/Chat"; // Importar el componente Chat
import CookieBanner from "~/components/CookieBanner"; 
import TechnologyCarousemisapps from "~/components/TechnologyCarousemisapps"; 

// Función links para incluir CSS de AOS
export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css",
      integrity: "sha512-pvYprV3PQstB6Oa6QvSwc0u5A/BdrXBtU1cVQw+KvA0kCw9vF3Wc50FEsl+wEQPjhJwP6jLeY+VYgeNU9uKeiQ==",
      crossOrigin: "anonymous",
      referrerPolicy: "no-referrer",
    },
    // Añade aquí otros estilos si es necesario
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
  const [stars, setStars] = useState<Star[]>([]);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [gradientStyle, setGradientStyle] = useState({});
  
  // Estado para controlar la visibilidad del chat
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    // Inicializar AOS
    AOS.init({
      duration: 1000, // Duración de la animación en ms
      once: true,      // Si la animación solo debe ocurrir una vez
    });

    // Animación de gradiente
    const gradientAnimation = () => {
      let step = 0;
      const colors = ['#7e7e7e', '#f3f3f3', '#7e7e7e']; // Colores del gradiente
      setInterval(() => {
        step = (step + 1) % 360;
        setGradientStyle({
          backgroundImage: `linear-gradient(${step}deg, ${colors.join(", ")})`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          transition: "background-image 1s ease-in-out",
        });
      }, 100); // Ajusta la velocidad de la animación
    };

    gradientAnimation();

    // Inicializar estrellas con más cantidad y tamaños variados
    const initialStars = Array.from({ length: 300 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,             // Posición X en porcentaje
      y: Math.random() * 100,             // Posición Y en porcentaje
      size: Math.random() * 4 + 1,        // Tamaño entre 1px y 5px
      speed: Math.random() * 0.05 + 0.01, // Velocidad de movimiento
      opacity: Math.random() * 0.5 + 0.5, // Opacidad entre 0.5 y 1
    }));
    setStars(initialStars);

    // Animar estrellas usando requestAnimationFrame para mejor rendimiento
    let animationFrameId: number;

    const animateStars = () => {
      setStars((prevStars) =>
        prevStars.map((star) => ({
          ...star,
          x: (star.x + star.speed) % 100, // Mover hacia la derecha y reiniciar al llegar al 100%
        }))
      );
      animationFrameId = requestAnimationFrame(animateStars);
    };

    animateStars();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-purple-900 relative overflow-auto">
      {/* Fondo con imagen fija */}
      <div ref={backgroundRef} className="fixed inset-0 z-0">
        <img
          src="/logo2.jpg" // Asegúrate de que la imagen esté en public/logo2.jpg
          alt="Fondo"
          className="w-full h-full object-cover"
        />
        {/* Superposición oscura opcional */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

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
      <CookieBanner />
      {/* Encabezado y contenido */}
      <nav className="absolute top-0 left-0 right-0 flex justify-center items-center p-8 z-20">
        <Header />
        <div className="w-full max-w-[80%]">
        </div>
      </nav>

      <main className="text-center mt-56 relative">
        <h2
          className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto"
          data-aos="fade-up"
          style={gradientStyle} // Aplicar estilo de gradiente animado
        >
          MODERNIZE YOUR DECISIONS
        </h2>

        <p
          className="text-xl text-blue-200 max-w-2xl mx-auto p-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Moderne Webseiten, KI-Lösungen, App-Entwicklung, Custom Plugins und mehr.
        </p>
        
      </main>




      {/* Secciones con animaciones */}
      <div id="deliverBlock" className="w-full relative" data-aos="fade-up">
        <DeliverBlock />
      </div>

      <div id="corePrinciplesBlock" className="w-full relative" data-aos="fade-up" data-aos-delay="200">
        <CorePrinciplesBlock />
      </div>

      <div id="corePrinciplesBlock" className="w-full relative" data-aos="fade-up" data-aos-delay="200">
        <Corazones />
      </div>


      <div id="communityBlock" className="w-full relative" data-aos="fade-up" data-aos-delay="1000">
        <CommunityBlock />
      </div>


      <div id="openSourceBlock" className="w-full relative" data-aos="fade-up" data-aos-delay="400">
        <OpenSourceBlock />
      </div>

      <div id="publishedAppsBlock" className="w-full relative" data-aos="fade-up" data-aos-delay="600">
        <TechnologyCarousemisapps />
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
