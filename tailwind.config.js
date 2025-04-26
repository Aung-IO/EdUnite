/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        // Custom colors
        "purple-heart": {
          50: "#efeffe",
          100: "#e1e2fe",
          200: "#c9c9fc",
          300: "#aaa8f9",
          400: "#9085f4",
          500: "#7e67ed",
          600: "#663ede",
          700: "#623cc6",
          800: "#4f33a0",
          900: "#42317e",
          950: "#281c4a",
        },
        "white-lilac": {
          50: "#f9f9ff",
          100: "#e9e9fe",
          200: "#d6d6fe",
          300: "#b8b5fd",
          400: "#948bfa",
          500: "#715cf6",
          600: "#5e3aed",
          700: "#4f28d9",
          800: "#4221b6",
          900: "#381d95",
          950: "#201065",
        },

        "mint-julep": {
          50: "#fcfaea",
          100: "#f7f3c5",
          200: "#f1e697",
          300: "#e9d45b",
          400: "#e1be2e",
          500: "#d2a720",
          600: "#b58319",
          700: "#906018",
          800: "#784c1b",
          900: "#67401c",
          950: "#3b210d",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
