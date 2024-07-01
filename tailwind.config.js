import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#7cc1fd',
        'primary-font': '#c2c2c2',
        'bg-dark-blurred': 'rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: '#7cc1fd',
              foreground: '#323232',
            },
            secondary: {
              DEFAULT: '#0E86D4',
              foreground: '#ffffff',
            },
          },
        },
      },
    }),
  ],
};
