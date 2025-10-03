/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter'],
        'serif': ['Playfair Display'],
      },
      colors: {
        'brand-teal': '#1a535c',      // Deep, sophisticated teal
        'brand-gold': '#c4a265',      // Soft, elegant gold
        'brand-cream': '#fdfcf8',     // Warm off-white background
        'brand-charcoal': '#333333',  // Dark text color for readability
      }
    },
  },
  plugins: [],
}