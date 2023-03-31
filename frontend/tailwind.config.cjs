/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./src/data/*.json",
  ],
  theme: {
    extend: {
      colors: {
        "maptm-orange": "#ff784d",
      },
      screens: {
        "2xl": "1500px",
      },
    },
  },
  plugins: [],
};
