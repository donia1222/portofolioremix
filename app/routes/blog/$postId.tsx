import { useParams, Link, useLoaderData } from "@remix-run/react";
import { blogPosts, BlogPost } from "~/data/blogPosts";

// Función loader para obtener los datos del post
export async function loader({ params }: { params: { postId: string } }) {
  const post = blogPosts.find((post) => post.id === params.postId);
  if (!post) {
    throw new Response("Post not found", { status: 404 });
  }
  post.views += 1;
  return post;
}

export default function BlogPost() {
  const post = useLoaderData<BlogPost>();

  return (
    <div className="min-h-screen bg-space-dark text-space-light py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-white mb-6">{post.title}</h1>
        <p className="text-space-neon mb-4">por {post.author} | {post.date} | Vistas: {post.views}</p>
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-6 shadow-lg"
        />
        <p className="text-gray-400 leading-relaxed">{post.content}</p>
        <Link to="/blog" className="mt-6 inline-block text-space-neon hover:text-white transition">
          ← Volver al blog
        </Link>
      </div>
    </div>
  );
}
