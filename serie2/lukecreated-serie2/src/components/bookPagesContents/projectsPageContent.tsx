import Card, { CardsWrapper } from "../card";
import React from "react";
import { ActionButton } from "../../primitives/buttons";

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
            // @ts-ignore
            key={project.id}
            // @ts-ignore
            title={project.title}
            // @ts-ignore
            description={project.description}
            // @ts-ignore
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

export default ProjectsContent;
