/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            lato: ["Lato", "sans-serif"],
            playwrite: ["Playwrite GB S", "cursive"],
            poppins: ["Poppins", "sans-serif"],
         },
         colors: {
            primary: {
               dark: "rgb(25,31,36)",
               light: "rgb(250 250 250)",
            },
            secondary: {
               dark: "rgb(39,47,54)",
               light: "rgb(229 229 229)",
            },
         },
      },
   },
   plugins: [],
   darkMode: "class",
};
