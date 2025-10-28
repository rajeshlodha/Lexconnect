// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Tells Tailwind to scan your source files
  ],
  theme: {
    extend: {
      // Map Tailwind color names to your CSS variables from index.css
      colors: {
        // Core theme colors
        primary: "var(--primary-bg)", // Use like: bg-primary, text-primary
        secondary: "var(--secondary-bg)", // Use like: bg-secondary
        card: "var(--card-bg)", // Use like: bg-card
        "text-base": "var(--text-color)", // Use like: text-text-base
        "text-muted": "var(--text-muted)", // Use like: text-text-muted
        accent: "var(--accent-color)", // Use like: bg-accent, text-accent, border-accent
        "accent-hover": "var(--accent-hover)", // Use like: hover:bg-accent-hover
        border: "var(--border-color)", // Use like: border-border
        danger: "var(--danger-color)", // Use like: text-danger, bg-danger
        success: "var(--success-color, #22c55e)", // Use like: text-success (includes a default green)

        // Map specific grays/neutrals used in the dashboard
        // Adjust these mappings based on your light/dark theme variables
        neutral: {
          700: "var(--secondary-bg)", // bg-neutral-700 will use --secondary-bg
          800: "var(--card-bg)", // bg-neutral-800 will use --card-bg
          900: "var(--primary-bg)", // bg-neutral-900 will use --primary-bg
        },
        // Keep yellow mapped to accent for dashboard consistency
        yellow: {
          500: "var(--accent-color)",
          600: "var(--accent-hover)",
        },
        // Map common grays used for text in the dashboard
        gray: {
          200: "var(--text-color)", // e.g., text-gray-200 becomes --text-color
          300: "var(--text-color)",
          400: "var(--text-muted)",
          500: "var(--text-muted)",
        },
        // Map status badge colors (adjust if needed)
        green: {
          500: "var(--success-color, #22c55e)",
        },
        red: {
          500: "var(--danger-color, #ef4444)",
        },
        blue: {
          // You might add a --info-color variable later
          500: "#3b82f6",
        },
      },
      // You can define specific background/border/ring colors for translucency if needed
      backgroundColor: (theme) => ({
        ...theme("colors"),
        "accent-translucent":
          "var(--accent-color-translucent, rgba(250, 204, 21, 0.3))", // Add --accent-color-translucent to index.css
      }),
      borderColor: (theme) => ({
        ...theme("colors"),
        DEFAULT: "var(--border-color)", // Make default border use your variable
      }),
      textColor: {
        // Ensure text colors use the base/muted mappings by default
        DEFAULT: "var(--text-color)",
        muted: "var(--text-muted)",
      },
    },
  },
  plugins: [],
};
