/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./main.js", "./src/**/*.js"],
  theme: {
    screens: {
      lg: "1162px",
      // => @media (min-width: 1150px) { ... }
      md: "600px",
      // => @media (min-width: 900px) { ... }
    },
    extend: {
      colors: {
        "brand-primary": "#181818",
        "gradient-blue": "#3C33EF",
        "gradient-red": "#F43366",
        "gray-light": "#9ca3af",
        "gray-medium": "#4b5563",
        "gray-strong": "#374151",
        "gray-deep": "#111827",
      },
      fontFamily: {
        primary: ['"Poppins"'],
        secondary: ['"Plus Jakarta Sans"'],
        button: ['"Urbanist"'],
        inter: ['"Inter"'],
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        gradient: "gradient 6s linear infinite",
      },
    },
  },
  plugins: [],
};
