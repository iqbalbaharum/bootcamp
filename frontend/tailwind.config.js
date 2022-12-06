/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        robotoRegular: ["Roboto"],
        robotoMono: ["Roboto", "monospace"],
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        main: "var(--main)",
        background: "var(--background)",
        header: "var(--header)",
        accent: "var(--accent)",
        btnPrimary: "var(--btnPrimary)",
      },
      screens: {
        xs: { max: "639px" },
        sm: { min: "640px" }, // large mobiles
        md: { min: "768px" }, // iPads, Tablets
        lg: { min: "1024px" }, // Small screens, laptops
        xl: { min: "1280px" }, // Desktops, large screens
        "2xl": { min: "1536px" }, // Extra large screens, TV
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
