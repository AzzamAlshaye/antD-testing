/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./routes/**/*.{js,ts,jsx,tsx}",
    "./context/**/*.{js,ts,jsx,tsx}",
    "./config/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#4166F5",
        primaryDark: "#21337B",
        colorMainWhite: "#F9F9F9",
        colorGrayMain: "#ECEEF7",
        colorGrayBorder: "#DBDBDB",
        colorGray50Dark: "#76777C",
        colorBlueLightBg: "#EFF2FF",
        colorUserAvatarBg: "#BDC9FA",
        brand: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#4166F5",
          600: "#2F5BFF",
          700: "#1F49FF",
          800: "#1E40AF",
          900: "#1E3A8A",
        },
        navy: {
          900: "#0F0F29",
          800: "#13256C",
          700: "#21337B",
        },
        surface: {
          50: "#FFFFFF",
          100: "#F9F9F9",
          200: "#F2F2F2",
          300: "#EDEDED",
        },
        text: {
          900: "#0A0E14",
          700: "#1A1A1A",
          500: "#5E6C84",
          400: "#76777C",
        },
      },
      boxShadow: {
        card: "0px 4px 24px rgba(182,182,182,0.13)",
        cardSoft: "0px 6px 20px rgba(182,182,182,0.1)",
        nav: "0px 2px 8px rgba(0,0,0,0.15)",
      },
      borderRadius: {
        card: "8px",
      },
    },
  },
  plugins: [],
};
