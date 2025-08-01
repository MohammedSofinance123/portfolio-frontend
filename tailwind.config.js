/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // active le dark mode avec la classe "dark"
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      // -------- PALETTE SUPINFO PERSONNALISÉE --------
      colors: {
        'supinfo-violet': '#2B164D',
        'supinfo-blue':   '#18123C',
        'supinfo-cyan':   '#42B5F2',
        'supinfo-coral':  '#FF6E5B',
        'supinfo-gray':   '#F7F7FA',
        'supinfo-dark':   '#35365E',
        // Tu gardes aussi tes bleus & cyans Tailwind
        cyan: {
          50:  '#ECFEFF',
          100: '#CFFAFE',
          200: '#A5F3FC',
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
          600: '#0891B2',
          700: '#0E7490',
          800: '#155E75',
          900: '#164E63',
        },
        blue: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
      },
      // -------- POLICES --------
      fontFamily: {
        montserrat: ['Montserrat', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans:       ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono:       ['Fira Code', 'ui-monospace', 'monospace'],
      },
      // -------- ANIMATIONS --------
      animation: {
        fadeIn: 'fadeIn 0.6s ease forwards',
        pulseSlow: 'pulse 3s ease-in-out infinite',
        wiggle: 'wiggle 0.7s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: 0, transform: 'translateY(12px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%':      { transform: 'rotate(3deg)' },
        },
      },
      transitionTimingFunction: {
        'in-expo':  'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      boxShadow: {
        'neon-cyan': '0 0 8px rgba(6, 182, 212, 0.7), 0 0 15px rgba(6, 182, 212, 0.5)',
        'neon-blue': '0 0 8px rgba(59, 130, 246, 0.7), 0 0 20px rgba(59, 130, 246, 0.5)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
  variants: {
    extend: {
      opacity: ['disabled', 'hover', 'focus'],
      cursor: ['disabled'],
      scale: ['group-hover', 'hover', 'focus'],
      ringWidth: ['hover', 'focus'],
      ringColor: ['hover', 'focus'],
      textColor: ['visited'],
      boxShadow: ['focus-visible', 'hover', 'active'],
      animation: ['hover', 'focus'],
    },
  },
};
