import { useEffect, useRef, useState } from "react";
import { Link } from "@remix-run/react";

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
  const [typedText, setTypedText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const fullText = "Webseiten";
  const numbersRef = useRef<HTMLDivElement>(null);
  const cloudTexts = [
    { text: "Responsive", color: "text-blue-500" },
    { text: "Schnell", color: "text-green-500" },
    { text: "Modern", color: "text-purple-500" },
    { text: "Animiert", color: "text-pink-500" }
  ];
  const [currentCloudText, setCurrentCloudText] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (typingIndex < fullText.length) {
        setTypedText((prev) => prev + fullText[typingIndex]);
        setTypingIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [typingIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const elements = numbersRef.current?.querySelectorAll(".number");
          if (elements) {
            elements.forEach((el) => {
              const endValue = parseInt(el.getAttribute("data-value") || "0", 10);
              animateNumbers(el as HTMLDivElement, 0, endValue, 2000);
            });
          }
          observer.disconnect();
        }
      });
    }, { rootMargin: '0px 0px -200px 0px' });

    if (numbersRef.current) {
      observer.observe(numbersRef.current);
    }
  }, []);

  useEffect(() => {
    const cloudInterval = setInterval(() => {
      setCurrentCloudText((prev) => (prev + 1) % cloudTexts.length);
    }, 2000);

    return () => clearInterval(cloudInterval);
  }, []);

  return (
    <section className="w-full text-center mb-0 py-16 relative overflow-hidden">
      <div className="absolute inset-0  opacity-50"></div>
      <div className="container mx-auto px-4 py-10 pb-20 relative z-10">
        <h2 className="text-4xl md:text-6xl  text-white max-w-4xl mx-auto mb-5 animate-fade-in-up">
          Moderne, ansprechende <br />
          und einzigartige <span className="text-pink-400 animate-pulse">{typedText}</span>
        </h2>
        <p className="text-lg text-blue-200 max-w-2xl mx-auto  p-8 animate-fade-in">
          Neuesten Technologien wie Joomla 5, bieten aber auch vollständig maßgeschneiderte Webseiten ohne CMS. 
          Unsere Projekte basieren auf modernen Frameworks wie Astro, Next.js und Remix, um individuell angepasste Lösungen für unsere Kunden zu erstellen.
        </p>

        <div className="cloud-container mb-12 relative">
          <div className="cloud w-64 h-32  bg-opacity-80 rounded-full mx-auto flex items-center justify-center relative overflow-hidden">
            <div className={`cloud-text text-5xl  ${cloudTexts[currentCloudText].color} animate-float`}>
              {cloudTexts[currentCloudText].text}
            </div>
          </div>
        </div>

        <div className="flex justify-center" ref={numbersRef}>
          <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-2xl text-left transform transition-all duration-500 hover:scale-105">
            <div className="flex items-center justify-between mb-4 animate-slide-in-left">
              <p className="text-4xl font-bold text-blue-400 number mr-4" data-value="21">0</p>
              <p className="text-blue-200 ml-4">Webseiten mit Joomla</p>
            </div>
            <div className="flex items-center justify-between mb-4 animate-slide-in-left" style={{animationDelay: '0.2s'}}>
              <p className="text-4xl font-bold text-blue-400 number mr-4" data-value="6">0</p>
              <p className="text-blue-200 ml-4">Webseiten mit Astro</p>
            </div>
            <div className="flex items-center justify-between animate-slide-in-left" style={{animationDelay: '0.4s'}}>
              <p className="text-4xl font-bold text-blue-400 number mr-4" data-value="3">0</p>
              <p className="text-blue-200 ml-4">Webseiten mit Remix</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}