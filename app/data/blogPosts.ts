export type BlogPost = {
  id: string;
  title: string;
  author: string;
  date: string;
  content: string;
  imageUrl: string;
  views: number;
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Inauguración del blog",
    author: "Roberto Salvador",
    date: "2024-10-17",
    content: "Este es el contenido de la primera entrada del blog.",
    imageUrl: "/images/post1.jpg",
    views: 10,
  },
  {
    id: "2",
    title: "Segunda entrada",
    author: "Roberto Salvador",
    date: "2024-10-18",
    content: "Este es el contenido de la segunda entrada del blog.",
    imageUrl: "/images/post2.jpg",
    views: 20,
  },
];
