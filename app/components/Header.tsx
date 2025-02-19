import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";
import { Repeat, Code, AppWindow, Newspaper, Mail, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const controlHeaderVisibility = () => {
    if (isMenuOpen) return;

    const currentScrollPosition = window.pageYOffset;

    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
      setIsHeaderVisible(false);
    } else {
      setIsHeaderVisible(true);
    }

    setLastScrollPosition(currentScrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHeaderVisibility);

    return () => {
      window.removeEventListener("scroll", controlHeaderVisibility);
    };
  }, [lastScrollPosition, isMenuOpen]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`w-full py-4 px-4 fixed top-0 left-0 z-90 transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="w-full md:max-w-[95%] mx-auto bg-[#6d6d864f] backdrop-filter backdrop-blur-lg rounded-full flex justify-between items-center px-4 md:px-8 py-3 shadow-lg z-90">
        {/* Nombre "LWEB Schweiz" con scroll hacia arriba al hacer clic */}
        <div className="flex items-center cursor-pointer" onClick={scrollToTop}>
          <span className="text-blue-300 text-lg sm:text-xl md:text-2xl font-bold">LWEB</span>
          <span className="ml-2 text-[#ff69b4] text-lg sm:text-xl md:text-2xl font-bold">
            Schweiz
          </span>
        </div>

        {/* Botón del menú móvil */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="h-8 w-8 text-white transition-transform duration-300" />
            ) : (
              <Menu className="h-8 w-8 text-white transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Menú en pantallas grandes */}
        <nav className="hidden md:flex space-x-6">

          <Link
            to="/webs"
            className="text-white flex items-center space-x-2 hover:text-[#40e0d0] transition-colors duration-200 group"
          >
            <Code className="h-5 w-5 group-hover:scale-125 transition-transform duration-300" />
            <span>Webentwicklung</span>
          </Link>

          <Link
            to="/apps"
            className="text-white flex items-center space-x-2 hover:text-[#40e0d0] transition-colors duration-200 group"
          >
            <AppWindow className="h-5 w-5 group-hover:translate-y-[-4px] transition-transform duration-300" />
            <span>App-Entwicklung</span>
          </Link>

          <Link
            to="/remix" // Nuevo enlace agregado
            className="text-white flex items-center space-x-2 hover:text-[#40e0d0] transition-colors duration-200 group"
          >
            <Newspaper className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300 " />
            <span>Custom-Code</span>
          </Link>



          <Link
            to="/roberto"
            className="text-white flex items-center space-x-2 hover:text-[#40e0d0] transition-colors duration-200 group"
          >
            <span>Über mich</span>
            <img 
              src="/yo2.png" // Reemplaza esta ruta con la ubicación de tu imagen
              alt="Avatar de Roberto Salvador"
              className="w-10 h-10 rounded-full ml-2 border-2 border-gray-700"
            />
          </Link>
        </nav>
      </div>

      {/* Menú Móvil */}
      <div
        className={`absolute top-0 right-0 bg-[#9393b2d5] backdrop-filter backdrop-blur-lg rounded-lg p-6 mt-20 z-90 transition-all duration-300 ${
          isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
        }`}
      >

        <Link
          to="/webs"
          className="flex items-center space-x-2 hover:text-[#40e0d0] transition-colors duration-200 group mt-2"
        >
          <Code className="h-5 w-5 group-hover:scale-125 transition-transform duration-300" />
          <span>Webentwicklung</span>
        </Link>

        <Link
          to="/apps"
          className="flex items-center space-xl-4 hover:text-[#40e0d0] transition-colors duration-200 group text-center mt-5"
        >
          <AppWindow className="h-5 w-5 group-hover:translate-y-[-4px] transition-transform duration-300 mr-2" />
          <span>App-Entwicklung</span>
        </Link>

        <Link
          to="/remix" // Nuevo enlace agregado en el menú móvil
          className="flex items-center space-x-2 hover:text-[#40e0d0] transition-colors duration-200 group mt-5 "
        >
          <Newspaper className="h-5 w-5 group-hover:rotate-12 transition-transform duration-300 " />
          <span>Custom-Code</span>
        </Link>



        <Link
          to="/roberto"
          className="flex items-center space-xl-4 hover:text-[#40e0d0] transition-colors duration-200 group text-center mt-2"
        >
               <img 
            src="/yo2.png" // Reemplaza esta ruta con la ubicación de tu imagen
            alt="Avatar de Roberto Salvador"
            className="w-12 h-12 rounded-full mr-2 border-1 border-gray-600"
          />
          <span>Über mich</span>
     
        </Link>
      </div>
    </header>
  );
}
