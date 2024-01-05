/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      background: '#121212',
      white: '#fff',
      grayWhite: '#BBB',
      gray: '#f5f5f5',
      orange: '#fa541cff',
    },
    extend: {},
  },
  plugins: [],
}

