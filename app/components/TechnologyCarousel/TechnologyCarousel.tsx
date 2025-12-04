"use client"

import { useEffect, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '~/context/LanguageContext';

const technologies = [
  { name: 'Next.js', icon: '/icons/nextdotjs.svg', color: 'from-white/20 to-white/5' },
  { name: 'Remix', icon: '/icons/remix.svg', color: 'from-violet-500/20 to-violet-500/5' },
  { name: 'React', icon: '/icons/react.svg', color: 'from-cyan-500/20 to-cyan-500/5' },
  { name: 'Astro', icon: '/icons/astro.svg', color: 'from-orange-500/20 to-orange-500/5' },
  { name: 'Node.js', icon: '/icons/nodedotjs.svg', color: 'from-green-500/20 to-green-500/5' },
  { name: 'OpenAI', icon: '/icons/openai.svg', color: 'from-emerald-500/20 to-emerald-500/5' },
  { name: 'Vercel', icon: '/icons/vercel.svg', color: 'from-white/20 to-white/5' },
  { name: 'GitHub', icon: '/icons/github.svg', color: 'from-purple-500/20 to-purple-500/5' },
  { name: 'Expo', icon: '/icons/expo.svg', color: 'from-blue-500/20 to-blue-500/5' },
  { name: 'PHP', icon: '/icons/php.svg', color: 'from-indigo-500/20 to-indigo-500/5' },
  { name: 'MySQL', icon: '/icons/mysql.svg', color: 'from-sky-500/20 to-sky-500/5' },
];

export default function TechnologyCarousel() {
  const [isClient, setIsClient] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="w-full py-20 bg-zinc-950">
        <div className="h-32 animate-pulse bg-zinc-900 rounded-xl max-w-6xl mx-auto" />
      </div>
    );
  }

  // Duplicar array para efecto infinito
  const duplicatedTech = [...technologies, ...technologies];

  return (
    <section className="relative w-full py-20 overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-fuchsia-600/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative text-center mb-16 px-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
          <Sparkles className="w-4 h-4 text-violet-400" />
          <span className="text-sm font-medium text-zinc-400">Tech Stack</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {t("techTitle")}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent"> {t("techTitleHighlight")}</span>
        </h2>
        <p className="text-zinc-500 max-w-md mx-auto">
          {t("techSubtitle")}
        </p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <div
          className="flex gap-6 animate-scroll"
          style={{
            width: 'max-content',
          }}
        >
          {duplicatedTech.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="group relative"
            >
              <div className={`
                relative flex flex-col items-center justify-center
                w-36 h-36 rounded-2xl
                bg-gradient-to-br ${tech.color}
                border border-white/10 hover:border-white/25
                backdrop-blur-sm
                transition-all duration-500 ease-out
                hover:scale-110 hover:-translate-y-2
                hover:shadow-2xl hover:shadow-violet-500/20
                cursor-pointer
              `}>
                {/* Glow effect on hover */}
                <div className={`
                  absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                  bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20
                  transition-opacity duration-500
                `} />

                {/* Icon */}
                <div className="relative z-10 mb-3">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-12 h-12 filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Name */}
                <span className="relative z-10 text-sm font-medium text-zinc-400 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>

                {/* Corner accent */}
                <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-white/20 group-hover:bg-violet-400 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
