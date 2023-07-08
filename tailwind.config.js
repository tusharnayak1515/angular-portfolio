/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        xxs: "450px",
        xxxs: "480px",
        xs: "550px",
        sm: "640px",
        md: "768px",
        base: "870px",
        md_link: "980px",
        lg: "1024px",
        lg1: "1180px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1650px",
        "4xl": "1850px",
        "5xl": "2140px",
      },
    },
  },
  plugins: [],
};
