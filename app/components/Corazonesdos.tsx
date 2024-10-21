import { useEffect } from "react";
import AOS from "aos";
import type { LinksFunction } from "@remix-run/node";

// Función links para incluir el CSS de AOS
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

export default function AntennaWithWaves() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-80 mb-40 mt-40">
      {/* Corazón con ondas expansivas */}
      <div className="relative">
        {/* El corazón en el centro */}
        <div className="relative z-10 flex items-center justify-center">
          <svg
            className="w-32 h-32 text-pink-500"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG de un corazón */}
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>

        {/* Efecto de ondas expansivas */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-32 h-32 rounded-full bg-pink-400 opacity-50 animate-ping duration-[3000ms]"></div>
          <div className="absolute w-40 h-40 rounded-full bg-pink-500 opacity-40 animate-ping duration-[3000ms]"></div>
          <div className="absolute w-48 h-48 rounded-full bg-pink-500 opacity-30 animate-ping duration-[3000ms]"></div>
        </div>
      </div>

      {/* Título y descripción */}
      <h2 className="text-3xl font-bold text-pink-400 text-center  p-8" data-aos="fade-up ">
       <span className="text-blue-400 ">Ich </span>würde gerne an Ihrem Projekt arbeiten.
      </h2>

    </div>
  );
}
