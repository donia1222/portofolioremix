import type { Config } from "tailwindcss";

export default {
  darkMode: 'class', // Habilita el modo oscuro basado en clases
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        // Definimos colores específicos para modo oscuro y claro
        lightBg: '#ffffff',
        lightText: '#000000',
        darkBg: '#1a202c', // gris oscuro para el modo oscuro
        darkText: '#ffffff',
      },
      keyframes: {
        zoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        shootingStar: {
          '0%': { opacity: '0', transform: 'translateX(-10%) translateY(-20%)' },
          '20%': { opacity: '1', transform: 'translateX(0) translateY(0)' },
          '80%': { opacity: '1', transform: 'translateX(100vw) translateY(100vh)' },
          '100%': { opacity: '0', transform: 'translateX(110%) translateY(120%)' },
        },
      },
      animation: {
        zoom: 'zoom 10s ease-in-out infinite alternate',
        shootingStar: 'shootingStar 5s linear 0s forwards',
        
      },
    },
  },
  plugins: [],
} satisfies Config;
