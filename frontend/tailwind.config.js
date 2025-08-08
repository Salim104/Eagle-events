/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customIndigo: '#667eea',
        customPurple: '#764ba2',
      },
    },
  },
  plugins: [],
}