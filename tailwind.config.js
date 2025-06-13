/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'ngo-primary': '#1f7a8c', // A shade of blue
        'ngo-dark': '#022b3a',    // A darker blue
        'ngo-secondary': '#bfdbf7', // A lighter blue, if needed for other elements
      },
    },
  },
  plugins: [],
}

