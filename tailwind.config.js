/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.tsx', 'node_modules/preline/dist/*.js'],
  theme: {
    extend: {},
  },
  plugins: [require('preline/plugin')],
}
