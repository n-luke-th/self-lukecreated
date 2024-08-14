import { createStitches } from "@stitches/react";

import { lightTheme, darkTheme } from "./themes";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: lightTheme, // Start with light theme as default
  media: {
    bp1: "(min-width: 480px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
  },
});

// Create theme functions
export const createLightTheme = () => createTheme("light-theme", lightTheme);
export const createDarkTheme = () => createTheme("dark-theme", darkTheme);
