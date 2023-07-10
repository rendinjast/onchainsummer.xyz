/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'timer-active': '#26D356',
        'button-dark-bg': '#151515',
        'button-dark-text': '#FFFFFF',
        'button-dark-hover-bg': '#444444',
        'button-light-bg': '#EFEFEF',
        'button-light-text': '#151515',
        'button-light-hover-bg': '#BFBFBF',
        'button-text-text': '#858585',
      },
      boxShadow: {
        card: '6px 6px 0px #010101',
        crossMintEmail:
          '0px 1px 1px rgba(0, 0, 0, 0.03), 0px 3px 6px rgba(0, 0, 0, 0.02)',
        crossMintEmailFocus:
          '0 0 0 3px hsla(210, 96%, 45%, 25%), 0 1px 1px 0 rgba(0, 0, 0, 0.08)',
      },
      fontFamily: {
        sans: ['var(--font-coinbase-sans)'],
        text: ['var(--font-coinbase-text)'],
        mono: ['var(--font-coinbase-mono)'],
        inter: ['var(--font-inter)'],
      },
      backgroundImage: {
        'trending-linear-gradient':
          'linear-gradient(89.61deg, #42A4FF 0.34%, #A462F7 25.17%, #FF58A6 50.01%, #FF833D 74.84%, #FFDD2C 99.68%)',
        'blue-gradient':
          'linear-gradient(90deg, #309FA7 0%, #9060FF 50%, #0052FF 100%)',
        'yellow-gradient':
          'linear-gradient(336.54deg, #FF912C -67.93%, #FFEA2D 99.39%)',
        'footer-gradient':
          'linear-gradient(to bottom, #0052FF 0%, #0052FF 20%, #54DCE7 20%, #54DCE7 40%, #735DFF 40%, #735DFF 60%, #FCD22D 60%, #FCD22D 80%, #FF7DCB 80%, #FF7DCB 100%)',
        'footer-background-gradient':
          'linear-gradient(to bottom, #FCD22D 0%, #FCD22D 5%, #FF7DCB 5%, #FF7DCB 7.5%, #0052FF 7.5%, #0052FF 10%, #FCD22D 10%, #FCD22D 12.5%, #735DFF 12.5%, #735DFF 15%, #FF7DCB 15%, #FF7DCB 17.5%, #735DFF 17.5%, #735DFF 20%, #54DCE7 20%, #54DCE7 22.5%, #FCD22D 22.5%, #FCD22D 32.5%, #735DFF 32.5%, #735DFF 50%,  #0052FF 50%, #0052FF 100%)',
      },
      keyframes: {
        overlayShow: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        contentShow: {
          from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
          to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
