import HomeContent from "./components/bookPagesContents/homePageContent";
import AboutContent from "./components/bookPagesContents/aboutPageContent";
import SkillsContent from "./components/bookPagesContents/skillsPageContent";
import ProjectsContent from "./components/bookPagesContents/projectsPageContent";

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
    title: "Favorite Projects",
    content: <ProjectsContent />,
    path: ["fav-projects", "projects", "prjs", "project", "prj"],
  },
];

export default pages;
