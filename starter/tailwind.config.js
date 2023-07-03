/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#277BC0',
        'emphasize': '#FFB200',
        'border': '#E5E5E5',
      }
    },
  },
  plugins: [],
}

