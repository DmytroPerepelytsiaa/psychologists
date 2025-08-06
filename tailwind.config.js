/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'white-primary-color': 'var(--white-primary-color)',
        'black-primary-color': 'var(--black-primary-color)',
        'black-primary-color-20': 'var(--black-primary-color-20)',
        'orange-primary-color': 'var(--orange-primary-color)',
        'orange-primary-color-10': 'var(--orange-primary-color-10)',
        'orange-secondary-color': 'var(--orange-secondary-color)',
        'yellow-primary-color': 'var(--yellow-primary-color)',
        'green-primary-color': 'var(--green-primary-color)',
      }
    },
  },
  plugins: [],
}

