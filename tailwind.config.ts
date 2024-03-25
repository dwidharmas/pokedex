import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'poke-normal': '#A8A77A',
        'poke-fire': '#EE8130',
        'poke-water': '#6390F0',
        'poke-electric': '#F7D02C',
        'poke-grass': '#7AC74C',
        'poke-ice': '#96D9D6',
        'poke-fighting': '#C22E28',
        'poke-poison': '#A33EA1',
        'poke-ground': '#E2BF65',
        'poke-flying': '#A98FF3',
        'poke-psychic': '#F95587',
        'poke-bug': '#A6B91A',
        'poke-rock': '#B6A136',
        'poke-ghost': '#735797',
        'poke-dragon': '#6F35FC',
        'poke-dark': '#705746',
        'poke-steel': '#B7B7CE',
        'poke-fairy': '#D685AD',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
