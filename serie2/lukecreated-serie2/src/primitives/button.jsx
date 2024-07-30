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
  },
  // Responsive styles
  "@bp1": {
    fontSize: "16px",
  },
  "@bp2": {
    fontSize: "18px",
  },
});

export default StyledButton;
