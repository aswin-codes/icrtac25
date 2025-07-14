/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora : ['Sora'],
        lilita : ['Lilita One']
      },
      colors: {
        mred : '#C8234A',
        mblue : '#0C4DA1',
        morange: '#FA4616'
      }
    },
  },
  plugins: [],
}

