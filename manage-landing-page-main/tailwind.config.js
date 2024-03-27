/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        fade: {
          'from': { opacity:0 },
          'to': { opacity:1},
        }
      },
      animation: {
        fade: 'fade 2s',
      },
      transition: {
        'background-color': 'brightRed',
        'duration': '0.6s',
        'transition-timing-function': 'ease',
      },
      screens:{
        sm:"480px",
        md:"768px",
        lg:"992px",
        xl:"1440px"
      },
      colors:{
        brightRed:"hsl(12, 88%, 59%)",
        darkBlue:"hsl(228, 39%, 23%)",
        darkGreyishBlue:"hsl(227, 12%, 61%)",
        veryDarkBlue:"hsl(233, 12%, 13%)",
        veryPaleRed:"hsl(13, 100%, 96%)",
        veryLightGrey:"hsl(0, 0%, 98%)"
      },
      fontFamily:{
        fontfamily:"Be Vietnam Pro, sans-serif"
    },
    backgroundImage:({
            'desktop': "url('/images/bg-simplify-section-desktop.svg')",
            'mobile': "url('/images/bg-simplify-section-mobile.svg')",
            'tablet': "url('/images/bg-tablet-pattern.svg')",

              }),
              backgroundSize: {
                'auto': 'auto',
                'cover': 'cover',
                'contain': 'contain',
              },
  },
  plugins: [],
}
}
