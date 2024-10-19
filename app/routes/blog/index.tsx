import { blogPosts } from "~/data/blogPosts"
import { Link } from "@remix-run/react"

import { useState, useEffect } from "react";
export default function BlogIndex() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="min-h-screen relative">
      {/* Fondo con animación de zoom */}
      <div 
        className="fixed inset-0 bg-[url('/space.jpg')] bg-cover bg-center transform transition-transform duration-[10000ms] ease-in-out animate-zoom"
        style={{ backgroundAttachment: 'fixed' }}
      />
      <div className="fixed inset-0 bg-black bg-opacity-50" />

      {/* Estrella fugaz */}
      <div className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full animate-shootingStar" />

      <Link
        to="/"
        className="fixed top-4 left-4 z-20 text-blue-100 hover:text-blue-100 transition-colors duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </Link>


      <div className="relative ">
      <header
      className={`w-full py-4 px-4 fixed top-0 left-0 z-90 transition-transform duration-300 ${
        isHeaderVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
    



    </header>
        <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="w-full md:max-w-[90%]  mx-auto bg-[#6d6d864f] backdrop-filter backdrop-blur-lg rounded-full flex justify-center items-center px-4 md:px-8 py-3 shadow-lg z-10">

  <div className="flex items-center justify-center cursor-pointer" onClick={scrollToTop}>
    <span className="text-blue-400 text-lg sm:text-xl md:text-3xl font-bold">Cosmic</span>
    <span className="ml-2 text-[#ff69b4] text-lg sm:text-xl md:text-3xl font-bold">News</span>
  </div>

      </div>
          <h1 className="text-6xl font-bold text-center mb-16 mt-20 text-blue-100 drop-shadow-glow">

          </h1>
          <div className="space-y-16">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                id={post.title.toLowerCase().replace(/\s+/g, '-')}
                className="bg-gray-800 bg-opacity-90 p-8 rounded-lg shadow-neon transition duration-300 hover:shadow-neon-intense"
              >
                <h2 className="text-4xl font-bold text-blue-300 mb-4">{post.title}</h2>
                <p className="text-sm text-blue-400 mb-4">
                  by {post.author} | {post.date}
                </p>
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-72 object-cover rounded-md mb-6 shadow-md"
                />
                <div
                  className="text-gray-300 leading-relaxed prose prose-invert"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

