module.exports = {
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bordo': '#370505',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
