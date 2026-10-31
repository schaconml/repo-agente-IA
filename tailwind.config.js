/** Configuración Tailwind — GitFast (Grupo 32)
 *  FASE 3.1: compilación local (antes: CDN de Play).
 *  FASE 3.3: los colores son tripletas R G B en variables CSS para soportar
 *  tema oscuro (:root) y claro (html.light) SIN cambiar el nombre de clases.
 *  Regenera el CSS tras añadir clases nuevas:
 *  npx -y tailwindcss@3.4.17 -c tailwind.config.js -i assets/css/input.css -o assets/css/.tailwind.tmp.css --minify
 */
module.exports = {
  darkMode: "class",
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "surface": "rgb(var(--c-surface) / <alpha-value>)",
        "surface-dim": "rgb(var(--c-surface-dim) / <alpha-value>)",
        "surface-bright": "rgb(var(--c-surface-bright) / <alpha-value>)",
        "surface-container-lowest": "rgb(var(--c-surface-container-lowest) / <alpha-value>)",
        "surface-container-low": "rgb(var(--c-surface-container-low) / <alpha-value>)",
        "surface-container": "rgb(var(--c-surface-container) / <alpha-value>)",
        "surface-container-high": "rgb(var(--c-surface-container-high) / <alpha-value>)",
        "surface-container-highest": "rgb(var(--c-surface-container-highest) / <alpha-value>)",
        "on-surface": "rgb(var(--c-on-surface) / <alpha-value>)",
        "on-surface-variant": "rgb(var(--c-on-surface-variant) / <alpha-value>)",
        "inverse-surface": "rgb(var(--c-inverse-surface) / <alpha-value>)",
        "inverse-on-surface": "rgb(var(--c-inverse-on-surface) / <alpha-value>)",
        "outline": "rgb(var(--c-outline) / <alpha-value>)",
        "outline-variant": "rgb(var(--c-outline-variant) / <alpha-value>)",
        "surface-tint": "rgb(var(--c-surface-tint) / <alpha-value>)",
        "primary": "rgb(var(--c-primary) / <alpha-value>)",
        "on-primary": "rgb(var(--c-on-primary) / <alpha-value>)",
        "primary-container": "rgb(var(--c-primary-container) / <alpha-value>)",
        "on-primary-container": "rgb(var(--c-on-primary-container) / <alpha-value>)",
        "secondary": "rgb(var(--c-secondary) / <alpha-value>)",
        "on-secondary": "rgb(var(--c-on-secondary) / <alpha-value>)",
        "secondary-container": "rgb(var(--c-secondary-container) / <alpha-value>)",
        "on-secondary-container": "rgb(var(--c-on-secondary-container) / <alpha-value>)",
        "tertiary": "rgb(var(--c-tertiary) / <alpha-value>)",
        "on-tertiary": "rgb(var(--c-on-tertiary) / <alpha-value>)",
        "tertiary-container": "rgb(var(--c-tertiary-container) / <alpha-value>)",
        "on-tertiary-container": "rgb(var(--c-on-tertiary-container) / <alpha-value>)",
        "error": "rgb(var(--c-error) / <alpha-value>)",
        "on-error": "rgb(var(--c-on-error) / <alpha-value>)",
        "error-container": "rgb(var(--c-error-container) / <alpha-value>)",
        "on-error-container": "rgb(var(--c-on-error-container) / <alpha-value>)",
        "background": "rgb(var(--c-background) / <alpha-value>)",
        "on-background": "rgb(var(--c-on-background) / <alpha-value>)"
      },
      fontFamily: {
        "body": ["Geist", "system-ui", "sans-serif"],
        "code": ["JetBrains Mono", "monospace"]
      }
    }
  }
};
