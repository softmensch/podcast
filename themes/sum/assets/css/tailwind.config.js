module.exports = {
  darkMode: 'class',
  content: [
    "./themes/**/layouts/**/*.html",
    "./content/**/layouts/**/*.html",
    "./layouts/**/*.html",
    "./content/**/*.html"
  ],
  theme: {
    extend: {
      colors:{
        sum_green: {
          100: '#85AC34'
        },
        sum_orange: '#B84E38',
        sum_offwhite: '#FDFAFA',
        sum_traubensaft: '#540131'
      },
      rotate: {
        270: '270deg'
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ]
}
