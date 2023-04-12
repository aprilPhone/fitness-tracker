/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"},
        "nice-blue": {"0": "#6e44ff", "50": "#8775e1", "100": "#5125d3"},
        "nice-purple": "#b892ff",
        "nice-pink": "#ffc2e2",
        "normal-pink": "#ff90b3",
        "nice-coral": "#ef7a85",
      }
    },
    fontFamily: {
      "primary": ["Raleway", "sans-serif"],
      "secondary": ["Oswald", "sans-serif"],
  },
  },
  plugins: [],
}