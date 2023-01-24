module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--clr-primary)',
        secondary: 'var(--clr-secondary)',
        accent: 'var(--clr-accent)'
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}
