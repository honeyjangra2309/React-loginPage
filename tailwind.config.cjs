/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        white:"#ffffff",
        primary: "#222222",
        secondary: "#00f6ff",
        myWhite: "#FEFEFE",
        myBlack: "#2B2B2B",
        dimWhite: " rgba(254, 254, 254, 0.5)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        dimGrey: "rgba(255,255,255,0.1)",
        pColor: "rgba(43, 43, 43, 0.5)",
        loginbg: "#652EBE",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway:["Raleway","sans-serif"]
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
