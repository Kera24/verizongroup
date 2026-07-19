import type { Config } from "tailwindcss";

/**
 * Yoranix — instrument-grade tokens (§2–§4).
 * Colour values live as RGB triplets in app/globals.css so utilities keep
 * <alpha-value> support. Hairlines carry baked-in alpha and are exposed as
 * plain CSS colours. No raw hex in components.
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
        ink: { DEFAULT: token("ink"), deep: token("ink-deep") },
        steel: token("steel"),
        grey: token("grey"),
        canvas: { DEFAULT: token("canvas"), sunk: token("canvas-sunk") },
        surface: token("surface"),
        hairline: {
          DEFAULT: "var(--hairline)",
          firm: "var(--hairline-firm)",
          inverse: "var(--hairline-inverse)",
          "inverse-firm": "var(--hairline-inverse-firm)",
        },
        success: token("success"),
        warning: token("warning"),
        destructive: token("destructive"),
        disabled: { DEFAULT: token("disabled"), text: token("disabled-text") },
        skeleton: token("skeleton"),
        "inverse-muted": token("inverse-muted"),
        overlay: token("overlay"),
      },
      /* §4 — 2px inputs/buttons, 4px cards, 0 for bands. No pills. */
      borderRadius: {
        none: "0",
        sm: "2px",
        DEFAULT: "4px",
      },
      /* §4 — depth comes from hairlines, not shadow. */
      boxShadow: {
        none: "none",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      /* §3 — the shipped scale. */
      fontSize: {
        "display-xl": [
          "clamp(3.25rem, 9vw, 9.25rem)",
          { lineHeight: "0.92", letterSpacing: "-0.035em", fontWeight: "600" },
        ],
        "display-l": [
          "clamp(2.5rem, 5.5vw, 5.25rem)",
          { lineHeight: "0.98", letterSpacing: "-0.028em", fontWeight: "600" },
        ],
        h2: ["clamp(1.75rem, 3.2vw, 3rem)", { lineHeight: "1.08", letterSpacing: "-0.02em", fontWeight: "600" }],
        h3: ["1.5rem", { lineHeight: "1.25", fontWeight: "500" }],
        "body-l": ["1.125rem", { lineHeight: "1.6" }],
        body: ["1rem", { lineHeight: "1.65" }],
        slug: ["0.75rem", { lineHeight: "1.4" }],
      },
      maxWidth: {
        measure: "68ch",
      },
      transitionDuration: {
        micro: "140ms",
        state: "200ms",
        layout: "320ms",
        reveal: "560ms",
      },
      transitionTimingFunction: {
        entrance: "cubic-bezier(0.16, 1, 0.3, 1)",
        layout: "cubic-bezier(0.65, 0, 0.35, 1)",
        micro: "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
