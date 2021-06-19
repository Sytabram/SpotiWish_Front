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
        'one-black': '#1F1F1F',
        'two-black': '#505050',
        'gray-clair': '#505050',
        'gray-fonce': '#282828',
        'purple-clair': '#50399B',
        'purple-fonce': '#1F173B',
        'bordo': '#370505',
        'red-page': '#B6213B',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography')],
};
