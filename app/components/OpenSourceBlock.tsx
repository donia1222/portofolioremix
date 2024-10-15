import { useEffect, useRef, useState } from "react";
import { Link } from "@remix-run/react";

// Función para la animación de los números
const animateNumbers = (element: HTMLDivElement, start: number, end: number, duration: number) => {
  let startTime: number | null = null;

  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const progress = timestamp - startTime;
    const value = Math.min(Math.floor((progress / duration) * (end - start) + start), end);

    element.innerText = value.toString();

    if (progress < duration) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

export default function OpenSourceBlock() {
  const [typedText, setTypedText] = useState(""); // Estado para el texto tipeado
  const [typingIndex, setTypingIndex] = useState(0); // Estado para el índice actual
  const fullText = "Open Source"; // Texto completo que se va a escribir
  const numbersRef = useRef<HTMLDivElement>(null);

  // Efecto de escritura del texto
  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (typingIndex < fullText.length) {
        setTypedText((prev) => prev + fullText[typingIndex]);
        setTypingIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval); // Detener cuando se completa la escritura
      }
    }, 150); // Velocidad de escritura: 150ms por letra

    return () => clearInterval(typingInterval); // Limpiar el intervalo al desmontar
  }, [typingIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = numbersRef.current?.querySelectorAll(".number");
          if (elements) {
            elements.forEach((el) => {
              const endValue = parseInt(el.getAttribute("data-value") || "0", 10);
              animateNumbers(el as HTMLDivElement, 0, endValue, 2000); // Duración de 2 segundos
            });
          }
          observer.disconnect(); // Desconectar el observer después de la animación
        }
      });
    }, { rootMargin: '0px 0px -200px 0px' });

    if (numbersRef.current) {
      observer.observe(numbersRef.current);
    }
  }, []);

  return (
    <section className="w-full text-center z-5 mt-24 mb-0 bg-gray-900 py-16 pb-60 ">
      <h2 className="text-4xl md:text-6xl font-bold text-white max-w-4xl mx-auto mt-40 mb-20">
        Empowering Developers: <br />
        Innovating with <span className="text-pink-400">{typedText}</span> 
      </h2>
      <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-12 p-8">
        Embracing our roots, we actively champion open-source principles, creating, maintaining, and contributing to software while providing valuable educational resources.
      </p>

      <p className="text-xl font-semibold text-white mb-12">
        Don’t just take our word for it, let the numbers speak for themselves
      </p>

      {/* Box with the numbers */}
      <div className="flex justify-center" ref={numbersRef}>
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-left">
          <div className="flex items-center justify-between mb-4">
            <p className="text-4xl font-bold text-blue-400 number mr-4" data-value="95">0</p> {/* Agregar margen a la derecha */}
            <a href="#" className="text-blue-200 hover:text-white ml-4"> {/* Margen a la izquierda para el enlace */}
            Published Website <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="flex items-center justify-between mb-4">
            <p className="text-4xl font-bold text-blue-400 number mr-4" data-value="6">0</p> {/* Margen a la derecha */}
            <a href="#" className="text-blue-200 hover:text-white ml-4"> {/* Margen a la izquierda para el enlace */}
            Published Apps<span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-4xl font-bold text-blue-400 number mr-4" data-value="15 ">0</p> {/* Margen a la derecha */}
            <a href="#" className="text-blue-200 hover:text-white ml-4"> {/* Margen a la izquierda para el enlace */}
              Plugins <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
