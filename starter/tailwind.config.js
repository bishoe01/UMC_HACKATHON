/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#14AE81",
        emphasize: "#38FF6B",
        gray: "#2A2A2A",
        lgray: "#BABABA",
        background: "#303D2F",
        input: "#272727",
        inputbg: "#303D2F",
        outlined: "#64FF4E",
      },
    },
  },
  plugins: [],
};
