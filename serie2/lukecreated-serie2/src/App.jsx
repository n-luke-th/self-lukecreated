import "./App.css";
import Book from "./components/book";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Scaffold from "./primitives/scaffold";
import { useState, useEffect } from "react";
import { createLightTheme, createDarkTheme } from "./styles/stitches.config";
import { globalStyles } from "./styles/globalStyles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import ErrorPage from "./components/errorPage.jsx";
import PropTypes from "prop-types";

function App() {
  Scaffold.propTypes = {
    className: PropTypes.object,
    children: PropTypes.node.isRequired,
  };

  const [theme, setTheme] = useState(createLightTheme());

  useEffect(() => {
    const getCurrentTheme = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = getCurrentTheme() == true ? "dark" : "light";
    console.log(`system initial theme: ${initialTheme}`);
    setTheme(initialTheme === "dark" ? createDarkTheme() : createLightTheme());
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.className === "light-theme"
        ? createDarkTheme()
        : createLightTheme()
    );
    // console.log("theme switched");
  };

  const pages = [
    {
      id: 1,
      title: "Home",
      content: <h1>Home: Page 1 Content 你好</h1>,
      path: "home",
    },
    {
      id: 2,
      title: "About",
      content: <h1>About: Page 2 Content 你好</h1>,
      path: "about",
    },
    {
      id: 3,
      title: "Skills",
      content: <h1>Skills: Page 3 Content 你好</h1>,
      path: "skills",
    },
    {
      id: 4,
      title: "Favorite 3 Projects",
      content: <h1>Fav 3 prj: Page 3 Content 你好</h1>,
      path: "fav-3-projects",
    },
  ];

  // Apply global styles
  globalStyles();

  return (
    <Router>
      <Scaffold className={theme}>
        <NavBar toggleTheme={toggleTheme} />
        <br />

        <Routes>
          <Route path="/:pagePath" element={<Book pages={pages} />} />
          <Route path="/" element={<Book pages={pages} />} />
        </Routes>

        <Footer></Footer>
      </Scaffold>
    </Router>
  );
}

export default App;
