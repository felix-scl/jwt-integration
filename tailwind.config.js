/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        rammetto: ["Rammetto One", "sans-serif"],
        josefina: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        "black-primary": "#0E0F0C",
        "black-secondary": "#163300",
        "grey-primary": "#454745",
        "green-primary": "#9FE870",
      },
    },
  },
  daisyui: {
    themes: ["garden"],
  },
  plugins: [daisyui],
};
