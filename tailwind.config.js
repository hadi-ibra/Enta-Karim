module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      defaultText: '#063B66',
      // Configure your color palette here
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
