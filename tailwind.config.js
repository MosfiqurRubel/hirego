/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        plex: ['"IBM Plex Sans", serif'],
      },
      colors: {
        primary: "#141414",
        secondary: "rgba(0, 0, 0, 0.65)",
        hero: "#B1D8FC",
        footer: "#1B1B1B",
        badge: "#9149ED",
      },
    },
  },
  plugins: [],
};
