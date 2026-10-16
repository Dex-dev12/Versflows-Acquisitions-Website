/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0A0C11',
        'night-2': '#0E1118',
        deep: '#0B2247',
        ink: '#F0F2F5',
        muted: '#A0A6B1',
        faint: '#7D838F',
        signal: '#0060FC',
        sky: '#62BDFF',
      },
      fontFamily: {
        sans: ['Geist', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        site: '76rem',
      },
      borderRadius: {
        panel: '18px',
      },
      transitionTimingFunction: {
        expo: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
