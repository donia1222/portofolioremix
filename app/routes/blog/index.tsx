import { Link } from "@remix-run/react";
import { blogPosts } from "~/data/blogPosts";

export default function BlogIndex() {
  return (
    <div className="min-h-screen bg-space-dark text-space-light">
      <div className="max-w-5xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-white">Sección de Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg transition duration-300 hover:scale-105 hover:bg-gray-700"
            >
              <Link to={`/blog/${post.id}`}>
                <h2 className="text-2xl font-semibold text-white mb-4">{post.title}</h2>
                <p className="text-sm text-space-neon mb-2">
                  por {post.author} | {post.date}
                </p>
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <p className="text-gray-400 mb-4">{post.content.substring(0, 100)}...</p>
                <span className="text-space-neon hover:text-white transition">Leer más →</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
