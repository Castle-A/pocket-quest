module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ocean: "#2B7FE8",
        mint: "#34C759",
        orange: "#FF9500",
        dark: {
          bg: "#0a0a0f",
          surface: "#0a0a2e",
          card: "#0a0a1a",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
