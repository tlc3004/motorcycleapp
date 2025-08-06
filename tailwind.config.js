/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '360px',      // Teléfonos pequeños
        'sm': '640px',      // Celulares normales
        'md': '768px',      // Tablets
        'lg': '1024px',     // Laptops
        'xl': '1280px',     // Monitores
        '2xl': '1536px',    // Pantallas grandes
      },
    },
  },
  plugins: [],
}
