/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],  
  theme: {
    extend: {
      backgroundImage: {
        'header-image': "url('./assets/image/header.webp')",
        'about-image': "url('./assets/image/about.webp')",
        'banner-image': "url('./assets/image/banner.webp')",
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
