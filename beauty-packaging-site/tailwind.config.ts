import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 从jarsking-crawl提取的设计令牌
      colors: {
        primary: '#1E1E1E',      // --e-global-color-primary
        secondary: '#54595F',    // --e-global-color-secondary
        text: '#7A7A7A',        // --e-global-color-text
        accent: '#61CE70',      // --e-global-color-accent
        'brand-orange': '#E3664B',  // --e-global-color-47322eb
        'brand-navy': '#15294C',    // --e-global-color-7d30505
        'brand-red': '#C7113A',     // --e-global-color-12e8909
        'neutral-light': '#B7B7B7', // --e-global-color-0ae6fec
        'neutral-bg': '#F0F0F0',    // --e-global-color-d416630
      },
      fontFamily: {
        sans: ['Montserrat', 'Roboto', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
        mono: ['monospace'],
      },
      spacing: {
        '0.44': '0.44rem',   // --wp--preset--spacing--20
        '0.67': '0.67rem',   // --wp--preset--spacing--30
        '1': '1rem',         // --wp--preset--spacing--40
        '1.5': '1.5rem',     // --wp--preset--spacing--50
        '2.25': '2.25rem',   // --wp--preset--spacing--60
        '3.38': '3.38rem',   // --wp--preset--spacing--70
        '5.06': '5.06rem',   // --wp--preset--spacing--80
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1440px',  // jarsking容器宽度
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'fade-in-delay': 'fadeIn 0.8s ease-in-out 0.8s both',
        'scale-up': 'scaleUp 0.8s ease-in-out',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      transitionDuration: {
        '800': '800ms',
      },
      boxShadow: {
        'natural': '6px 6px 9px rgba(0, 0, 0, 0.2)',
        'deep': '12px 12px 50px rgba(0, 0, 0, 0.4)',
        'sharp': '6px 6px 0px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}

export default config
