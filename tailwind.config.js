/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: ',hsl(41.84,98.28%,54.51%)',
        secondary: 'hsl(198.62,38.67%,14.71%)',
        white: 'hsl(0,0%,100%)',
        dimWhite: 'hsl(0,0%,96.86%)',
        grey: 'hsl(234.15,18.39%,56.27%)',
        dimGrey: 'hsl(0,0%,86.67%)'
      },
    },
    screens: {
      mobile: '480px',
      tablet: '991px',
      desktop: '1007px',
    }
  },
  plugins: [],
}

