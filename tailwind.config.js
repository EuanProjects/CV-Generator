/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        dropdownin: {
          '0%' : { marginTop: '-2.5%', opacity: 0},
          '100%' : {marginTop: '0%', opacity:1}
        },
        dropdownout: {
          '0%' : {marginTop: '0%', opacity:1},
          '100%' : { marginTop: '-2.5%', opacity: 0}
        }
      },
      animation: {
        dropdownin: 'dropdownin 0.25s',
        dropdownout: 'dropdownout 0.5s'
      }
    },
  },
  plugins: [],
}