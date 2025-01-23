import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#5d358b",
        background2: "#ff914c",
        background3: "#ff914c",

        foreground: "#f4ece7",
        
        primary: "#63358d",
        secondary: "#f4ece7",
      },
      container: {
        center: true,
        // padding: {
        //   DEFAULT: '1rem',
        //   sm: '2rem',
        //   lg: '4rem',
        //   xl: '5rem',
        //   '2xl': '6rem',
        // },
      },
      backgroundImage: {
        "bg-1":
          "url('https://cdn.prod.website-files.com/5d2cb3382be6ba1741dc013c/64e0f41e6c35b16f4e8d92eb_Pattern%203.webp')",
        "bg-2": "url('/images/bg1.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
