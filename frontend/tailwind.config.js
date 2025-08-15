/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default  {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui,],
  daisyui: {
    themes: ["pastel" , "retro" , "coffee" , "forest" , "dark" , "light" , "cupcake" , "synthwave" , "cyberpunk" , "valentine" , "halloween" , "garden" , "lofi" , "dracula", "business", "acid", "luxury", "night", "autumn", "winter", "cmyk", "black", "corporate", "synthwave-dark    "],
  },
};
