/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'white-primary-color': 'var(--white-primary-color)',
      }
    },
  },
  plugins: [],
}

