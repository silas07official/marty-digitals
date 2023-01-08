/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sectionBg:'#FAFAFF',
        bigText:'#3B3951'
      }
    },
  },
  plugins: [],
};
