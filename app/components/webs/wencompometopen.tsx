"use client"

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code, Server } from 'lucide-react';

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

export default function FreelancerShowcase() {
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
    <section className="w-full text-center py-16 relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 mt-20 mb-20">
      <div className="container mx-auto px-4 py-10 pb-20 relative">
        <h2 className="text-4xl md:text-6xl text-white max-w-4xl mx-auto mb-5 animate-fade-in-up">
          Moderne, ansprechende <br />
          und einzigartige <span className="text-pink-400 animate-pulse">{typedText}</span>
        </h2>
        <p className="text-lg text-blue-200 max-w-2xl mx-auto p-8 animate-fade-in mb-10">
          Als Freelancer biete ich maßgeschneiderte Webseiten mit den neuesten Technologien wie Joomla 5, Astro, Next.js und Remix. Meine individuellen Lösungen sind perfekt auf Ihre Bedürfnisse zugeschnitten.
        </p>

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

        <div className="mt-24 bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-2xl max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">Mein neuestes Projekt</h3>
          <div className="relative w-full h-64 mb-4 flex justify-center items-center overflow-hidden">
            <img
              src="/tr.png"
              alt="Cantina Tex-Mex Website"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
          <h4 className="text-xl font-semibold text-blue-400 mb-2">Renovierung der Cantina Tex-Mex Website</h4>
          <p className="text-gray-300 mb-4">
            Ich habe die Website von Cantina Tex-Mex komplett überarbeitet, um ein modernes und ansprechendes Design zu schaffen, das die Atmosphäre des Restaurants perfekt widerspiegelt.
          </p>
          <div className="flex flex-col items-center space-y-2 mb-6">
            <div className="flex items-center text-blue-400">
              <Code className="mr-2" />
              <span>Frontend: React mit Remix</span>
            </div>
            <div className="flex items-center text-blue-400">
              <Server className="mr-2" />
              <span>Backend: PHP</span>
            </div>
          </div>
          <motion.a
            href="https://www.cantinatexmex.ch"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Website besuchen
            <ExternalLink className="ml-2 h-5 w-5" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}