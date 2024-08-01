import SecondaryP from "../../primitives/p";
const SkillsContent = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      width: "-webkit-fill-available",
      height: "min-content",
      alignContent: "space-around",
      justifyContent: "flex-start",
      alignItems: "center",
      overflow: "visible",
    }}
    id="skills-content"
  >
    <h1
      style={{
        margin: 0,
      }}
    >
      Skills & Tools
    </h1>

    <ul
      style={{
        // display: "flex",
        // flexDirection: "column",
        listStyleType: "none",
        padding: 0,
        margin: 0,
        overflow: "visible",
      }}
    >
      <h3
        style={{
          padding: 0,
          marginBottom: "0.2rem",
          marginTop: "0.75rem",
        }}
      >
        Communication
      </h3>

      <li>
        <p
          style={{
            display: "inline",
            margin: "0.5rem",
            color: "var(--colors-main10)",
          }}
        >
          Native:
        </p>
        <SecondaryP style={{ display: "inline-block", margin: "0.5rem" }}>
          Thai
        </SecondaryP>
      </li>
      <li>
        <p
          style={{
            display: "inline",
            margin: "0.5rem",
            color: "var(--colors-main10)",
          }}
        >
          Confidence level:
        </p>
        <SecondaryP style={{ display: "inline-block", margin: "0.5rem" }}>
          English
        </SecondaryP>
      </li>
      <li>
        <p
          style={{
            display: "inline",
            margin: "0.5rem",
            color: "var(--colors-main10)",
          }}
        >
          Limited level:
        </p>
        <SecondaryP style={{ display: "inline-block", margin: "0.5rem" }}>
          Chinese
        </SecondaryP>
      </li>
      <h3 style={{ padding: 0, marginTop: "0.2rem", marginBottom: "0.75rem" }}>
        Development
      </h3>

      <li>
        <p
          style={{
            display: "inline-block",
            margin: "0.5rem",
            color: "var(--colors-main10)",
          }}
        >
          Languages:
        </p>
        <SecondaryP style={{ display: "inline", margin: "0.5rem" }}>
          Python, JS/TS, HTML &amp; CSS, Dart
        </SecondaryP>
      </li>
      <li>
        <p
          style={{
            display: "inline-block",
            margin: "0.5rem",
            color: "var(--colors-main10)",
          }}
        >
          Database:
        </p>
        <SecondaryP style={{ display: "inline", margin: "0.5rem" }}>
          SQL &amp; noSQL (Document based, Key-value)
        </SecondaryP>
      </li>

      <li>
        <p
          style={{
            display: "inline-block",
            margin: "0.5rem",
            color: "var(--colors-main10)",
          }}
        >
          Frameworks/Libraries:
        </p>
        <SecondaryP style={{ display: "inline", margin: "0.5rem" }}>
          Flask, FastAPI, Express.js, Flutter, React.js
        </SecondaryP>
      </li>

      <li>
        <p
          style={{
            display: "inline-block",
            margin: "0.5rem",
            color: "var(--colors-main10)",
          }}
        >
          Container:
        </p>
        <SecondaryP style={{ display: "inline", margin: "0.5rem" }}>
          Docker
        </SecondaryP>
      </li>
      <li>
        <p
          style={{
            display: "inline-block",
            margin: "0.5rem",
            color: "var(--colors-main10)",
          }}
        >
          Cloud services:
        </p>
        <SecondaryP style={{ display: "inline", margin: "0.5rem" }}>
          AWS, GCP
        </SecondaryP>
      </li>
      <li>
        <p
          style={{
            display: "inline-block",
            margin: "0.5rem",
            color: "var(--colors-main10)",
          }}
        >
          Version control:
        </p>
        <SecondaryP style={{ display: "inline", margin: "0.5rem" }}>
          GitHub, Gitee
        </SecondaryP>
      </li>
      <li>
        <p
          style={{
            display: "inline-block",
            margin: "0.5rem",
            color: "var(--colors-main10)",
          }}
        >
          Others:
        </p>
        <SecondaryP style={{ display: "inline", margin: "0.5rem" }}>
          Bootstrap5, W3CSS, Stitches, Jupyter Notebook
        </SecondaryP>
      </li>
    </ul>
  </div>
);

export default SkillsContent;
