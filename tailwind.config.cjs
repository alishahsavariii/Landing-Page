
module.exports = {
  content: [
 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class" ,
  theme: {
    extend: {
      maxWidth: {
        '16' : '16rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
