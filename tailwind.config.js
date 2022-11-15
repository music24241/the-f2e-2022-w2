/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#5371C4",
        },
      },
      spacing: {
        10.5: "42px",
      },
    },
  },
  plugins: [],
};
