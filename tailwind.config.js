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
      backgroundGrayTwo: '#1D1D1D',
      white: '#fff',
      grayWhite: '#BBB',
      gray: '#f5f5f5',
      orange: '#fa541cff',
    },
    extend: {
        keyframes: {
            overlayShow: {
              from: { opacity: 0 },
              to: { opacity: 1 },
            },
            contentShow: {
              from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
              to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
            },
        },
        animation: {
          overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
          contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        },
    },
  },
  plugins: [],
}

