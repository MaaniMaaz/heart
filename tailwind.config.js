/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        averia: ["Averia Serif Libre", "serif"],
        dmSans: ["DM Sans"],
        albertsans: ["Albert Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins",],
      },
      screens: {
        'iphone-se': '375px', // Custom breakpoint for iPhone SE
        'iphone-xr': '414px',
        'iphone-12-pro': '390px', 
        'galaxy-s8-plus': '360px',
        'ipad-air': '820px',
        'ipad-pro': { 'min': '1024px', 'max': '1366px' },
      },
    },
  },
  plugins: [],
}