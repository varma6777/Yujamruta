/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#032415',
          DEFAULT: '#063D25', // Deep Forest Green
          800: '#0B4F32',
          700: '#136340',
          600: '#1C7A50',
          500: '#286B38', // Natural Green
          100: '#E6F4EC',
          50: '#F2F9F5',
        },
        natural: {
          DEFAULT: '#286B38',
          dark: '#1C5228',
          light: '#3C8E50',
          soft: '#EAF5EE',
        },
        honey: {
          DEFAULT: '#D99A18', // Honey Gold
          light: '#F8B838',
          amber: '#E5AF36',
          dark: '#B07508',
          cream: '#FFF4D6',
          glow: '#FFEBB0',
          soft: '#FFF9EB',
        },
        cream: {
          DEFAULT: '#FFF8E8', // Warm Cream
          soft: '#FAF5E8',
          muted: '#F5ECE0',
        },
        earth: {
          DEFAULT: '#76502B', // Earth Brown
          dark: '#4A3118',
          light: '#9E7042',
          sand: '#D9C4B0',
        }
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Poppins"', 'sans-serif'],
        decorative: ['"Cormorant Garamond"', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(6, 61, 37, 0.08)',
        'elevated': '0 12px 32px -4px rgba(6, 61, 37, 0.12)',
        'honey': '0 8px 30px -4px rgba(217, 154, 24, 0.25)',
        'gold-glow': '0 0 25px rgba(217, 154, 24, 0.35)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatRev 7s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'drip': 'honeyDrip 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(3deg)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(8px) rotate(-4deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        honeyDrip: {
          '0%': { transform: 'scaleY(0)', transformOrigin: 'top', opacity: '0' },
          '50%': { transform: 'scaleY(1)', transformOrigin: 'top', opacity: '1' },
          '80%': { transform: 'translateY(8px) scaleY(1.1)', opacity: '0.8' },
          '100%': { transform: 'translateY(18px) scale(0)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}
