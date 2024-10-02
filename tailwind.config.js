/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: { xs: "496px" },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        rammetto: ["Rammetto One", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        "black-primary": "#0E0F0C",
        "black-secondary": "#163300",
        "grey-primary": "#454745",
        "green-primary": "#9FE870",
        "green-secondary": "#80E142",
      },
    },
  },
  daisyui: {
    themes: ["garden"],
  },
  plugins: [daisyui],
};
