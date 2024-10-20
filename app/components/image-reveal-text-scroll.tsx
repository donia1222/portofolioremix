'use client'

import React, { useEffect, useState } from 'react';

export default function FixedImageScrollReveal() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const textOpacity = Math.min(scrollPosition / 500, 1);

  return (
    <div className="relative min-h-[200vh]">
      <div className="fixed inset-0 z-10">
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Imagen fija"
          className="w-full h-full object-cover"
        />
      </div>
      <div 
        className="fixed inset-0 flex items-center justify-center z-20"
        style={{ 
          opacity: textOpacity,
          pointerEvents: textOpacity > 0 ? 'auto' : 'none'
        }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-white text-center max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">Título Revelado</h2>
          <p className="text-xl">
            Este es el texto que aparece detrás de la imagen al hacer scroll. 
            Continúa scrolleando para ver más contenido y el efecto completo.
          </p>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}