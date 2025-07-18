"use client"
import Header from "~/components/Header"
import DeliverBlock from "~/components/DeliverBlock"
import CorePrinciplesBlock from "~/components/CorePrinciplesBlock"
import OpenSourceBlock from "~/components/OpenSourceBlock"
import ContactModule from "~/components/Contact/contactModuleFooter"
import TechnologyCarousel from "~/components/TechnologyCarousel/TechnologyCarousel"
import { useEffect, useState } from "react"
import AOS from "aos"
import type { LinksFunction } from "@remix-run/node"
import Chat from "~/components/Chat"
import CookieBanner from "~/components/CookieBanner"
import CloudTextBlock5 from "~/components/showcase/CloudTextBlock5"
import CloudTextAnime from "~/components/CloudTextBlock/AnimateTexVida"
import ScrollToTop from "~/components/scroll-to-top"
import FreelanceAvailability from "../components/freelance-availability"
import CommunityTemplate from "~/components/Community/CommunityTemplate"
import OnlineShopShowcase from "~/components/OnlineShopShowcase"
import GSAPAdvancedAnimation from "~/components/GSAPAdvancedAnimation"
import HorizontalScrollSection from "~/components/HorizontalScrollSection"
import LoadingScreen from "~/components/LoadingScreen"

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

interface Star {
id: number
x: number
y: number
size: number
speed: number
opacity: number
}

export default function Index() {
const [isLoading, setIsLoading] = useState(true)
const [stars, setStars] = useState<Star[]>([])
const chips = ["Moderne Webseiten", "KI-Lösungen", "App-Entwicklung", "Custom Plugins", "und mehr"]

// Initialize AOS and stars
useEffect(() => {
AOS.init({
duration: 1000,
once: true,
offset: 100,
 })

// Generate stars
const generateStars = () => {
const newStars: Star[] = []
for (let i = 0; i < 100; i++) {
newStars.push({
id: i,
x: Math.random() * 100,
y: Math.random() * 100,
size: Math.random() * 2 + 1,
speed: Math.random() * 0.5 + 0.1,
opacity: Math.random() * 0.8 + 0.2,
 })
 }
setStars(newStars)
 }

generateStars()
setIsLoading(false)
 }, [])

return (
<>
{/* Loading Screen */}
<LoadingScreen minDuration={500} />

<div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-auto">
{/* Starfield Background */}
<div className="fixed inset-0 z-0">
{stars.map((star) => (
<div
key={star.id}
className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
style={{
left: `${star.x}%`,
top: `${star.y}%`,
opacity: star.opacity,
animationDelay: `${Math.random() * 3}s`,
animationDuration: `${2 + Math.random() * 3}s`,
 }}
/>
 ))}
</div>

{/* Dark overlay for better content visibility */}
<div className="fixed inset-0 bg-black bg-opacity-40 z-1" />

{/* Banner de Cookies */}
<div className="relative z-50">
<CookieBanner />
</div>

{/* Navegación */}
<nav className="absolute top-0 left-0 right-0 flex justify-center items-center p-8 z-50">
<Header />
</nav>

{/* Main Content */}
<div className="relative z-10">
<CloudTextBlock5 />

{/* Bloques de Contenido con Animaciones AOS */}
<div id="deliverBlock" className="w-full relative" data-aos="fade-up">
<DeliverBlock />
</div>

<div id="corePrinciplesBlock" className="w-full relative" data-aos="fade-up" data-aos-delay="200">
<CorePrinciplesBlock />
</div>

<div id="onlineShopShowcase" className="w-full relative" data-aos="fade-up" data-aos-delay="1000">
<OnlineShopShowcase />
</div>

<div id="openSourceBlock" className="w-full relative" data-aos="fade-up" data-aos-delay="400">
<OpenSourceBlock />
</div>

<div id="technologyCarousel" className="w-full relative" data-aos="fade-up" data-aos-delay="800">
<TechnologyCarousel />
</div>


<FreelanceAvailability />

<div id="contactModule2" className="w-full relative" data-aos="fade-up" data-aos-delay="1200">
<ContactModule />
</div>

<div id="Chat" className="w-full relative" data-aos="fade-up" data-aos-delay="1200">
<Chat />
</div>

<ScrollToTop />
</div>
</div>
</>
 )
}