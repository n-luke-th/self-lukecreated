import Luke from "./assets/Luke.jpeg";
// import { styled } from "./styles/stitches.config";
import { ActionButton } from "./primitives/buttons";
import SecondaryP from "./primitives/p";

const pages = [
  {
    id: 1,
    title: "Home",
    content: homeContent(),
    path: ["home"],
  },
  {
    id: 2,
    title: "About",
    content: aboutContent(),
    path: ["about"],
  },
  {
    id: 3,
    title: "Skills & Tools",
    content: skillsContent(),
    path: ["skills", "tools", "skills-and-tools", "tools-and-skills"],
  },
  {
    id: 4,
    title: "Favorite 3 Projects",
    content: fav3PrjsContent(),
    path: ["fav-3-projects"],
  },
];

function homeContent() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "-webkit-fill-available",
        height: "min-content",
        alignContent: "space-around",
        justifyContent: "flex-start",
        alignItems: "center",
        // justifyItems: "center",
        overflow: "hidden",
      }}
      id="home-content"
    >
      <h1>LukeCreated</h1>
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
        Hello,<br></br>I am Kittipich &quot;Luke&quot; Aiumbhornsin
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
}

function aboutContent() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "-webkit-fill-available",
        height: "min-content",
        alignContent: "space-around",
        justifyContent: "flex-start",
        alignItems: "center",
        // justifyItems: "center",
        overflow: "hidden",
      }}
      id="about-content"
    >
      <h1
        style={{
          marginBottom: 0,
          paddingBottom: 0,
        }}
      >
        About Luke
      </h1>

      <ul
        style={{
          listStyleType: "none",
          padding: 0,
          margin: 0,
          overflow: "visible",
        }}
      >
        <li>
          <p
            style={{
              display: "inline",
            }}
          >
            Full Name:
          </p>{" "}
          <SecondaryP
            style={{
              display: "inline-block",
            }}
          >
            Kittipich Aiumbhornsin
          </SecondaryP>
        </li>
        <li>
          <p
            style={{
              display: "inline",
            }}
          >
            Nickname:{" "}
          </p>
          <SecondaryP
            style={{
              display: "inline-block",
            }}
          >
            Luke
          </SecondaryP>
        </li>
        <li>
          <p
            style={{
              display: "inline",
            }}
          >
            Based in:{" "}
          </p>
          <SecondaryP
            style={{
              display: "inline-block",
            }}
          >
            Bangkok, Thailand
          </SecondaryP>
        </li>
        <li>
          <p
            style={{
              display: "inline",
            }}
          >
            Studying at:{" "}
          </p>
          <SecondaryP
            style={{
              display: "inline-block",
            }}
          >
            Faculty of Information and Communication Technology (ICT), Mahidol
            University
          </SecondaryP>
        </li>
        <li>
          <p
            style={{
              display: "inline",
            }}
          >
            Major:{" "}
          </p>
          <SecondaryP
            style={{
              display: "inline-block",
            }}
          >
            Computer Science
          </SecondaryP>
        </li>
        <li>
          <p
            style={{
              display: "inline",
            }}
          >
            Expected graduation year:{" "}
          </p>
          <SecondaryP
            style={{
              display: "inline-block",
            }}
          >
            Early 2025
          </SecondaryP>
        </li>
        <li>
          <p
            style={{
              display: "inline",
            }}
          >
            Email:{" "}
          </p>
          <SecondaryP
            style={{
              display: "inline-block",
            }}
          >
            contact@lukecreated.com
          </SecondaryP>
        </li>
        <li>
          <ActionButton
            onClick={() =>
              (window.location.href = "mailto:contact@lukecreated.com")
            }
            style={{
              fontFamily: "inherit",
            }}
          >
            Email him now
          </ActionButton>
        </li>
      </ul>
    </div>
  );
}

function skillsContent() {
  return (
    <>
      <h1>Skills: Page 3 Content 你好</h1>
    </>
  );
}

function fav3PrjsContent() {
  return (
    <>
      <h1>Fav 3 prj: Page 3 Content 你好</h1>
    </>
  );
}

export default pages;
