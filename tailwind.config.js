/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{html,js,tsx}",
    "./src/components/**/*.{html,js,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGreen: "#EBEDE6",
        darkGreen: "#D7DCC8",
        text: "#000000",
        offwhite: "#F5F5F5",
        // footer: "#161616",
        // textFooter: "#f8fafc",
        // background: "#f8fafc",
        // text: "#0f172a",
        // header: "#f8fafc",
        // textHover: "#a1a1aa",
        // logo: "#FF5A5F",
        // darkGreen: "#134e4a",
        // bgBase: "#fefeff",
      },
    },
  },
  plugins: [require("daisyui")],
};
