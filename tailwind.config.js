/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "on-secondary-container": "#006f79",
        "outline": "#74777e",
        "on-primary-fixed": "#051c35",
        "primary-fixed": "#d3e4ff",
        "error-container": "#ffdad6",
        "error": "#ba1a1a",
        "outline-variant": "#c4c6ce",
        "primary-container": "#0f253e",
        "surface-variant": "#d8e3fa",
        "secondary-fixed": "#8ff2ff",
        "surface-container-lowest": "#ffffff",
        "on-tertiary": "#ffffff",
        "tertiary-container": "#212527",
        "on-primary": "#ffffff",
        "surface-container-high": "#dee8ff",
        "on-error": "#ffffff",
        "on-primary-fixed-variant": "#344863",
        "tertiary": "#0c1011",
        "on-surface-variant": "#44474d",
        "background": "#f9f9ff",
        "primary": "#000f23", // El azul oscuro del Sidebar
        "surface": "#f9f9ff",
        "on-primary-container": "#788dab",
        "on-surface": "#111c2c",
        "secondary": "#006972", // El verde agua de los acentos
        "on-secondary": "#ffffff",
        "surface-container": "#e7eeff",
        "surface-container-low": "#f0f3ff",
      },
      fontFamily: {
        "title-sm": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "data-mono": ["JetBrains Mono", "monospace"],
        "headline-md": ["Inter", "sans-serif"],
        "label-caps": ["Inter", "sans-serif"],
        "display-lg": ["Inter", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"]
      },
      spacing: {
        "table-cell-padding": "12px 16px",
        "sidebar-width": "260px",
        "container-margin": "24px",
        "gutter": "16px"
      }
    },
  },
  plugins: [],
}