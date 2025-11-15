const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: [
        "Arial",
        "Microsoft JhengHei",
        "Inter",
        "NotoSansTC",
        ...defaultTheme.fontFamily.sans,
      ],
      inter: [
        "Arial",
        "Microsoft JhengHei",
        "Inter",
        ...defaultTheme.fontFamily.sans,
      ],
    },
    screens: {
      xl: "1100px",
      sm: "640px",
    },
    extend: {
      flex: {
        0: "0 0 auto",
      },
      colors: {
        primary: {
          light: "#ffecec",
          DEFAULT: "#f29c97",
          dark: "#eb635c",
        },
        secondary: {
          light: "#ecf8fc",
          DEFAULT: "#235378",
        },
        error: {
          DEFAULT: "#ba1200",
        },
        yellow: {
          DEFAULT: "#f2af29",
        },
        gray: {
          100: "#f5f5f5",
          200: "#e1e1e1",
          300: "#c3c3c3",
          500: "#828282",
          600: "#696969",
          800: "#2d2d2d",
        },
        dark: {
          DEFAULT: "#1c1b19",
        },
        light: {
          DEFAULT: "#f6f8fa",
          dark: "#807B75",
        },
        black: {
          DEFAULT: "#000000",
        },
        white: {
          DEFAULT: "#ffffff",
        },
      },
      boxShadow: {
        DEFAULT: "0 0 12px 0 rgba(0, 0, 0, 0.1)",
        16: "0 0 16px 0 rgba(0, 0, 0, 0.16)",
        "8-16": "0 8px 16px rgba(0, 0, 0, 0.16)",
      },
      backgroundImage: {
        banner:
          "linear-gradient(to bottom, rgba(35, 83, 120, 0.4), rgba(35, 83, 120, 0.4))",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
