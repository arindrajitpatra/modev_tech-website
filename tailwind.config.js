/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#040711',
          900: '#070B18',
          850: '#0B1024',
          800: '#0F1631',
          750: '#151D40',
          700: '#1C2652',
          600: '#283770',
        },
        brand: {
          cyan: '#22D3EE',
          blue: '#3B82F6',
          violet: '#A855F7',
          pink: '#EC4899',
        },
        glow: {
          cyan: 'rgba(34, 211, 238, 0.4)',
          blue: 'rgba(59, 130, 246, 0.4)',
          violet: 'rgba(168, 85, 247, 0.4)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.15) 0%, rgba(168, 85, 247, 0.08) 35%, rgba(4, 7, 17, 0) 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
        'glow-gradient': 'linear-gradient(90deg, #3B82F6 0%, #22D3EE 50%, #A855F7 100%)',
      },
      boxShadow: {
        'glow-sm': '0 0 15px -3px rgba(34, 211, 238, 0.25)',
        'glow-md': '0 0 25px -5px rgba(59, 130, 246, 0.3)',
        'glow-lg': '0 0 40px -10px rgba(168, 85, 247, 0.35)',
        'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.4)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.4)',
        'glow-violet': '0 0 20px rgba(168, 85, 247, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 3s infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'spin-slow': 'spin 20s linear infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
