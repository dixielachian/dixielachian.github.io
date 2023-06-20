/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /*"primary": "#641ae6",
        "secondary": "#d926a9",
        "accent": "#1fb2a6",
        "neutral": "#2a323c",
        "base-100": "#1d232a",
        "info": "#3abff8",
        "success": "#36d399",
        "warning": "#fbbd23",
"error": "#f87272",*/

        "primary": "#FF61C6",
        "secondary": "#5CECFF",
        "accent": "#F4FF61",
        "neutral": "#375971",
        "base-100": "#0A0C37",
        "info": "#FF9900",
        "success": "#71ead2",
        "warning": "#f3cc30",
        "error": "#e24056" 
      }
    },
  },
  plugins: [],
}
