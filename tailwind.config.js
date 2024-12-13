/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index3.html', './index4.html'],
  theme: {
    extend: {
      colors: {
        divContainer: '#78716c',
        primary: '#1e293b', // Blu scuro personalizzato
        secondary: '#fbbf24', // Giallo dorato
        accent: '#34d399', // Verde per elementi di accento
        primary2: "#4CAF50",      // Verde per i titoli principali
        secondary2: "#FF9800",   // Arancione per i titoli secondari
        paragraph: "#333333",   // Grigio scuro per i paragrafi
        link: "#2196F3",        // Blu per i link
        "link-hover": "#1976D2" // Blu scuro per hover sui link
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

