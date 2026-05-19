import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        aurora: {
          olive: "var(--aurora-olive)",
          beige: "var(--aurora-beige)",
          coffee: "var(--aurora-coffee)",
          offwhite: "var(--aurora-offwhite)",
          earth: "var(--aurora-earth)",
          text: "var(--aurora-text)",
          muted: "var(--aurora-muted)"
        }
      },
      borderRadius: {
        aurora: "1.25rem"
      },
      boxShadow: {
        soft: "0 12px 30px rgba(52, 41, 31, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
