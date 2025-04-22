import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        // Premium Aurum Color Palette
        background: {
          DEFAULT: '#0A0A0A', // Deep Black
          foreground: '#FFD700', // Gold
        },
        primary: {
          DEFAULT: '#FFD700', // Gold
          foreground: '#0A0A0A', // Deep Black
        },
        secondary: {
          DEFAULT: '#4A4A4A', // Dark Gray
          foreground: '#FFD700', // Gold
        },
        accent: {
          DEFAULT: '#8E9196', // Neutral Gray
          foreground: '#FFD700', // Gold
        },
        border: '#4A4A4A', // Dark Gray border
        ring: '#FFD700', // Gold ring
        destructive: {
          DEFAULT: '#D32F2F', // Strong Red
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#1A1F2C', // Dark Purple
          foreground: '#8E9196', // Neutral Gray
        },
      },
      borderRadius: {
        lg: '0.75rem',
        md: 'calc(0.75rem - 2px)',
        sm: 'calc(0.75rem - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
