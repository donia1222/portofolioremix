import React, { useEffect, useState } from "react";

const ScrollBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Posición de scroll actual
      const docHeight = document.documentElement.scrollHeight - window.innerHeight; // Altura total del documento menos la ventana
      const scrollPercent = (scrollTop / docHeight) * 100; // Calculamos el porcentaje de scroll
      setScrollPercentage(scrollPercent); // Actualizamos el porcentaje
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 h-full flex items-start justify-center z-50">
      <svg viewBox="0 0 20 1000" width="20" height="100%" className="ml-0 lg:ml-4 block" aria-hidden="true">
        {/* Path estático */}
        <path
          d="M 1 0V -36 l 18 24 V 935 l -18 24V 1000"
          fill="none"
          stroke="#9091A0"
          strokeOpacity="0.16"
        ></path>
        
        {/* Path dinámico con gradiente */}
        <path
          d="M 1 0V -36 l 18 24 V 935 l -18 24V 1000"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
        ></path>

        <defs>
          <linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1="0" y2="1">
            {/* El color azul gana terreno conforme haces scroll */}
            <stop offset="0%" stopColor="#18CCFC" stopOpacity="1"></stop>
            <stop offset={`${scrollPercentage}%`} stopColor="#18CCFC" stopOpacity="1"></stop>
            <stop offset={`${scrollPercentage}%`} stopColor="#6344F5" stopOpacity="1"></stop>
            <stop offset="100%" stopColor="#AE48FF" stopOpacity="1"></stop>
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ScrollBar;
