"use client"

import { useState, useEffect } from "react";
import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { FiArrowLeft, FiStar } from "react-icons/fi";
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
    <div className="min-h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100">
      <div 
        className="fixed inset-0 bg-[url('/space.jpg')] bg-cover bg-center"
        style={{ 
          backgroundAttachment: 'fixed',
          animation: 'zoom 30s infinite alternate',
        }}
      />
      <div className="fixed inset-0 bg-black bg-opacity-60" />

      <motion.header
        className={`w-full py-4 px-4 fixed top-0 left-0 z-10 transition-all duration-300 ${
          isHeaderVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="w-full md:max-w-[50%] mx-auto bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex justify-center items-center px-4 md:px-8 py-3 shadow-lg z-10">
            <Link
              to="/"
              className="fixed left-2 z-20 ml-10 text-blue-100 hover:text-blue-100 transition-colors duration-300"
            >
              <FiArrowLeft className="h-8 w-8" />
            </Link>
            <motion.div 
              className="flex items-center justify-center cursor-pointer" 
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-blue-100 text-2xl font-bold">Cosmic</span>
              <span className="ml-2 text-pink-200 text-2xl font-bold">News</span>
            </motion.div>
          </div>
        </div>
      </motion.header>

      <main className="relative pt-24 pb-16 px-4 max-w-5xl mx-auto mt-10">
        <motion.h1 
          className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          Latest Cosmic News
        </motion.h1>
        <div className="space-y-24">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              id={post.title.toLowerCase().replace(/\s+/g, '-')}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-96">
                <img
                  src={post.imageUrl || "/placeholder.svg"}
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
                <motion.div
                  className="mt-6 flex items-center text-blue-400"
                  whileHover={{ scale: 1.05 }}
                >
                  <FiStar className="mr-2" />
                  <span>Featured Article</span>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </main>
    </div>
  );
}
