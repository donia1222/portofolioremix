import type { Config } from "tailwindcss";

export default {
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
      // Modificamos el zoom para ser más veloz
      keyframes: {
        zoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        // Animación de la estrella fugaz ajustada para que solo ocurra una vez y desaparezca
        shootingStar: {
          '0%': { opacity: '0', transform: 'translateX(-10%) translateY(-20%)' },
          '20%': { opacity: '1', transform: 'translateX(0) translateY(0)' },
          '80%': { opacity: '1', transform: 'translateX(100vw) translateY(100vh)' },
          '100%': { opacity: '0', transform: 'translateX(110%) translateY(120%)' },
        },
      },
      animation: {
        zoom: 'zoom 10s ease-in-out infinite alternate', // Cambiamos la duración del zoom a 10s
        shootingStar: 'shootingStar 5s linear 0s forwards', // La estrella fugaz solo ocurre una vez
      },
    },
  },
  plugins: [],
} satisfies Config;
