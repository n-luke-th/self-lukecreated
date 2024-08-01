import Luke from "./assets/Luke.jpeg";
import * as AspectRatio from "@radix-ui/react-aspect-ratio";
// import { styled } from "./styles/stitches.config";

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
        // justifyContent: "flex-start",
        alignItems: "center",
        // justifyItems: "center",
        overflow: "hidden",
      }}
      id="home-content"
    >
      <h1>Home page</h1>
      <AspectRatio.Root
        ratio={0.66 / 1}
        id="img-wrapper"
        style={{
          display: "flex",
          justifySelf: "center",
          height: "max-content",
          width: "max-content",
          alignSelf: "start",
        }}
      >
        <img
          src={Luke}
          alt="Luke"
          loading="lazy"
          style={{
            objectFit: "fill",
            // alignSelf: "center",
            height: "45vh",
            overflow: "hidden",
            borderRadius: 11,
            boxShadow: `0 3px 8px red`,
          }}
        />
      </AspectRatio.Root>
      <p>Hello!</p>
    </div>
  );
}

function aboutContent() {
  return (
    <>
      <h1>About: Page 2 Content 你好</h1>
    </>
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
