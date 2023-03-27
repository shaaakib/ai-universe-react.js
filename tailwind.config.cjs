/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#08dbc2',

          secondary: '#2be2a5',

          accent: '#a6dd73',

          neutral: '#292D32',

          'base-100': '#F6F1F1',

          info: '#72AEDF',

          success: '#13634F',

          warning: '#987B06',

          error: '#F4170B',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
