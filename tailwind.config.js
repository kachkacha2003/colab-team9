/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "off-black": "#1A1A1A",
        "off-grey": "#BCBCBC",
      },
    },
  },
  plugins: [],
};
