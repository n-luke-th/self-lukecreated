import Luke from "./assets/Luke.jpeg";
import { ActionButton } from "./primitives/buttons";
import SecondaryP from "./primitives/p";
import Card, { CardsWrapper } from "./components/card";
import React from "react";

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

const AboutContent = () => (
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
    id="about-content"
  >
    <h1
      style={{
        margin: 0,
        padding: 0,
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
            color: "var(--colors-main10)",
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
            color: "var(--colors-main10)",
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
            color: "var(--colors-main10)",
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
            color: "var(--colors-main10)",
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
            color: "var(--colors-main10)",
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
            color: "var(--colors-main10)",
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
            color: "var(--colors-main10)",
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
      <li style={{ display: "flex", alignItems: "center" }}>
        <ActionButton
          onClick={() =>
            (window.location.href = "mailto:contact@lukecreated.com")
          }
          style={{
            fontFamily: "inherit",
            display: "inline-flex",
            height: "44",
          }}
        >
          Email him now
        </ActionButton>
        &nbsp;
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            alignContent: "center",
          }}
          onClick={() =>
            window.open("https://linkedin.com/in/aium-luke", "_blank")
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="44"
            fill="var(--colors-foreground)"
            viewBox="0 0 50 50"
          >
            <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
          </svg>
        </div>
      </li>
    </ul>
  </div>
);

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
        listStyleType: "revert",
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
const ProjectsContent = () => {
  const [projects, setProjects] = React.useState([]);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        console.log(
          `data: ${data} type: ${typeof data} length: ${data.length}`
        );
        setProjects(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProjects();
  }, []);

  if (error) {
    return <div style={{ color: "red" }}>Error: {error}</div>;
  }

  if (!projects.length) {
    return <div>No projects available</div>;
  }

  return (
    <div
      id="prjs-content"
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
    >
      <h1 style={{ margin: 0 }}>3 Favorite Projects</h1>
      <CardsWrapper className="cards-wrapper">
        {projects.map((project) => (
          <Card
            key={project.id}
            title={project.title}
            description={project.description}
            imageURL={project.image}
          />
        ))}
      </CardsWrapper>
      <div style={{ marginTop: "1rem" }}>
        <ActionButton>Learn more</ActionButton>
      </div>
    </div>
  );
};
const pages = [
  {
    id: 1,
    title: "Home",
    content: <HomeContent />,
    path: ["home"],
  },
  {
    id: 2,
    title: "About",
    content: <AboutContent />,
    path: ["about"],
  },
  {
    id: 3,
    title: "Skills & Tools",
    content: <SkillsContent />,
    path: ["skills", "tools", "skills-and-tools", "tools-and-skills"],
  },
  {
    id: 4,
    title: "3 Favorite Projects",
    content: <ProjectsContent />,
    path: ["3-fav-projects", "projects", "prjs", "project", "prj"],
  },
];

export default pages;
