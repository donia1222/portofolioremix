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
import { FiMessageSquare } from "react-icons/fi";
import Chat from "~/components/Chat";
import CookieBanner from "~/components/CookieBanner"; 

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

const backgroundImages = ["/logo2.jpg", "/space.jpg"];

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [stars, setStars] = useState<Star[]>([]);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const [gradientStyle, setGradientStyle] = useState({});
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const gradientAnimation = () => {
      let step = 0;
      const colors = ['#7e7e7e', '#f3f3f3', '#7e7e7e'];
      setInterval(() => {
        step = (step + 1) % 360;
        setGradientStyle({
          backgroundImage: `linear-gradient(${step}deg, ${colors.join(", ")})`,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          transition: "background-image 1s ease-in-out",
        });
      }, 100);
    };

    gradientAnimation();

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

    // Función para seleccionar una nueva imagen de fondo
    const selectNewBackground = () => {
      const lastImage = localStorage.getItem('lastBackgroundImage');
      let newImage;
      do {
        newImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
      } while (newImage === lastImage);
      
      localStorage.setItem('lastBackgroundImage', newImage);
      return `${newImage}?t=${new Date().getTime()}`;
    };

    // Establecer una nueva imagen de fondo
    setBackgroundImage(selectNewBackground());

    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-blue-900 to-indigo-900 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="star-field"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center space-y-4">
          <div className="w-16 h-16 rounded-full border-t-4 border-pink-500 border-solid animate-spin"></div>
          <div className="text-white text-xl font-semibold animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-blue-900 to-purple-900 relative overflow-auto">
      <div ref={backgroundRef} className="fixed inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Fondo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

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
      <nav className="absolute top-0 left-0 right-0 flex justify-center items-center p-8 z-20">
        <Header />
        <div className="w-full max-w-[80%]">
        </div>
      </nav>

      <main className="text-center mt-56 relative">
        <h2
          className="text-4xl md:text-6xl font-bold text-white mb-6 max-w-4xl mx-auto"
          data-aos="fade-up"
          style={gradientStyle}
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
        <PublishedAppsBlock/>
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