import { globalCss } from "./stitches.config";
// import "@fontsource/krub/200.css"; // ex light
// import "@fontsource/krub/300.css"; // light
import "@fontsource/krub/400.css"; // regular
// import "@fontsource/krub/500.css"; // medium
// import "@fontsource/krub/600.css"; // semi bold
import "@fontsource/krub/700.css"; // bold
// import "@fontsource/krub/200-italic.css";
// import "@fontsource/krub/300-italic.css";
// import "@fontsource/krub/400-italic.css";
// import "@fontsource/krub/500-italic.css";
// import "@fontsource/krub/600-italic.css";
// import "@fontsource/krub/700-italic.css";
import "@fontsource/ma-shan-zheng";

export const globalStyles = globalCss({
  "*": {
    msOverflowStyle: "none" /* IE and Edge */,
    scrollbarWidth: "none",
  },
  html: {
    padding: 0,
    margin: 0,
    height: "100%",
    width: "100%",
  },
  "#root": {
    padding: 0,
    margin: 0,
    height: "100%",
    width: "100%",
  },
  body: {
    overflow: "hidden",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Krub, Ma Shan Zheng, sans-serif, cursive, system-ui",
    // Responsive styles
    "@bp1": {
      fontSize: "16px",
    },
    "@bp2": {
      fontSize: "18px",
    },
  },

  h1: {
    color: "$foreground",
  },
  h2: {
    color: "$foreground",
  },
  h3: {
    color: "$foreground",
  },
  h4: {
    color: "$foreground",
  },
  h5: {
    color: "$foreground",
  },
  h6: {
    color: "$foreground",
  },
  p: {
    color: "$foreground",
  },

  // Add any other global styles
});
