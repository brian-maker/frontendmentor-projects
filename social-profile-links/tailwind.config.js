/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgColor':'#141414',
        'cardColor':'#1f1f1f',
        'titleColor':'#ffffff',
        'brightYellow':'#a0bb44',
        'buttonColor':'#333333',
        'hover':'#c4f82a'
  
      },
    },
  },
  plugins: [],
}

