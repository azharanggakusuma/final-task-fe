/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#FE024E",
        secondary: "#EB507F",
      },
    },
  },
  plugins: [],
};
