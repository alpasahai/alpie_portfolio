// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        maroon: '#4B0A13',   //background
        rose: '#B14B61',     //main elements + fonts
        blush: '#D39AA6',    //accents
        creme: '#D9D9D9',    //paper and polaroids
      },
      fontFamily: {
        nav: ['Italiana', 'serif'],
        body: ['Inika', 'serif'],
        heading: ['Freehand', 'cursive'],
      },
    },
  },
  plugins: [],
}
