import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // App Router
    "./pages/**/*.{js,ts,jsx,tsx}",     // Pages Router
    "./components/**/*.{js,ts,jsx,tsx}" // Components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
