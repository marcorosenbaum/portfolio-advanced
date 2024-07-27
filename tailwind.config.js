export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "main-header": "8vh",
      },
      colors: {
        "accent-color": "#04fbd6",
        "accent-color-dark": "#05e0bf",
      },
      height: (theme) => ({
        screenMinusHeader: `calc(100vh - ${theme("spacing.main-header")})`,
      }),
    },
  },
};
