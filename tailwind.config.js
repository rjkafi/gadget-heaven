/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'common': '#9538E2',
      },
      backgroundImage: {
        bannerCard: "url('https://i.ibb.co.com/1sgLqB7/banner.jpg')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

