/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html, css}'],
  theme: {
    extend: {
      colors: {
        'white': 'hsl(0, 0%, 100%)',
        'grayish-blue': 'hsl(220, 15%, 55%)',
        'dark-blue': 'hsl(218, 44%, 22%)',
        'light-gray': 'hsl(212, 45%, 89%)',
      },
      fontSize: {
        'paragraph': '15px',
      },
      fontFamily: {
        'sans': ['Outfit']
      }
    },
  },
  plugins: [],
}
