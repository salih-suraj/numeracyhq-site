import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        panel:   '#111128',
        card:    '#1A1A3E',
        border:  '#2A2A5A',
        electric:'#00BFFF',
        pink:    '#E040FB',
        gold:    '#FFD700',
        neon:    '#00FF88',
        muted:   '#555577',
        snow:    '#F0F0FF',
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,191,255,0.3)' },
          '50%':       { boxShadow: '0 0 40px rgba(0,191,255,0.6)' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'draw-line': {
          '0%':   { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        float:    'float 6s ease-in-out infinite',
        glow:     'glow 3s ease-in-out infinite',
        'fade-up':'fade-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}

export default config
