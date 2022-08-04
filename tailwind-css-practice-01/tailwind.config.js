/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "380px",
      lg: "976px",
    },
    extend: {
      colors: {
        primary: "#5d43ff",
        secondary: "#424242",
      },
    },
  },
  plugins: [],
};
