import "./App.css";
import Book from "./components/book";
import Scaffold from "./primitives/scaffold";
import StyledButton from "./primitives/button";
import NavBar from "./primitives/navBar";
import { useState, useEffect } from "react";
import { createLightTheme, createDarkTheme } from "./styles/stitches.config";
import { globalStyles } from "./styles/globalStyles";

function App() {
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
      <NavBar></NavBar>
      <br />

      <Book></Book>
      <StyledButton onClick={toggleTheme}>Toggle Theme</StyledButton>
    </Scaffold>
  );
}

export default App;
