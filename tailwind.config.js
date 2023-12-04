/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#29EB18', // primary color
        primaryDark: '#00850b',
        martian: '#FF6605'  // orange color
      }
    },
    fontFamily: {
      sans: ['Space Grotesk', 'sans-serif']
    }
  },
  plugins: [],
}

