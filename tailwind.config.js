/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#F06055",
        mainBg : "#111",
        blackY : "#131313",
        textSpan : "#F06055",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        'hero': "url('https://tse1.mm.bing.net/th?id=OIP.z_oghUBUgSBZsSTAK5JvbAHaEu&pid=Api&P=0&h=180')",
        'background' : "url('https://i.pinimg.com/564x/f4/d9/94/f4d994ceea45748fa943cd6fbd22331c.jpg')",
      },
      keyframes: {
        bounce : {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          }
        },

        spin : {
          '0%' : { 
            transform: 'rotate(0deg)',
          },
          '100%' : {
            transform: 'rotate(360deg)',
          },
        },
      },
      animation: {
        bounce: 'bounce 5s infinite',
        slideTop : 'slideTop 4s ease-in-out ',
        spin : 'spin 100s infinite',
      }
    },
    screens: {
      as : "0px",
      xs: "480px",
      ss: "620px",
      km: "768px",
      sm :"952px",
      md: "1060px",
      lg: "1280px",
      xl: "1700px",
    },
  },
  plugins: [],
};