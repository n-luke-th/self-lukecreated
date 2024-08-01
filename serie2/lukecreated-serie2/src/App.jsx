import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";
import Book from "./components/book";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Scaffold from "./primitives/scaffold";
import { useState, useEffect } from "react";
import { createLightTheme, createDarkTheme } from "./styles/stitches.config";
import { globalStyles } from "./styles/globalStyles";
import ErrorPage from "./pages/errorPage.jsx";
import PropTypes from "prop-types";
import pages from "./bookContents.jsx";

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

  // Apply global styles
  globalStyles();

  return (
    <Router>
      <Scaffold className={theme}>
        <NavBar toggleTheme={toggleTheme} />
        <br />

        <Routes>
          <Route
            path="/:pagePath"
            element={
              <ValidatePagePath pages={pages}>
                <Book pages={pages} />
              </ValidatePagePath>
            }
          />
          <Route
            path="/"
            element={<Navigate to={`/${pages[0].path}`} replace />}
          />
          <Route path="/error" element={<ErrorPage />} />
        </Routes>

        <Footer></Footer>
      </Scaffold>
    </Router>
  );
}

// Helper component to validate the page path
function ValidatePagePath({ pages, children }) {
  const { pagePath } = useParams();
  const pageExists = pages.some((page) =>
    Array.isArray(page.path)
      ? page.path.includes(pagePath)
      : page.path === pagePath
  );

  if (pageExists) {
    return children;
  } else {
    return <Navigate to="/error" />;
  }
}

ValidatePagePath.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
      path: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string),
      ]).isRequired,
    })
  ).isRequired,
  children: PropTypes.node.isRequired,
};

export default App;
