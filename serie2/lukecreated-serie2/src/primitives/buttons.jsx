import { styled } from "../styles/stitches.config";

const StyledButton = styled("button", {
  backgroundColor: "$main9",
  color: "$gray1",
  padding: "10px 20px",
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "$main10",
  },

  "&:disabled": {
    backgroundColor: "$grayA3",
    color: "$grayA6",
    cursor: "not-allowed",
  },
  // Responsive styles
  "@bp1": {
    fontSize: "16px",
  },
  "@bp2": {
    fontSize: "18px",
  },
});

const ActionButton = styled("button", {
  backgroundImage:
    "radial-gradient(var(--colors-gray7) ,var(--colors-gray10) )",
  color: "$main12",
  padding: "10px 20px",
  borderRadius: "4px",
  border: "none",
  cursor: "pointer",

  "&:hover": {
    backgroundImage:
      "radial-gradient(var(--colors-gray10) ,var(--colors-gray7) )",
  },

  "&:disabled": {
    backgroundColor: "$grayA3",
    color: "$grayA6",
    cursor: "not-allowed",
  },
  // Responsive styles
  "@bp1": {
    fontSize: "16px",
  },
  "@bp2": {
    fontSize: "18px",
  },
});

export { StyledButton, ActionButton };
