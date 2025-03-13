/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "var(--primary-50)",
          100: "var(--primary-100)",
          200: "var(--primary-200)",
          300: "var(--primary-300)",
          400: "var(--primary-400)",
          500: "var(--primary-500)",
          600: "var(--primary-600)",
          700: "var(--primary-700)",
          800: "var(--primary-800)",
          900: "var(--primary-900)",
          950: "var(--primary-950)",
        },
        accent: {
          50: "var(--accent-50)",
          100: "var(--accent-100)",
          200: "var(--accent-200)",
          300: "var(--accent-300)",
          400: "var(--accent-400)",
          500: "var(--accent-500)",
          600: "var(--accent-600)",
          700: "var(--accent-700)",
          800: "var(--accent-800)",
          900: "var(--accent-900)",
          950: "var(--accent-950)",
        },
      },
      keyframes: {
        flutterIn: {
          "0%": {
            transform: "translate(-100%, -100%) rotate(-20deg) scale(1.5)",
            opacity: "0",
          },
          "60%": {
            transform: "translate(10%, 10%) rotate(5deg) scale(1.1)",
            opacity: "1",
          },
          "100%": {
            transform: "translate(0, 0) rotate(0deg) scale(1)",
            opacity: "1",
          },
        },
      },
      animation: {
        "flutter-in": "flutterIn 2.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
