/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'neon-green': '#00c853',
        'neon-purple': '#a855f7',
        'neon-purple-light': '#c084fc',
        'neon-cyan': '#00e5ff',
        'neon-red': '#ff4444',
        'neon-orange': '#ff9800',
        'dark-bg': '#000000',
        'dark-bg-alt': '#070707',
        'dark-panel': '#1c1c1e',
        'dark-blue': '#101221',
        'dark-green': '#192d23',
      },
      fontFamily: {
        'mono': ['Consolas', 'Monaco', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'neon-green': '0 0 20px rgba(0, 200, 83, 0.5), 0 0 40px rgba(0, 200, 83, 0.3)',
        'neon-purple': '0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)',
        'neon-cyan': '0 0 20px rgba(0, 229, 255, 0.5), 0 0 40px rgba(0, 229, 255, 0.3)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { filter: 'drop-shadow(0 0 10px rgba(0, 200, 83, 0.7))' },
          '50%': { filter: 'drop-shadow(0 0 20px rgba(0, 200, 83, 1))' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
