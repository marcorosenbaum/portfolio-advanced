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
        "custom-dark": "rgb(29 42 62)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(299deg, rgba(11,14,19,1) 0%, rgba(58,77,105,1) 48%, rgba(11,14,19,1) 100%)", // Add custom gradient
      },
      height: (theme) => ({
        screenMinusHeader: `calc(100vh - ${theme("spacing.main-header")})`,
      }),
    },
  },
};
