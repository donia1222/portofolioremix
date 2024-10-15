import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";

// Función para definir los enlaces a fuentes y hojas de estilo
export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

// Función para definir los metadatos de la aplicación, devolviendo un array de objetos
export const meta = () => [
  { charset: "utf-8" },
  { title: "Mi aplicación Remix" },
  { name: "viewport", content: "width=device-width,initial-scale=1" },
  { name: "theme-color", content: "#0D1C16" }, // El color que quieres para la barra en móviles
];

// Componente Layout que envuelve el contenido principal de la aplicación
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta /> {/* Aquí se renderizan los meta tags definidos */}
        <Links /> {/* Aquí se renderizan los enlaces definidos */}
      </head>
      <body>
        {children} {/* Aquí se inserta el contenido de las rutas */}
        <ScrollRestoration /> {/* Para manejar el scroll entre navegaciones */}
        <Scripts /> {/* Scripts necesarios para la funcionalidad de Remix */}
      </body>
    </html>
  );
}

// Componente principal de la aplicación
export default function App() {
  return (
    <Layout>
      <Outlet /> {/* El componente Outlet renderiza las rutas hijas */}
    </Layout>
  );
}
