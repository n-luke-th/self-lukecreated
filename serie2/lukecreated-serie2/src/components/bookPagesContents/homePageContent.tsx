import Luke from "../../assets/Luke.jpeg";
const HomeContent = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      width: "-webkit-fill-available",
      height: "min-content",
      alignContent: "space-around",
      justifyContent: "flex-start",
      alignItems: "center",
      overflow: "hidden",
    }}
    id="home-content"
  >
    <h1 style={{ margin: "1rem" }}>LukeCreated</h1>
    <img
      src={Luke}
      alt="luke"
      loading="lazy"
      width={250}
      style={{
        objectFit: "cover",
        overflow: "hidden",
        borderRadius: 11,
        boxShadow: `0 3px 8px red`,
      }}
    />
    <small
      style={{
        padding: "1rem",
        color: "var(--colors-gray10)",
        fontWeight: 700,
      }}
    >
      - Always learning -
    </small>
    <h4
      style={{
        display: "flex",
        margin: 0,
        paddingTop: 0,
        fontWeight: 500,
      }}
    >
      Hello, my name is
    </h4>
    <h4
      style={{
        display: "flex",
        margin: 0,
        paddingTop: 0,
        fontWeight: 500,
      }}
    >
      <i>Kittipich &quot;Luke&quot; Aiumbhornsin</i>
    </h4>
    <h3
      style={{
        color: "var(--colors-gray11)",
        fontWeight: 700,
      }}
    >
      App developer ｜ ML engineer
    </h3>
  </div>
);
export default HomeContent;
