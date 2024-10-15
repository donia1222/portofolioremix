import { Link } from "@remix-run/react";
import { useState, useEffect } from "react";
import { FiGrid, FiRefreshCw, FiUsers, FiMail, FiMenu, FiX, FiCode } from "react-icons/fi";

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
    if (isMenuOpen) return; // Si el menú está abierto, no ocultes el header

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
      <div className="w-full md:max-w-[100%] mx-auto bg-[#6d6d864f] backdrop-filter backdrop-blur-lg rounded-full flex justify-between items-center px-4 md:px-8 py-3 shadow-lg z-90">
        {/* Nombre "Roberto Salvador" con scroll hacia arriba al hacer clic */}
        <div className="flex items-center cursor-pointer" onClick={scrollToTop}>
          <span className="text-blue-300 text-lg sm:text-xl md:text-2xl font-bold">LWEB</span>
          <span className="ml-2 text-[#ff69b4] text-lg sm:text-xl md:text-2xl font-bold">
            Schweiz
          </span>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <FiX className="h-8 w-8 text-white transition-transform duration-300" />
            ) : (
              <FiMenu className="h-8 w-8 text-white transition-transform duration-300" />
            )}
          </button>
        </div>

        <nav className="hidden md:flex space-x-6">

          <button
            onClick={() => handleScroll("corePrinciplesBlock")}
            className="text-white flex items-center space-x-2 hover:text-[#40e0d0] transition-colors duration-200"
          >
            <FiRefreshCw className="h-5 w-5" />
            <span>Core Principles</span>
          </button>
          <button
            onClick={() => handleScroll("openSourceBlock")}
            className="text-white flex items-center space-x-2 hover:text-[#40e0d0] transition-colors duration-200"
          >
            <FiCode className="h-5 w-5" />
            <span>Open Source</span>
          </button>

          <button
          onClick={() => handleScroll("publishedAppsBlock")}
          className="text-white flex items-center space-x-2 hover:text-[#40e0d0] transition-colors duration-200"
        >
       <FiCode className="h-5 w-5" />
          <span>Apps</span>
        </button>

          <button
            onClick={() => handleScroll("communityBlock")}
            className="text-white flex items-center space-x-2 hover:text-[#40e0d0] transition-colors duration-200"
          >

<FiUsers className="h-5 w-5" />
            <span>Community</span>
          </button>


          <button
            onClick={() => handleScroll("contactModule")}
            className="text-white flex items-center space-x-2 hover:text-[#40e0d0] transition-colors duration-200"
          >
            
            <FiMail className="h-5 w-5" />
            <span>Contact</span>
          </button>
        </nav>
      </div>

      {/* Menú Móvil */}
      <div
        className={`absolute top px left 0 right 0 bg-[#9393b2d5] backdrop-filter backdrop-blur-lg rounded-lg p-6 mt-4 ml-40 z-90 transition-all duration-300 ${
          isMenuOpen ? "scale-100 opacity-100 translate-y-0" : "scale-95 opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <button
          onClick={() => handleScroll("deliverBlock")}
          className="w-full text-left py-2 flex items-center space-x-2 hover:bg-[#4b0082] rounded-lg transition-colors duration-200"
        >
          <FiGrid className="h-5 w-5" />
          <span>Deliver</span>
        </button>
        <button
          onClick={() => handleScroll("corePrinciplesBlock")}
          className="w-full text-left py-2 flex items-center space-x-2 hover:bg-[#4b0082] rounded-lg transition-colors duration-200"
        >
          <FiRefreshCw className="h-5 w-5" />
          <span>Core Principles</span>
        </button>
        <button
          onClick={() => handleScroll("openSourceBlock")}
          className="w-full text-left py-2 flex items-center space-x-2 hover:bg-[#4b0082] rounded-lg transition-colors duration-200"
        >
          <FiCode className="h-5 w-5" />
          <span>Open Source</span>
        </button>
        <button
          onClick={() => handleScroll("publishedAppsBlock")}
          className="w-full text-left py-2 flex items-center space-x-2 hover:bg-[#4b0082] rounded-lg transition-colors duration-200"
        >
       <FiCode className="h-5 w-5" />
          <span>Apps</span>
        </button>
        <button
          onClick={() => handleScroll("communityBlock")}
          className="w-full text-left py-2 flex items-center space-x-2 hover:bg-[#4b0082] rounded-lg transition-colors duration-200"
        >

          <FiUsers className="h-5 w-5" />
          <span>Community</span>
        </button>
        <button
          onClick={() => handleScroll("contactModule")}
          className="w-full text-left py-2 flex items-center space-x-2 hover:bg-[#4b0082] rounded-lg transition-colors duration-200"
        >
          <FiMail className="h-5 w-5" />
          <span>Contact</span>
        </button>
      </div>
    </header>
  );
}
