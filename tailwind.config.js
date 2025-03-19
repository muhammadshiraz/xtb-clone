/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'xtb-blue': '#0066B3',
        'xtb-dark': '#1A1E2C',
        'xtb-accent': '#FF6B00',
      },
    },
  },
  plugins: [],
}