import { useState, useEffect } from "react";
import { Link } from "@remix-run/react";
import { blogPosts } from "~/data/blogPosts";

export default function BlogIndex() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;
      setIsHeaderVisible(currentScrollPosition <= lastScrollPosition || currentScrollPosition < 50);
      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollPosition]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative bg-gray-900 text-gray-100">
      <div 
        className="fixed inset-0 bg-[url('/space.jpg')] bg-cover bg-center"
        style={{ 
          backgroundAttachment: 'fixed',
          animation: 'zoom 30s infinite alternate',
        }}
      />
      <div className="fixed inset-0 bg-black bg-opacity-60" />

      <Link
        to="/"
        className="fixed top-4 left-4 z-20 text-blue-300 hover:text-blue-100 transition-colors duration-300 mt-3"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </Link>

      <header
        className={`w-full py-4 px-4 fixed top-0 left-0 z-10 transition-all duration-300 ${
          isHeaderVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="w-full md:max-w-[50%] mx-auto bg-[#6d6d864f] backdrop-filter backdrop-blur-lg rounded-full flex justify-center items-center px-4 md:px-8 py-3 shadow-lg z-10">
            <div className="flex items-center justify-center cursor-pointer" onClick={scrollToTop}>
              <span className="text-blue-400 text-2xl font-bold">Cosmic</span>
              <span className="ml-2 text-pink-400 text-2xl font-bold">News</span>
            </div>
          </div>
        </div>
      </header>

      <main className="relative pt-24 pb-16 px-4 max-w-5xl mx-auto mt-10">
        <h1 className="text-6xl font-bold text-center mb-16 text-blue-100 drop-shadow-glow animate-pulse">
          Latest Cosmic News
        </h1>
        <div className="space-y-24">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              id={post.title.toLowerCase().replace(/\s+/g, '-')}
              className="bg-gray-800 bg-opacity-90 rounded-2xl shadow-2xl overflow-hidden transition duration-300 hover:shadow-blue-500/20 hover:shadow-2xl"
            >
              <div className="relative h-96">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <h2 className="text-4xl font-bold text-white mb-2">{post.title}</h2>
                  <p className="text-sm text-blue-300">
                    by {post.author} | {post.date}
                  </p>
                </div>
              </div>
              <div className="p-8">
                <div
                  className="text-gray-300 leading-relaxed prose prose-invert max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
