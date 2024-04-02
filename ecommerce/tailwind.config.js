/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
    },
    colors: {
      'esky': '#6FC9CD',
      'ered': '#ac2026',
      'tgray': '#F2F4F7',
      'bfooter': '#43393b',
    },
    fontFamily: {
      'sans': ['"Bebas Neue", sans-serif'],
      'roboto': ['"Roboto", sans-serif'],
    },
    letterSpacing: {
      normal: '1em',
      wide: '1.25em',
      wider: '1.5em',
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}