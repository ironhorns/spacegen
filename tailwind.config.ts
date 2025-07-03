import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
  
    './src/**/*.{js,ts,jsx,tsx}', // scans all relevant files in your src folder
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors here if you want (optional)
        // e.g., purple: { 600: '#7e22ce' },
      },
    },
  },
  plugins: [],
};

export default config;
