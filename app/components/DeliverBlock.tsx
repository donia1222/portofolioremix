// components/DeliverBlock.tsx

import { useEffect, useState, useRef } from "react";

const images = [

  "/programming-background-with-person-working-with-codes-computer.jpg",
  // Añade más imágenes según sea necesario
];

export default function DeliverBlock() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [prevImageIndex, setPrevImageIndex] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Función para cambiar de imagen
    const changeImage = () => {
      setPrevImageIndex(currentImageIndex);
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    // Configurar intervalo para cambiar de imagen cada segundo
    timeoutRef.current = setInterval(changeImage, 2000); // 1000ms = 1 segundo

    return () => {
      if (timeoutRef.current) {
        clearInterval(timeoutRef.current);
      }
    };
  }, [currentImageIndex]);

  return (
    <section
      className={`text-center z-10 mt-28 mb-24 transition-transform duration-500`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center relative">
        {/* Texto a la izquierda */}
        <div className="md:w-1/2 text-center md:text-left ">
          <h2 className="text-4xl md:text-6xl font-bold text-white  max-w-4xl p-4">
            Modernität in <span className="text-pink-400">jedem Pixel</span>
          </h2>
          <p className="text-xm text-blue-200 max-w-2xl mx-auto md:mx-0 p-4 mb-6">
            Ich fusioniere modernes Design mit fesselnden Animationen, um Websites zu kreieren, die in jedem Detail herausstechen. Jedes Pixel wird sorgfältig ausgearbeitet, um Interaktivität und Ästhetik zu bieten und Ihren Nutzern ein unvergessliches Navigationserlebnis zu ermöglichen.
          </p>
        </div>

        {/* Imagen a la derecha */}
        <div className="md:w-1/2 text-center md:text-right md:ml-40 relative w-80 h-80">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Imagen ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full rounded-xl object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
