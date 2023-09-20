module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./nuxt.config.{js,ts}",
    ],
    theme: {
      extend: {
        screens: {
          'xs': '475px',
        },
        fontFamily: {
          // 'rubik': ['Rubik', 'sans-serif'],
        },
        colors:{
          'usalo-blue':'#041E42',
          'usalo-sky':'#418FDE',
          'light-usalo-blue':'#1B3B67',
          
          
        },
        
        
      },
    },
    plugins: [],
  }
  
  