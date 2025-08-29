import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0a7cff",
          dark: "#0a5bd1",
          light: "#e6f0ff",
        }
      }
    },
  },
  plugins: [],
}
export default config
