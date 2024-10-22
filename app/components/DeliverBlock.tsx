// components/DeliverBlock.tsx

import { useEffect, useState, useRef } from "react";

export default function DeliverBlock() {
    const [imageOpacity, setImageOpacity] = useState(1); // Opacidad para la imagen
    const [animateUp, setAnimateUp] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    // Manejar la opacidad de la imagen basado en el scroll dentro del bloque
    useEffect(() => {
        const handleScroll = () => {
            if (sectionRef.current) {
                const rect = sectionRef.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const scrollProgress = Math.min(Math.max((windowHeight - rect.top) / windowHeight, 0), 1);
                const newOpacity = 1 - scrollProgress;
                setImageOpacity(newOpacity >= 0 ? newOpacity : 0); // Aseguramos que no sea menor que 0
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Llamada inicial para establecer la opacidad correcta
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Detectar cuando el bloque sale de la vista para animarlo hacia arriba
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting && entry.boundingClientRect.top < 0) {
                    setAnimateUp(true);
                } else {
                    setAnimateUp(false);
                }
            },
            {
                root: null, // viewport
                threshold: 0, // trigger cuando al menos un píxel es visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
      <section 
        ref={sectionRef} 
        className={`text-center z-10 mt-28 mb-24 transition-transform duration-500 ${animateUp ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Texto a la izquierda */}
          <div className="md:w-1/2 text-center md:text-left ">
            <h2 className="text-4xl md:text-6xl font-bold text-white  max-w-4xl p-4">
            Modernität in <span className="text-pink-400">jedem Pixel</span> 
            </h2>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto md:mx-0 p-4">
            Ich fusioniere modernes Design mit fesselnden Animationen, um Websites zu kreieren, die in jedem Detail herausstechen. Jedes Pixel wird sorgfältig ausgearbeitet, um Interaktivität und Ästhetik zu bieten und Ihren Nutzern ein unvergessliches Navigationserlebnis zu ermöglichen.
            </p>
          </div>

          {/* Imagen a la derecha */}
          <div className="md:w-1/2 text-center md:text-right md:ml-40">
            <img
              src="/660.png" // Asegúrate de que la ruta sea correcta
              alt="Descripción de la imagen"
              className="w-96 h-96 rounded-full object-cover transition-opacity duration-500 mx-auto md:mx-0"
             
            />
          </div>
        </div>
      </section>
    );
}
