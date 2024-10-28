import { Link } from "@remix-run/react";
import { useEffect, useState, lazy, Suspense, useRef } from "react";
import { LinksFunction, MetaFunction } from "@remix-run/node";
import { FiMessageSquare } from "react-icons/fi";
import AOS from "aos";

// Lazy load components
const Header = lazy(() => import("~/components/Header"));
const DeliverBlock = lazy(() => import("~/components/DeliverBlock"));
const CorePrinciplesBlock = lazy(() => import("~/components/CorePrinciplesBlock"));
const OpenSourceBlock = lazy(() => import("~/components/OpenSourceBlock"));
const CommunityBlock = lazy(() => import("~/components/CommunityBlock"));
const Corazones = lazy(() => import("~/components/Corazones"));
const ContactModule = lazy(() => import("~/components/ContactModule"));
const TechnologyCarousel = lazy(() => import("~/components/TechnologyCarousel"));
const Chat = lazy(() => import("~/components/Chat"));
const CookieBanner = lazy(() => import("~/components/CookieBanner"));
const TechnologyCarousemisappsindex = lazy(() => import("~/components/TechnologyCarousemisappsindex"));
const CloudTextBlock5 = lazy(() => import('~/components/CloudTextBlock5'));

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

export const meta: MetaFunction = () => {
  return [
    { title: "Your Landing Page Title" },
    { name: "description", content: "A modern landing page showcasing our services and technologies" },
  ];
};

const sections = [
  { id: "deliverBlock", label: "Deliver" },
  { id: "corePrinciplesBlock", label: "Core Principles" },
  { id: "corazonesBlock", label: "Corazones" },
  { id: "communityBlock", label: "Community" },
  { id: "openSourceBlock", label: "Open Source" },
  { id: "publishedAppsBlock", label: "Published Apps" },
  { id: "technologyCarousel", label: "Technology" },
  { id: "contactModule", label: "Contact" },
  { id: "Chat", label: "Chat" },
];

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    setIsLoading(false);

    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -90% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        sectionRefs.current[section.id] = element;
        observer.observe(element);
      }
    });

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const progress = scrollPosition / (documentHeight - windowHeight);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      sections.forEach((section) => {
        if (sectionRefs.current[section.id]) {
          observer.unobserve(sectionRefs.current[section.id]!);
        }
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-animated-gradient bg-400% animate-gradientAnimation relative overflow-auto">
      <Suspense fallback={<div>Loading...</div>}>
        <CookieBanner />

        {/* Subtle Timeline Bar */}
        <div className="fixed left-0 top-0 h-full w-1 bg-green-300 z-50">
          <div
            className="absolute w-full bg-purple-500 transition-all duration-300"
            style={{
              top: 0,
              height: `${scrollProgress * 100}%`,
            }}
          />
        </div>

        <nav className="absolute top-0 left-4 right-0 flex justify-center items-center p-8 z-20">
          <Header />
          <div className="w-full max-w-[80%]">
            {/* Additional navigation elements can be added here */}
          </div>
        </nav>

        <main className="text-center relative p-10 ml-4">
          <h1 className="sr-only">Welcome to Our Landing Page</h1>
          <CloudTextBlock5 />
        </main>

        <section id="deliverBlock" className="w-full relative ml-4" data-aos="fade-up">
          <DeliverBlock />
        </section>

        <section id="corePrinciplesBlock" className="w-full relative ml-4" data-aos="fade-up" data-aos-delay="200">
          <CorePrinciplesBlock />
        </section>

        <section id="corazonesBlock" className="w-full relative ml-4" data-aos="fade-up" data-aos-delay="200">
          <Corazones />
        </section>

        <section id="communityBlock" className="w-full relative ml-4" data-aos="fade-up" data-aos-delay="1000">
          <CommunityBlock />
        </section>

        <section id="openSourceBlock" className="w-full relative ml-4" data-aos="fade-up" data-aos-delay="400">
          <OpenSourceBlock />
        </section>

        <section id="publishedAppsBlock" className="w-full relative ml-4" data-aos="fade-up" data-aos-delay="600">
          <TechnologyCarousemisappsindex />
        </section>

        <section id="technologyCarousel" className="w-full relative ml-4" data-aos="fade-up" data-aos-delay="800">
          <TechnologyCarousel />
        </section>

        <section id="contactModule" className="w-full relative ml-4" data-aos="fade-up" data-aos-delay="1200">
          <ContactModule />
        </section>

        <section id="Chat" className="w-full relative ml-4" data-aos="fade-up" data-aos-delay="1200">
          <Chat />
        </section>
      </Suspense>
    </div>
  );
}