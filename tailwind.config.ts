import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A',
        accent: '#06B6D4',
        background: '#F8FAFC'
      },
      boxShadow: {
        'soft': '0 10px 30px rgba(15, 23, 42, 0.08)'
      },
      borderRadius: {
        xl: '1rem'
      }
    }
  },
  plugins: []
};

export default config;
