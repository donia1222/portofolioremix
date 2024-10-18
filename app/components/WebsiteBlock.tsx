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
  const fullText = "Webseiten"; // Texto completo que se va a escribir
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
    
<section className="w-full text-center mb-0 py-16 pb-40  pt-20 ">
<div className="container mx-auto px-4 bg-[#7c7c8713]  py-10 pb-20  mt-10">
  <h2 className="text-4xl md:text-6xl  font-bold text-white max-w-4xl mx-auto mb-20 mt-10 ">
    Moderne, ansprechende <br />
    und einzigartige <span className="text-pink-400">{typedText}</span>
  </h2>
  <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-12 p-8">
    Wir arbeiten mit den neuesten Technologien wie Joomla 5, bieten aber auch vollständig maßgeschneiderte Webseiten ohne CMS. Unsere Projekte basieren auf modernen Frameworks wie Astro, Next.js und Remix, um individuell angepasste Lösungen für unsere Kunden zu erstellen.
  </p>

  <p className="text-xl  text-white mb-12 p-5">
    Bisher haben wir zahlreiche Webseiten und Apps mit den folgenden Technologien erstellt:
  </p>

  {/* Box with the numbers */}
  <div className="flex justify-center" ref={numbersRef}>
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-left">
      <div className="flex items-center justify-between mb-4">
        <p className="text-4xl font-bold text-blue-400 number mr-4" data-value="25">0</p>
        <p className="text-blue-200 ml-4">Webseiten mit Joomla</p>
      </div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-4xl font-bold text-blue-400 number mr-4" data-value="6">0</p>
        <p className="text-blue-200 ml-4">Webseiten mit Astro</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-4xl font-bold text-blue-400 number mr-4" data-value="5">0</p>
        <p className="text-blue-200 ml-4">Apps mit React Native</p>
      </div>
    </div>
  </div>
  </div>
</section>

  );
}
