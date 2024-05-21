import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baloo: ["var(--Baloo)"]
      },
      colors: {
        'aid-blue': '#237feb'
      }
    },
  },
  plugins: [],
};
export default config;
