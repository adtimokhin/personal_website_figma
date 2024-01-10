/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['var(--montserrat)','Montserrat', 'sans-serif'],
        'switzer': ['var(--switzer)','Switzer', 'sans-serif'],
      },
      colors: {
        'bg-color': '#041121',
        'text-color': '#F8FBFF',
        'main-color': '#0D56AA',
        'secondary-color': '#0076FF',
        'accent-color': '#FFC402',
      },
      screens:{
        // Design for mobile first!
        'tablet':"744px",
        'laptop':"1280px",
        'desktop':"1440px", // I never used this in the design, but it's here just in case
      },
      // Gutters refer to the grid design for the project
      // Margins refer to the grid design for the project
      padding: {
        'gutter-laptop': '1.25rem',
        'gutter-tablet': '1.25rem',
        'gutter-phone': '0.313rem',
        'margin-laptop': '5rem',
        'margin-tablet': '1.25rem',
        'margin-phone': '0.313rem',
      },
      margin:{
        'margin-laptop': '5rem',
        'margin-tablet': '1.25rem',
        'margin-phone': '0.313rem',
        'gutter-laptop': '1.25rem',
        'gutter-tablet': '1.25rem',
        'gutter-phone': '0.313rem',
      },
      space:{
        'section-laptop': '12rem',
        'section-tablet': '8rem',
        'section-phone': '5rem',
      }
    },
  },
  plugins: [],
}