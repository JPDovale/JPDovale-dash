/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        green200: '#00ff00',
        green300: '#00cb00',
        green400: '#009c00',
        green500: '#008000',
        green600: '#005c00',

        blue900: '#000826',
        blue600: '#00104e',
        blue500: '#00136f',
        blue400: '#001c8e',
        blue200: '#0029cf',
      },
      gridTemplateColumns: {
        20: 'repeat(20, minmax(0, 1fr))',
      },
      fontFamily: {
        dots: 'Codystar',
        base: 'Roboto',
        mono: 'Cutive Mono',
        pixels: 'Pixelify Sans',
        pixelsAlternative: 'Rubik Pixels',
        icons: 'Noto Sans Symbols 2',
        light: 'Bungee Hairline',
      },
      animation: {
        fall: 'fall 5s linear infinite',
      },
      keyframes: {
        fall: {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(100vh)',
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
