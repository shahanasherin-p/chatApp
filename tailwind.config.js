import daisyUi from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyUi],
  daisyUi:{
    themes:[
      "light",
      "dark",
    ],
  }
}