/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInOut: {
          '0%': { opacity: '0' },
          '20%': { opacity: '1' },
          '80%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeInOut: 'fadeInOut 3s ease-in-out',
      },
      colors: {
        'sage': 'rgb(144, 175, 142)',
        'beige': 'rgb(244, 233, 206)',
        'forest': 'rgb(26, 67, 20)',
        'denim': 'rgb(111, 143, 175)',
        'linen': 'rgb(96, 102, 152)',
        'sand': 'rgb(194, 149, 94)'
      },
      fontFamily: {
        customFont: ["SUSE"],
        yay: ["Alumni Sans Pinstripe"],
        fun: ["Playwrite US Modern"],
        final: ["Playfair Display"]
        
      },
    },
  },
  plugins: [],
}