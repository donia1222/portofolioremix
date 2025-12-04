"use client"

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Code, Server } from 'lucide-react';
import ContactModule from "~/components/Contact/contactModuledos"; 
import FreelanceAvailability from "~/components/freelance-availability"
import PortfolioMasonry from "./PortfolioGrid"
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
  const fullText = "einzigartige";
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
    <section className="w-full text-center  relative overflow-hidden mt-20">

      <main className=" p-4 md:p-8">
      <div className="mx-auto max-w-7xl py-12">
        <PortfolioMasonry />
      </div>
    </main>
      <div id="contactModule" className="w-full relative" data-aos="fade-up" data-aos-delay="1200">
      <FreelanceAvailability />


        <ContactModule />
      </div>
    </section>
  );
}