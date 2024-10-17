import { blogPosts } from "~/data/blogPosts";
import { Link } from "@remix-run/react";

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-blue-900 to-black text-space-light relative">
      {/* Ícono fijo en la esquina superior izquierda */}
      <Link
        to="/"
        className="fixed top-4  text-white left-4 text-space-neon hover:text-white transition"
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

      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-5xl font-bold text-center mb-12 text-white drop-shadow-lg">
          News
        </h1>
        <div className="space-y-12">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              id={post.title.toLowerCase().replace(/\s+/g, '-')}  // Genera el ID a partir del título
              className="bg-gradient-to-r from-gray-800 via-gray-900 to-black p-8 rounded-lg shadow-lg transition duration-300 hover:scale-105"
            >
              <h2 className="text-4xl font-bold text-white mb-4">{post.title}</h2>
              <p className="text-sm text-indigo-400 mb-4">
                por {post.author} | {post.date}
              </p>
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-60 object-cover rounded-md mb-6 shadow-md"
              />
              {/* Renderizar contenido como HTML */}
              <div
                className="text-gray-300 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
