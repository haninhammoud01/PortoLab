module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
            mystical: ['Cinzel', 'serif'],
      },
      colors: {
        'dark-bg': '#0f0f0f',
        'dark-card': '#1a1a1a',
        'accent-pink': '#ff2aae',
        'text-primary': '#f0f0f0',
        'text-secondary': '#a0a0a0',
      }
    },
  },
  plugins: [],
}