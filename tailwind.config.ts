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
        // ── Light editorial theme (new) ──────────────────────────────────
        navy:     '#0F172A',
        charcoal: '#374151',
        stone:    '#6B7280',
        terra: {
          DEFAULT: '#B45309',
          hover:   '#92400E',
          light:   '#D97706',
          subtle:  '#FEF3C7',
        },
        sky:      '#2563EB',
        cream:    '#FAFAF7',
        paper:    '#F3EEE5',
        sand:     '#E5E0D8',
        // ── Dark theme (legacy pages — services, portfolio, app, studio) ──
        panel:    '#111128',
        card:     '#1A1A3E',
        border:   '#2A2A5A',
        electric: '#00BFFF',
        pink:     '#E040FB',
        gold:     '#FFD700',
        neon:     '#00FF88',
        muted:    '#555577',
        snow:     '#F0F0FF',
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-lora)', 'Georgia', 'serif'],
        mono:    ['ui-monospace', 'monospace'],
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out forwards',
        float:     'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
