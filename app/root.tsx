import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { SpeedInsights } from "@vercel/speed-insights/remix"
import { Analytics } from "@vercel/analytics/remix"

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter&display=swap",
  },
  { rel: "icon", href: "/favicon.ico" },
];

export const meta: MetaFunction = () => {
  return [
    { charset: "utf-8" },
    { title: "Lweb" },
    { name: "description", content: "lweb schweiz" },
    { name: "keywords", content: "Moderne Webssiten, App-Entwicklung st gallen, App-Entwicklung zurich" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "theme-color", content: "#000000" },
  ];
};

export default function App() {
  return (
    <html lang="es" data-theme="light">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <SpeedInsights />
        <Analytics />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
