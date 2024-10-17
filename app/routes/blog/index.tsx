import { blogPosts } from "~/data/blogPosts"
import { Link } from "@remix-run/react"

export default function BlogIndex() {
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
        className="fixed top-4 left-4 z-20 text-blue-300 hover:text-blue-100 transition-colors duration-300"
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

      <div className="relative z-10">
        <div className="max-w-4xl mx-auto py-16 px-4">
          <h1 className="text-6xl font-bold text-center mb-16 text-blue-100 drop-shadow-glow">
            Cosmic News
          </h1>
          <div className="space-y-16">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                id={post.title.toLowerCase().replace(/\s+/g, '-')}
                className="bg-gray-900 bg-opacity-70 p-8 rounded-lg shadow-neon transition duration-300 hover:shadow-neon-intense"
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

