/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
        "colors": {
            "on-tertiary-fixed-variant": "#5a4312",
            "on-secondary-fixed": "#00201c",
            "on-background": "#e3e3de",
            "error-container": "#93000a",
            "primary-container": "#092e2a",
            "surface-bright": "#383a36",
            "on-secondary-fixed-variant": "#164f48",
            "surface-container-lowest": "#0d0f0c",
            "secondary-fixed": "#b6ede3",
            "background": "#121411",
            "primary-fixed": "#c5eae3",
            "surface-container": "#1f201d",
            "tertiary": "#c9a96e",
            "inverse-on-surface": "#30312e",
            "surface": "#121411",
            "inverse-surface": "#e3e3de",
            "secondary-container": "#164f48",
            "outline-variant": "#414847",
            "surface-dim": "#121411",
            "secondary-fixed-dim": "#9bd1c7",
            "secondary": "#9bd1c7",
            "on-surface-variant": "#c1c8c6",
            "on-surface": "#e3e3de",
            "outline": "#8b9290",
            "on-tertiary-fixed": "#261900",
            "surface-tint": "#a9cec7",
            "on-error-container": "#ffdad6",
            "tertiary-container": "#372600",
            "on-primary-container": "#749791",
            "on-primary-fixed-variant": "#2b4d48",
            "on-secondary-container": "#89bfb6",
            "on-primary": "#133632",
            "surface-container-high": "#292a27",
            "on-tertiary": "#412d00",
            "surface-container-low": "#1b1c19",
            "tertiary-fixed-dim": "#e4c285",
            "on-error": "#690005",
            "on-primary-fixed": "#00201d",
            "on-secondary": "#003731",
            "on-tertiary-container": "#aa8c54",
            "surface-variant": "#343532",
            "primary": "#a9cec7",
            "inverse-primary": "#436560",
            "tertiary-fixed": "#ffdea4",
            "surface-container-highest": "#343532",
            "error": "#ffb4ab",
            "primary-fixed-dim": "#a9cec7"
        },
        "borderRadius": {
            "DEFAULT": "0.125rem",
            "lg": "0.25rem",
            "xl": "0.5rem",
            "full": "0.75rem"
        },
        "spacing": {
            "margin-desktop": "64px",
            "margin-mobile": "20px",
            "container-max": "1280px",
            "unit": "8px",
            "gutter": "24px"
        },
        "fontFamily": {
            "body-lg": ["Inter"],
            "headline-md": ["Playfair Display"],
            "body-md": ["Inter"],
            "display-lg-mobile": ["Playfair Display"],
            "label-caps": ["Inter"],
            "headline-sm": ["Playfair Display"],
            "display-lg": ["Playfair Display"]
        },
        "fontSize": {
            "body-lg": ["18px", { "lineHeight": "1.6", "letterSpacing": "0.01em", "fontWeight": "400" }],
            "headline-md": ["32px", { "lineHeight": "1.3", "fontWeight": "600" }],
            "body-md": ["16px", { "lineHeight": "1.5", "fontWeight": "400" }],
            "display-lg-mobile": ["40px", { "lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "700" }],
            "label-caps": ["12px", { "lineHeight": "1.0", "letterSpacing": "0.1em", "fontWeight": "600" }],
            "headline-sm": ["24px", { "lineHeight": "1.4", "fontWeight": "500" }],
            "display-lg": ["64px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }]
        }
    }
  },
  plugins: [],
}
