/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {

        mediumRed: "#F93B1D",
        mediumGray: "#C1C1C1",
        lightBlue: "#62A1EB",
        darkBlue: "#6B40E3",
        lightGray: "#909090",

        "off-black": "#1A1A1A",
        "off-grey": "#BCBCBC",

      },
    },
  },
  plugins: [],
};
