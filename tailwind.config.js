module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto"],
      },
      fontSize: {
        xs: ".62rem",
      },
      backgroundOpacity: {
        85: "0.85",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
