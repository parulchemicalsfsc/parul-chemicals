/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'off-white':  '#F4F6FA',
        'navy':       '#1F4E79',
        'navy-deep':  '#0D2137',
        'blue-brand': '#4DA8DA',
        'teal-brand': '#0EA5A0',
        'amber':      '#F59E0B',
        'text-main':  '#0F1C33',
        'text-sub':   '#4A5568',
        'text-muted': '#94A3B8',
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient':   'linear-gradient(160deg, #0D2137 0%, #1F4E79 50%, #4DA8DA 100%)',
        'section-light':   'linear-gradient(180deg, #F4F6FA 0%, #FFFFFF 100%)',
        'blue-gradient':   'linear-gradient(135deg, #4DA8DA 0%, #0EA5A0 100%)',
        'amber-gradient':  'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
      },
      animation: {
        'fade-in':    'fadeIn 0.8s ease both',
        'slide-up':   'slideUp 0.8s ease both',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'float':      'float 8s ease-in-out infinite',
        'spin-slow':  'spin 20s linear infinite',
      },
      keyframes: {
        fadeIn:  { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: { from: { opacity: '0', transform: 'translateY(40px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        float:   { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-16px)' } },
      },
      boxShadow: {
        'blue-glow':  '0 0 30px rgba(77,168,218,0.35)',
        'teal-glow':  '0 0 30px rgba(14,165,160,0.35)',
        'amber-glow': '0 0 24px rgba(245,158,11,0.40)',
        'card':       '0 4px 32px rgba(15,28,51,0.08)',
        'card-hover': '0 20px 48px rgba(15,28,51,0.14)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
