import { fontFamily } from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        vsm: { max: "380px" },
      },

      fontFamily: {
        sans: ["vazir", ...fontFamily.sans],
      },
      colors: {
        orange: {
          700: "#DE3618",
          600: "#FC5858",
          500: "#F25E57",
          400: "#FF755C",
          300: "#FF9F8E",
          100: "#FFCBCB",
        },
        slate: {
          900: "#161D25",
          800: "#222F5D",
          700: "#606060",
          200: "#E2E2E2",
        },
        stone: {
          100: "#F4F4F4",
          50: "#FDFDFD",
        },
        gray: {
          300: "#AFAFAF",
          200: "#EBEBEB",
        },
        indigo: {
          600: "#8750FB",
        },
        yellow: {
          400: "#FFDE74",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
