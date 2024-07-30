import "./App.css";
import Book from "./components/book";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Scaffold from "./primitives/scaffold";
import { useState, useEffect } from "react";
import { createLightTheme, createDarkTheme } from "./styles/stitches.config";
import { globalStyles } from "./styles/globalStyles";
import PropTypes from "prop-types";

function App() {
  Scaffold.propTypes = {
    className: PropTypes.object,
    children: PropTypes.node.isRequired,
  };

  const [theme, setTheme] = useState(createLightTheme());

  useEffect(() => {
    const initialTheme = "light";
    setTheme(initialTheme === "dark" ? createDarkTheme() : createLightTheme());
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme.className === "light-theme"
        ? createDarkTheme()
        : createLightTheme()
    );
  };

  // Apply global styles
  globalStyles();

  return (
    <Scaffold className={theme}>
      <NavBar toggleTheme={toggleTheme} />
      <br />

      <Book />
      <Footer></Footer>
    </Scaffold>
  );
}

export default App;
