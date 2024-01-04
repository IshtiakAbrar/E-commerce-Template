/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         mediumseagreen: "#20b15a",
//         white: "#fff",
//         black: "#000",
//         orangered: "#f55f1d",
//         honeydew: "#d7f5dc",
//         mintcream: "#f0fdf4",
//         aliceblue: "#eaeef3",
//         "second-color": "#2e3e5c",
//         "main-color-1": "#1e1f4b",
//         gray: "#8b8b8b",
//       },
//       spacing: {},
//       fontFamily: {
//         poppins: "Poppins",
//         avenir: "Avenir",
//       },
//       borderRadius: {
//         "3xs": "10px",
//         "11xl": "30px",
//         xl: "20px",
//         sm: "14px",
//       },
//     },
//     fontSize: {
//       base: "16px",
//       xl: "20px",
//       lg: "18px",
//       "5xl": "24px",
//       "11xl": "30px",
//       sm: "14px",
//       inherit: "inherit",
//     },
//   },
//
//   plugins: [require("daisyui")],
//   daisyui: {
//     themes: ["light", "cupcake"],
//   },
// };
