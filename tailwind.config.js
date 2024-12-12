/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index3.html'],
  theme: {
    extend: {
      colors: {
        primary: '#1e293b', // Blu scuro personalizzato
        secondary: '#fbbf24', // Giallo dorato
        accent: '#34d399', // Verde per elementi di accento
      },
      fontFamily: {
        custom: ['"Open Sans"', 'sans-serif'], // Font personalizzato
      },
      spacing: {
        '72': '18rem', // Spaziatura personalizzata
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}

