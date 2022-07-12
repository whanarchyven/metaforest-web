/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,js,tsx,jsx}",
    "./components/**/*.{ts,js,tsx,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto'],
      },
      colors:{
        'common':'#B8B8B8',
        'uncommon':'#9BCA15',
        'epic':'#9600FF',
        'legendary':'#FF8F00',
        'common-weak':'#E1E1E3',
        'uncommon-weak':'#CFDEAC',
        'epic-weak':'#C89BEE',
        'legendary-weak':'#F1D0A9',
      }
    },
  },
  plugins: [],
}
