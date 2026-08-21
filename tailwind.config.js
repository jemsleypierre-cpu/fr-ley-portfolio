/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        canvas: '#FFF9F2',
        surface: '#FFFFFF',
        crimson: '#B8243A',
        'crimson-dark': '#961B2E',
        amber: '#EAA12B',
        'amber-hover': '#D8901D',
        teal: '#0A5C75',
        ink: '#1A1D20',
        steel: '#64748B',
        mist: '#94A3B8',
        chip: '#F4EFE6',
        gold: '#EAA12B',
        paper: '#FFFFFF',
      },
      letterSpacing: {
        widest: '0.2em',
        ultra: '0.35em',
      },
    },
  },
  plugins: [],
}
