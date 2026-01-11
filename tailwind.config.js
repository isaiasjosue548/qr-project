/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts}"],
    theme: {
      extend: {
        fontFamily: {
          outfit: ["Outfit", "sans-serif"],
        },
        colors: {
          white: "hsl(0, 0%, 100%)",
          slate300: "hsl(212, 45%, 89%)",
          slate500: "hsl(216, 15%, 48%)",
          slate900: "hsl(218, 44%, 22%)",
        },
      },
    },
    plugins: [],
  };
  