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
    },
  },
  plugins: [],
}