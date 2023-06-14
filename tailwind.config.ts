/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "640px",
      // => @media (min-width: 640px) { ... }

      laptop: "1120px",
      // => @media (min-width: 1120px) { ... }

      desktop: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontSize: {
        h1: [
          "3.375rem",
          {
            lineHeight: "4.5rem",
            fontWeight: "700",
          },
        ],
        h2: [
          "1.25rem",
          {
            lineHeight: "2.125rem",
            fontWeight: "400",
          },
        ],
      },
      colors: {
        chocolate: "#603809",
        primary: "#F9C06A",
        secondary: "#707070",
      },
    },
  },
  plugins: [],
};
