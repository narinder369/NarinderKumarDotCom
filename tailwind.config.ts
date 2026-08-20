import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          pink: "#F472B6",
          sky: "#7DD3FC",
          brown: "#5A1F0A",
          cream: "#FFF7E8",
          border: "#E2E8F0",
          body: "#252525",
          muted: "#64748B",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      maxWidth: {
        content: "78rem",
      },
      boxShadow: {
        card: "0 8px 24px -16px rgba(90, 31, 10, 0.12)",
        nav: "0 8px 24px -18px rgba(90, 31, 10, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
