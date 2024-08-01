import PropTypes from "prop-types";
import { styled } from "../styles/stitches.config";

const CardContainer = styled("div", {
  borderRadius: "11px",
  backgroundColor: "$gray6",
  boxShadow: "0 4px 8px rgb(from var(--colors-foreground) r g b / 30%)",
  width: "265px",
  height: "330px",
  margin: "20px",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.05)",
  },
});

const CardImage = styled("img", {
  width: "100%",
  height: "180px",
  objectFit: "cover",
});

const CardContent = styled("div", {
  padding: "15px",
});

const CardTitle = styled("h2", {
  fontSize: "1.5em",
  marginBottom: "10px",
});

const CardsWrapper = styled("div", {
  overflow: "scroll",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  overflowX: "hidden",
  justifyContent: "center",
  padding: "10px",
});

const ErrorMessage = styled("div", {
  color: "red",
  fontSize: "1.2em",
  textAlign: "center",
  marginTop: "50px",
});

const Card = ({ title, description, imageURL, gitURL }) => {
  return (
    <CardContainer className="card-container">
      <CardImage src={imageURL} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <p>{description}</p>
        <p>{gitURL}</p>
      </CardContent>
    </CardContainer>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
  gitURL: PropTypes.string,
};

export { ErrorMessage, CardsWrapper };
export default Card;
