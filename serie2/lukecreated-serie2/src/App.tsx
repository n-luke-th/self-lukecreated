import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useParams,
} from "react-router-dom";
import Book from "./components/book.tsx";
import NavBar from "./components/navBar.tsx";
import Footer from "./components/footer.tsx";
import Scaffold from "./primitives/scaffold.tsx";
import { useState, useEffect } from "react";
import { createLightTheme, createDarkTheme } from "./styles/stitches.config.ts";
import { globalStyles } from "./styles/globalStyles.ts";
import ErrorPage from "./pages/errorPage.tsx";
import pages from "./bookContents.tsx";

function App() {
  // Scaffold.propTypes = {
  //   className: PropTypes.object,
  //   children: PropTypes.node.isRequired,
  // };

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

interface ValidatePagePathProps {
  pages: {
    id: number;
    title: string;
    content: Node;
    path: string | [string];
  };
  children: Node;
}

// Helper component to validate the page path
function ValidatePagePath(
  pages: ValidatePagePathProps["pages"],
  children: ValidatePagePathProps["children"]
) {
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

// ValidatePagePath.propTypes = {
//   pages: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       content: PropTypes.node.isRequired,
//       path: PropTypes.oneOfType([
//         PropTypes.string,
//         PropTypes.arrayOf(PropTypes.string),
//       ]).isRequired,
//     })
//   ).isRequired,
//   children: PropTypes.node.isRequired,
// };

export default App;
