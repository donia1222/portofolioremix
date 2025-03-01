"use client"

import Header from "~/components/Header"
import DeliverBlock from "~/components/DeliverBlock"
import CorePrinciplesBlock from "~/components/CorePrinciplesBlock"
import OpenSourceBlock from "~/components/OpenSourceBlock"
import CommunityBlock from "~/components/CommunityBlock"
import ContactModule from "~/components/contactModuledos"
import TechnologyCarousel from "~/components/TechnologyCarousel/TechnologyCarousel"
import { useEffect } from "react"
import AOS from "aos"
import type { LinksFunction } from "@remix-run/node"
import Chat from "~/components/Chat"
import CookieBanner from "~/components/CookieBanner"
import CloudTextBlock5 from "~/components/CloudTextBlock/CloudTextBlock"
import AnimatedBackground from "~/components/AnimatedBackground"

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css",
      integrity: "sha512-pvYprV3PQstB6Oa6QvSwc0u5A/BdrXBtU1cVQw+KvA0kCw9vF3Wc50FEsl+wEQPjhJwP6jLeY+VYgeNU9uKeiQ==",
      crossOrigin: "anonymous",
      referrerPolicy: "no-referrer",
    },
  ]
}

export default function Index() {
  useEffect(() => {
    // Initialize AOS
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 1000,
        once: false,
      })
    }
  }, [])

  return (
    <AnimatedBackground>
      <div className="min-h-screen relative overflow-auto">
        {/* Banner de Cookies */}
        <CookieBanner />

        {/* Navegación */}
        <nav className="absolute top-0 left-0 right-0 flex justify-center items-center p-8 z-20">
          <Header />
        </nav>

        {/* Contenido Principal */}
        <main className="text-center relative p-10">
          <CloudTextBlock5 />

          {/* Bloques de Contenido con Animaciones AOS */}
          <div id="deliverBlock" className="w-full relative" data-aos="fade-up">
            <DeliverBlock />
          </div>

          <div id="corePrinciplesBlock" className="w-full relative" data-aos="fade-up" data-aos-delay="200">
            <CorePrinciplesBlock />
          </div>

          <div id="communityBlock" className="w-full relative" data-aos="fade-up" data-aos-delay="1000">
            <CommunityBlock />
          </div>

          <div id="openSourceBlock" className="w-full relative" data-aos="fade-up" data-aos-delay="400">
            <OpenSourceBlock />
          </div>

          <div id="technologyCarousel" className="w-full relative" data-aos="fade-up" data-aos-delay="800">
            <TechnologyCarousel />
          </div>

          <div id="contactModule" className="w-full relative" data-aos="fade-up" data-aos-delay="1200">
            <ContactModule />
          </div>

          <div id="Chat" className="w-full relative" data-aos="fade-up" data-aos-delay="1200">
            <Chat />
          </div>
        </main>
      </div>
    </AnimatedBackground>
  )
}

