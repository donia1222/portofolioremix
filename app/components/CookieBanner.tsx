import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Mostrar el banner solo si no se ha aceptado previamente
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted");
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    // Guardar aceptación de cookies y ocultar el banner
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  const handleReject = () => {
    // Redirigir a google.ch si no acepta
    window.location.href = "https://www.google.ch";
  };

  if (!isVisible) return null; // No mostrar el banner si ya se ha aceptado

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50 shadow-lg flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4 animate-slide-up">
      <div className="text-center md:text-left">
        <p className="text-lg font-semibold">
          Diese Website verwendet Cookies 🍪
        </p>
        <p className="text-sm text-gray-300">
          Wir verwenden Cookies, um sicherzustellen, dass Sie die beste Erfahrung auf unserer Website erhalten. Bitte akzeptieren Sie unsere Cookies, um fortzufahren.
        </p>
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handleAccept}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Akzeptieren
        </button>
        <button
          onClick={handleReject}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
        >
          Ablehnen
        </button>
      </div>
    </div>
  );
}
