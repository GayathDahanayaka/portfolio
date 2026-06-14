export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#06B6D4',
        'brand-purple': '#8B5CF6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(6,182,212,0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(139,92,246,0.4)' },
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #06B6D4, #8B5CF6)',
        'gradient-dark': 'radial-gradient(ellipse at top left, rgba(6,182,212,0.08) 0%, transparent 50%), radial-gradient(ellipse at bottom right, rgba(139,92,246,0.08) 0%, transparent 50%)',
      },
    },
  },
  plugins: [],
};
