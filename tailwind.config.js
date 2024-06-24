/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mediumRed: "#F93B1D",
        mediumGray: "#C1C1C1",
      },
    },
  },
  plugins: [],
};
