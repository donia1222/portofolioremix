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
      {/* Antena con ondas expansivas */}
      <div className="relative">
        {/* La antena en el centro */}
        <div className="relative z-10 flex items-center justify-center">
          <svg
            className="w-32 h-32 text-blue-400"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG de una antena simple */}
            <path d="M12 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 4c-1.65 0-3 1.35-3 3v9h-1v2h8v-2h-1v-9c0-1.65-1.35-3-3-3zm0 1c1.1 0 2 .9 2 2v8h-4v-8c0-1.1.9-2 2-2zm0 12.5c-1.93 0-3.5 1.57-3.5 3.5h7c0-1.93-1.57-3.5-3.5-3.5z"/>
          </svg>
        </div>

        {/* Efecto de ondas expansivas */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-32 h-32 rounded-full bg-blue-400 opacity-50 animate-ping duration-[3000ms]"></div>
          <div className="absolute w-40 h-40 rounded-full bg-blue-500 opacity-40 animate-ping duration-[3000ms]"></div>
          <div className="absolute w-48 h-48 rounded-full bg-blue-600 opacity-30 animate-ping duration-[3000ms]"></div>
        </div>
      </div>

{/* Título y descripción */}
<h2 className="text-3xl font-bold text-blue-400  text-center mt-10" data-aos="fade-up ">
  Wir stellen sicher, dass jedes Detail perfekt abgestimmt ist.
</h2>
<p
  className="text-base p-10 text-blue-300 mt-4 max-w-md text-center"
  data-aos="fade-up"
  data-aos-delay="200"
>
  Sobald wir Ihr Web- oder App-Projekt entwickelt haben, lassen wir es nicht einfach so stehen; mit unserer stets aufgerichteten „Antenne“ sorgen wir dafür, dass alles so funktioniert, wie es soll.
</p>

    </div>
  );
}
