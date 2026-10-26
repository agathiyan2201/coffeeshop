/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Colors from the Figma "Color Guide" page
      colors: {
        brand: {
          DEFAULT: '#C67C4E',
          soft: '#F9F2ED',
        },
        ink: {
          DEFAULT: '#242424',
          2: '#313131',
        },
        muted: {
          DEFAULT: '#A2A2A2',
          2: '#9B9B9B',
        },
        line: {
          DEFAULT: '#E3E3E3',
          2: '#DEDEDE',
        },
        surface: '#F9F9F9',
        chip: '#EDEDED',
        rail: '#DFDFDF',
        canvas: '#E5E5E5',
        search: '#2A2A2A',
        promo: '#ED5151',
        success: '#36C07E',
        star: '#FBBE21',
        dark: {
          1: '#111111',
          2: '#313131',
        },
      },
      // Typography from the Figma "Typography" page
      fontFamily: {
        sans: ['Sora', '"Segoe UI"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      screens: {
        // Real phones: the app fills the whole screen
        phone: { max: '480px' },
      },
      boxShadow: {
        device: '0 30px 60px -20px rgba(0,0,0,.35), 0 0 0 8px #1B1B1B',
        sheet: '0 -10px 30px -18px rgba(0,0,0,.3)',
        bar: '0 -8px 24px -18px rgba(0,0,0,.25)',
        card: '0 6px 18px -10px rgba(0,0,0,.25)',
        float: '0 4px 12px -6px rgba(0,0,0,.2)',
      },
    },
  },
  plugins: [],
};
