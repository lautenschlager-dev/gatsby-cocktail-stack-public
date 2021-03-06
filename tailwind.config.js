module.exports = {
  purge: false,
  target: "relaxed",
  prefix: "",
  important: true,
  separator: ":",
  theme: {
    extend: {
      colors: {
        brand: "#192537",
        accent: "#B09E80",
        orange: {
          "50": "#fbf8f4",
          "100": "#faf5d6",
          "200": "#f9eb93",
          "300": "#f6d849",
          "400": "#edb41e",
          "500": "#df8f0b",
          "600": "#c36905",
          "700": "#a45408",
          "800": "#804010",
          "900": "#663211",
        },
        goldenrod: {
          "50": "#faf8f3",
          "100": "#faf5d5",
          "200": "#f8ec90",
          "300": "#f5d946",
          "400": "#eab71c",
          "500": "#db920b",
          "600": "#bc6d04",
          "700": "#9d5707",
          "800": "#7a420f",
          "900": "#633310",
        },
        mediumseagreen: {
          "50": "#eef3f1",
          "100": "#e5f1ec",
          "200": "#bcf1d7",
          "300": "#86e7b1",
          "400": "#34d485",
          "500": "#17b95b",
          "600": "#11a042",
          "700": "#14873b",
          "800": "#146634",
          "900": "#18502d",
        },
        lightseagreen: {
          "50": "#edf3f4",
          "100": "#e1f1f3",
          "200": "#b3ece8",
          "300": "#7de1d7",
          "400": "#35cbbf",
          "500": "#19aca4",
          "600": "#14908d",
          "700": "#167874",
          "800": "#165b55",
          "900": "#184945",
        },
        steelblue: {
          "50": "#eff5f7",
          "100": "#e4f3f8",
          "200": "#b8e7f3",
          "300": "#8ad8ec",
          "400": "#4abbe2",
          "500": "#2997d9",
          "600": "#2078ce",
          "700": "#2062af",
          "800": "#1e4a7d",
          "900": "#1c3d60",
        },
        royalblue: {
          "50": "#f1f8fa",
          "100": "#e7f5fb",
          "200": "#bfdefa",
          "300": "#9ac9f8",
          "400": "#6ba4f6",
          "500": "#477bf5",
          "600": "#395af3",
          "700": "#3247e1",
          "800": "#2b38af",
          "900": "#222f86",
        },
        mediumslateblue: {
          "50": "#f2f8fa",
          "100": "#e9f5fc",
          "200": "#c4dafa",
          "300": "#a4c3fa",
          "400": "#7c9cf8",
          "500": "#5972f7",
          "600": "#4851f6",
          "700": "#3c40e7",
          "800": "#3233b8",
          "900": "#252c8f",
        },
        mediumvioletred: {
          "50": "#fbfbfb",
          "100": "#faf8f7",
          "200": "#f9cef0",
          "300": "#f8a5e7",
          "400": "#f96fd5",
          "500": "#f749c5",
          "600": "#ee2aa6",
          "700": "#d9218a",
          "800": "#b61d6d",
          "900": "#801a50",
        },
        hotpink: {
          "50": "#fcfbfb",
          "100": "#fbf8f5",
          "200": "#fad3ea",
          "300": "#faaadb",
          "400": "#fa74bc",
          "500": "#f94c9f",
          "600": "#f12c75",
          "700": "#de2262",
          "800": "#bd1d54",
          "900": "#881a3f",
        },
        coral: {
          "50": "#fbfaf9",
          "100": "#fbf7ec",
          "200": "#fae0ce",
          "300": "#f8c2a2",
          "400": "#f69368",
          "500": "#f2693e",
          "600": "#e34421",
          "700": "#c83523",
          "800": "#a32a2a",
          "900": "#782324",
        },
      },

      maxHeight: {
        "0": "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },

      maxWidth: {
        "1/2": "50%",
      },

      transitionProperty: {
        "max-height": "max-height",
      },
    },

    screens: {
      xxs: "380px",
      xs: "480px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  variants: {},
  corePlugins: {},
  plugins: [
    require("@tailwindcss/ui")({
      layout: "sidebar",
    }),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
  },
}
