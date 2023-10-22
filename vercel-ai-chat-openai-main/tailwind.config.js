const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['app/**/*.{ts,tsx}', 'components/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans]
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(0, 0, 0)',
        ring: 'hsl(0, 0, 0)',
        background: 'hsl(var(--background))',
        foreground: 'hsl(0, 0, 0)',
        primary: {
          DEFAULT: 'hsla(262, 100%, 47%, 1)',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsla(262, 100%, 47%, 1)',
          foreground: 'hsl(256.4, 84.6%, 56.7%)'
        },
        destructive: {
          DEFAULT: 'hsl(0, 0, 0)',
          foreground: 'hsl(256.4, 84.6%, 56.7%)'
        },
        muted: {
          DEFAULT: 'hsl(256.4, 84.6%, 56.7%)',
          foreground: 'hsl(0, 0%, 100%)'
        },
        accent: {
          DEFAULT: 'hsl(270, 100%, 50%)',
          foreground: 'hsl(256.4, 84.6%, 56.7%)'
        },
        popover: {
          DEFAULT: 'hsl(0, 0, 0)',
          foreground: 'hsl(0, 0, 0)'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        },
        'slide-from-left': {
          '0%': {
            transform: 'translateX(-100%)'
          },
          '100%': {
            transform: 'translateX(0)'
          }
        },
        'slide-to-left': {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          }
        }
      },
      animation: {
        'slide-from-left':
          'slide-from-left 0.3s cubic-bezier(0.82, 0.085, 0.395, 0.895)',
        'slide-to-left':
          'slide-to-left 0.25s cubic-bezier(0.82, 0.085, 0.395, 0.895)',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')]
}
