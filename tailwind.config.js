// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",  // Include Next.js pages
    "./components/**/*.{js,jsx,ts,tsx}",  // Include components
    "./app/**/*.{js,jsx,ts,tsx}",  // Include the app directory (for Next.js 13+)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
