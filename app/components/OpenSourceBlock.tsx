import { useEffect, useRef, useState } from "react";
import { Link } from "@remix-run/react";
import { FiGlobe, FiCpu, FiMonitor, FiShoppingCart } from "react-icons/fi"; // Importamos los nuevos iconos
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
<section className="w-full text-center z-5  mb-0 bg-gray-900 py-16   pt-20">
  <h2 className="text-4xl md:text-6xl font-bold text-white max-w-4xl mx-auto mb-20">
    Moderne, ansprechende <br />
    und einzigartige <span className="text-pink-400">{typedText}</span>
  </h2>
  <p className="text-lg text-blue-200 max-w-2xl mx-auto mb-12 p-8">
    Wir arbeiten mit den neuesten Technologien wie Joomla 5, bieten aber auch vollständig maßgeschneiderte Webseiten ohne CMS. Unsere Projekte basieren auf modernen Frameworks wie Astro, Next.js und Remix, um individuell angepasste Lösungen für unsere Kunden zu erstellen.
  </p>
  <div className="flex justify-center mt-10 " ref={numbersRef}>
  <Link
          to="/webs"
          className="relative inline-flex items-center text-xl group"
        >
          <span className="relative z-10 px-5 py-3 font-semibold transition-colors duration-200 ease-in-out bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-teal-400">
            Website Entwicklung
            <span aria-hidden="true" className="ml-2">↗</span>
          </span>
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-in-out bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-30 group-hover:opacity-100 group-hover:from-blue-400 group-hover:to-teal-400"></span>
          <span className="absolute inset-0 w-full h-full transition duration-200 ease-in-out bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-30"></span>
          <span className="absolute inset-0 w-full h-full border-2 border-white border-opacity-10 rounded-lg"></span>
        </Link>
              </div>
</section>

  );
}
