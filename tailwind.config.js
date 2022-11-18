/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#3175FA",
          200: "#DCECFF",
          300: "#2465E3",
        },
        neutral: {
          100: "#F1F2F5",
          200: "#E3E4EA",
          300: "#DADBE1",
          400: "#B7BAC0",
          500: "#78797D",
          600: "#191A1B",
        },
        secondary: {
          100: "#FBBB1E",
          200: "#E3A200",
        },
        success: {
          100: "#38D600",
        },
        warning: {
          100: "#F2BD02",
        },
        danger: {
          100: "#F64331",
        },
        file: {
          100: "#DF5A3C",
          200: "#4F8BFF",
        },
        tag: {
          light: {
            100: "#FAEDCC",
            200: "#F5DFCC",
            300: "#F1E1E9",
            400: "#DFEAFF",
            500: "#FAE3DE",
            600: "#DEECDC",
            700: "#D6E4EE",
            800: "#E6DEED",
            900: "#EFEFEF",
            1000: "#ECE0DB",
          },
          dark: {
            100: "#3D2D1E",
            200: "#452A13",
            300: "#472536",
            400: "#171C52",
            500: "#551C18",
            600: "#23372A",
            700: "#1F3245",
            800: "#3D2551",
            900: "#353435",
            1000: "#402B20",
          },
        },
      },
      boxShadow: {
        100: "0px 0px 15px rgba(25, 26, 27, 0.08)",
        200: "0px 0px 20px rgba(25, 26, 27, 0.15)",
        300: "0px 0px 4px rgba(79, 139, 255, 0.4)",
      },
    },
  },
  plugins: [],
};
