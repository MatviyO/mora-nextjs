import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'light-m1': "var(--bg-light-1)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: "var(--black)",
        "colors-black": "var(--colors-black)",
        "colors-black-duplicate": "var(--colors-black-duplicate)",
        "colors-dark-green": "var(--colors-dark-green)",
        "colors-dark-green-duplicate": "var(--colors-dark-green-duplicate)",
        "colors-light-green": "var(--colors-light-green)",
        "colors-light-green-duplicate": "var(--colors-light-green-duplicate)",
        "colors-main-green": "var(--colors-main-green)",
        "colors-white": "var(--colors-white)",
        "colors-white-duplicate": "var(--colors-white-duplicate)",
        white: "var(--white)",
      },
      fontFamily: {
        "body-14-desktop": "var(--body-14-desktop-font-family)",
        "body-16": "var(--body-16-font-family)",
        "body-18-desktop": "var(--body-18-desktop-font-family)",
        "h1-desktop": "var(--h1-desktop-font-family)",
        "h1-mobile": "var(--h1-mobile-font-family)",
        "h2-desktop": "var(--h2-desktop-font-family)",
        "h2-mobile": "var(--h2-mobile-font-family)",
        "h3-desktop": "var(--h3-desktop-font-family)",
        "h3-mobile": "var(--h3-mobile-font-family)",
        "h4-desktop": "var(--h4-desktop-font-family)",
        "h5-desktop": "var(--h5-desktop-font-family)",
        "h6-desktop": "var(--h6-desktop-font-family)",
        "h7-desktop": "var(--h7-desktop-font-family)",
        "h8-desktop": "var(--h8-desktop-font-family)",
        tagline: "var(--tagline-font-family)",
      },
      boxShadow: {
        shadow: "var(--shadow)",
      },
    },
  },
  plugins: [],
} satisfies Config;
