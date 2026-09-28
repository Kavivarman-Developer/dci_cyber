/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2563eb',
          indigo: '#4f46e5',
          violet: '#7c3aed',
          fuchsia: '#c026d3',
          rose: '#e11d48',
          emerald: '#059669',
          cyan: '#0891b2',
          amber: '#d97706',
          navy: '#0f172a',
        },
      },
      backgroundImage: {
        'hero-overlay': 'linear-gradient(180deg, rgba(255, 255, 255, 0.88) 0%, rgba(248, 250, 252, 0.95) 100%)',
        'gradient-cyber': 'linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #c026d3 100%)',
        'gradient-emerald': 'linear-gradient(135deg, #059669 0%, #0891b2 100%)',
        'gradient-fire': 'linear-gradient(135deg, #e11d48 0%, #d97706 100%)',
      },
      boxShadow: {
        'card-vibrant': '0 10px 30px -5px rgba(37, 99, 235, 0.12), 0 4px 12px -2px rgba(124, 58, 237, 0.08)',
        'blue-glow': '0 0 25px rgba(37, 99, 235, 0.35)',
        'violet-glow': '0 0 25px rgba(124, 58, 237, 0.35)',
        'emerald-glow': '0 0 25px rgba(16, 185, 129, 0.35)',
      }
    },
  },
  plugins: [],
}
