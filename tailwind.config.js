/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      md: "1000px",
      // => @media (min-width: 640px) { ... }

      lg: "1230px",
      // => @media (min-width: 1024px) { ... }
    },
  },
  plugins: [],
};
