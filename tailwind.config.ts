import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/templates/**/*.{js,ts,jsx,tsx,mdx}',
    './src/mapping/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#ED6C25',
        secondary: '#084772',
      },
    },
  },
  plugins: [],
};
export default config;
