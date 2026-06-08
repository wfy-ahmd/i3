
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        background: '#18171C',
        'hot-pink': '#FF3E7A',
        'soft-pink': '#FFB3C8',
        'light-surface': '#C9C4C8',
        'mid-dark': '#5E5A62',
        'text-secondary': '#B8B8B8',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        num: ['Manrope', 'sans-serif'],
      },
      fontSize: {
        hero: ['clamp(3rem, 9vw, 5.625rem)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        section: ['clamp(2.25rem, 5vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      backgroundColor: {
        glass: 'rgba(255,255,255,0.05)',
      },
      borderColor: {
        glass: 'rgba(255,255,255,0.08)',
      },
    },
  },
  plugins: [],
}
