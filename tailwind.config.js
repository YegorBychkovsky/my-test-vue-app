module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        375: { min: "320px", max: "395px" },
      },
      fontFamily: {
        raleway: ["Raleway", "sans"],
        "e-ukraine-head": [
          "e-UkraineHead-Bold",
          "e-UkraineHead-Light",
          "e-UkraineHead-LOGO",
          "e-UkraineHead-Medium",
          "e-UkraineHead-Regular",
          "e-UkraineHead-Thin",
          "e-UkraineHead-UltraLight",
          "system-ui",
        ],
      },
      colors: {
        primaryBlue: "#0066CC",
        gray: "#979797",
        yellow: "#FFE601",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
