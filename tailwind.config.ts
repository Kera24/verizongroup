import type { Config } from "tailwindcss";

/**
 * Yoranix design tokens.
 * Colour values are RGB triplets defined as CSS custom properties in
 * app/globals.css (generated as OKLCH ramps from the brand anchors) so
 * utilities keep <alpha-value> support. No raw hex in components.
 */
const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: token("canvas"),
        "canvas-subtle": token("canvas-subtle"),
        surface: token("surface"),
        "surface-raised": token("surface-raised"),
        overlay: token("overlay"),
        ink: {
          DEFAULT: token("text-primary"),
          secondary: token("text-secondary"),
          muted: token("text-muted"),
        },
        border: {
          DEFAULT: token("border"),
          strong: token("border-strong"),
        },
        primary: {
          DEFAULT: token("primary"),
          hover: token("primary-hover"),
          active: token("primary-active"),
        },
        secondary: token("secondary"),
        "focus-ring": token("focus-ring"),
        link: token("link"),
        info: token("info"),
        success: token("success"),
        warning: token("warning"),
        destructive: token("destructive"),
        selection: token("selection"),
        skeleton: token("skeleton"),
        disabled: {
          DEFAULT: token("disabled"),
          text: token("disabled-text"),
        },
        inverse: {
          DEFAULT: token("inverse"),
          muted: token("inverse-muted"),
          surface: token("inverse-surface"),
          border: token("inverse-border"),
        },
        chart: {
          1: token("chart-1"),
          2: token("chart-2"),
          3: token("chart-3"),
          4: token("chart-4"),
          5: token("chart-5"),
          6: token("chart-6"),
        },
        navy: {
          50: token("navy-50"),
          100: token("navy-100"),
          200: token("navy-200"),
          300: token("navy-300"),
          400: token("navy-400"),
          500: token("navy-500"),
          600: token("navy-600"),
          700: token("navy-700"),
          800: token("navy-800"),
          900: token("navy-900"),
          950: token("navy-950"),
        },
        steel: {
          100: token("steel-100"),
          300: token("steel-300"),
          500: token("steel-500"),
          600: token("steel-600"),
          700: token("steel-700"),
        },
      },
      borderRadius: {
        none: "0",
        sm: "4px",
        DEFAULT: "8px",
        lg: "12px",
        hero: "20px", // reserved for the hero signature surface
      },
      boxShadow: {
        "elevation-1": "0 1px 2px rgb(var(--navy-950) / 0.05), 0 1px 1px rgb(var(--navy-950) / 0.03)",
        "elevation-2":
          "0 1px 2px rgb(var(--navy-950) / 0.05), 0 3px 8px -2px rgb(var(--navy-950) / 0.07)",
        "elevation-3":
          "0 2px 4px rgb(var(--navy-950) / 0.05), 0 10px 24px -6px rgb(var(--navy-950) / 0.10)",
        "elevation-4":
          "0 4px 8px rgb(var(--navy-950) / 0.06), 0 24px 48px -12px rgb(var(--navy-950) / 0.14)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        // Fluid editorial scale
        display: [
          "clamp(2.5rem, 1.55rem + 4.75vw, 4.75rem)",
          { lineHeight: "1.04", letterSpacing: "-0.02em" },
        ],
        h1: ["clamp(2.125rem, 1.5rem + 3.1vw, 3.5rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        h2: ["clamp(1.625rem, 1.3rem + 1.65vw, 2.375rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        h3: ["clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)", { lineHeight: "1.3" }],
        h4: ["1.125rem", { lineHeight: "1.4" }],
      },
      maxWidth: {
        measure: "68ch",
      },
      transitionDuration: {
        fast: "120ms",
        base: "180ms",
        slow: "260ms",
        slower: "380ms",
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(0.2, 0, 0, 1)",
        enter: "cubic-bezier(0, 0, 0.2, 1)",
        exit: "cubic-bezier(0.4, 0, 1, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
