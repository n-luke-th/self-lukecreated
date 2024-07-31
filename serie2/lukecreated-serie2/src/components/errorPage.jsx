import { useRouteError } from "react-router-dom";
import StyledButton from "../primitives/button";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

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
          {error.status}: <i>{error.statusText || error.message}</i>
        </u>
      </h3>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{error.data}</p>
      <Link to={"/"}>
        <StyledButton>Home</StyledButton>
      </Link>
    </div>
  );
}
