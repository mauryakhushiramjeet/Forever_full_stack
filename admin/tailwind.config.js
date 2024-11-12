/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./admin/**/*.{html,js,ts,jsx,tsx}", // Include admin folder
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
