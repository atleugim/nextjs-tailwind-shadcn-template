import type { Config } from 'tailwindcss';
const plugin = require('tailwindcss/plugin');

// Own utilities
const appUtilities = plugin(function ({
  addUtilities
}: {
  addUtilities: (utilities: Record<string, unknown>, variants: unknown) => void;
}) {
  const newUtilities = {
    '.capitalize-first:first-letter': {
      textTransform: 'uppercase'
    },
    '.link': {
      color: 'inherit',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline'
      }
    },

    /* Hide scrollbar for Chrome, Safari, and Opera */
    '.no-scrollbar::-webkit-scrollbar': {
      display: 'none'
    },

    /* Hide scrollbar for IE, Edge, and Firefox */
    '.no-scrollbar': {
      '-ms-overflow-style': 'none' /* IE and Edge */,
      'scrollbar-width': 'none' /* Firefox */
    }
  };
  addUtilities(newUtilities, ['responsive', 'hover']);
});

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      }
    }
  },
  plugins: [appUtilities]
};
export default config;
