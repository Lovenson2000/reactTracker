/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm1' : '320px',
      'sm2' : '375px',
      'sm3' : '380px',
      'md1': '480px',
      'md2': '650px',
      'large': '1024px',
    },

    extend: {},
  },
  plugins: [],
}

