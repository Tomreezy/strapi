/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        line:{
          "0%":{width:"0%"},
          "50%":{width:"50%"},
          "100%":{width:"100%"},
        }
      },
      animation:{
        "line":"line 0.15s ease-in "
      }
    },
  },
  plugins: [],
}

