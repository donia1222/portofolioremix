import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
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
        lightBg: '#ffffff',
        lightText: '#000000',
        darkBg: '#1a202c',
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
        gradientAnimation: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        floatText: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '25%': { opacity: '1', transform: 'translateY(0)' },
          '75%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-20px)' },
        },
      },
      animation: {
        zoom: 'zoom 10s ease-in-out infinite alternate',
        shootingStar: 'shootingStar 5s linear 0s forwards',
        gradientAnimation: 'gradientAnimation 15s ease infinite',
        gradientTextAnimation: 'gradientAnimation 10s ease infinite',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'slide-in-left': 'slideInLeft 1s ease-out',
        'float-text': 'floatText 3s ease-in-out infinite',
      },
      backgroundImage: {
        'animated-gradient': 'linear-gradient(-45deg, #1e3c72,  black,  #1e3c72, black)',
      },
      backgroundSize: {
        '400%': '400%',
      },
    },
  },
  plugins: [],
} satisfies Config;