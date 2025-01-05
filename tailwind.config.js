/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        plex: ['"IBM Plex Sans", serif'],
      },
      colors: {
        primary: "rgba(0, 0, 0, 0.85)",
      },
    },
  },
  plugins: [],
};
