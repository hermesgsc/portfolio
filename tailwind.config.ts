import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f6f8fa',   // GitHub background light (lightest)
          100: '#e1e4e8',  // GitHub background light
          200: '#c0c4cc',  // GitHub background darker
          300: '#a8b1c2',  // GitHub background darker
          400: '#5f6368',  // Gray used for elements like borders
          500: '#24292f',  // GitHub dark header text color
          600: '#0d1117',  // GitHub background for dark mode
          700: '#161b22',  // GitHub background for dark mode
          800: '#010409',  // GitHub background for dark mode
          900: '#0d0f13',  // GitHub background darker for dark mode
        },
        secondary: {
          50: '#f9f9f9',  // Light gray
          100: '#f0f0f0', // Very light gray
          200: '#d0d0d0', // Light gray, used in some parts
          300: '#b1b1b1', // Medium gray
          400: '#888888', // Darker gray for text
          500: '#555555', // Main text color for GitHub
          600: '#333333', // Text on dark mode background
          700: '#222222', // Dark text
          800: '#111111', // Even darker for highlighting
          900: '#0d0d0d', // Darkest background
        },
        accent: {
          50: '#c8e1ff',  // Soft light blue
          100: '#a5c5ff', // Light blue
          200: '#7fa8ff', // Lighter blue
          300: '#5b8cff', // Standard GitHub blue
          400: '#2d74c1', // Default link color
          500: '#0366d6', // Main blue button/link color
          600: '#0258a5', // GitHub hover blue
          700: '#003d74', // Darker blue for hover states
          800: '#002f5a', // Dark blue, used in borders
          900: '#001f3a', // Deepest blue for darker accents
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
