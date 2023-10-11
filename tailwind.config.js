/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      regularIBM: ["IBM Plex Sans Thai Looped", "sans-serif"],
      semiboldIBM: ["IBM Plex Sans Thai", " sans-serif"],
      IBMPlexSans: ["IBM Plex Sans", "sans-serif"],
    },
    extend: {},
    colors: {
      bodycolor: "#ccd8e0",
      textcolor: "#4b3422",
      bodygreen: "#a0b5a7",
      stronggreen: "#4f776a",
      white: "#ffffff",
      blue: "#22668D",
      y1:"#FFCC70"
    },
  },
  plugins: [],
};
