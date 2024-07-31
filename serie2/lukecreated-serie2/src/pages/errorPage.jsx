// import { useRouteError } from "react-router-dom";
import StyledButton from "../primitives/button";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div
      id="error-component"
      style={{
        height: "80vh",
        alignSelf: "center",
        display: "absolute",
        alignItems: "space-between",
        justifyContent: "center",
      }}
    >
      <h1>Oops!</h1>

      <h3>
        <u>
          404: <i>Not Found</i>
        </u>
      </h3>
      <p>Sorry, the page you requested does not exists.</p>
      {/* <p>{error.data}</p> */}
      <Link to={"/"}>
        <StyledButton>Home</StyledButton>
      </Link>
    </div>
  );
}
