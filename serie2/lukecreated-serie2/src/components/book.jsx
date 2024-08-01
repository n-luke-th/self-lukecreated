import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StyledButton from "../primitives/button";
import BookNavigator from "../primitives/bookNavigator";
import PropTypes from "prop-types";

export default function Book({ pages }) {
  const navigate = useNavigate();
  const { pagePath } = useParams();
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const pageIndex = pages.findIndex((page) =>
      Array.isArray(page.path)
        ? page.path.includes(pagePath)
        : page.path === pagePath
    );
    if (pageIndex !== -1) {
      setCurrentPage(pageIndex);
    } else {
      navigate(`/${getFirstPath(pages[0].path)}`);
    }
  }, [pagePath, navigate, pages]);

  const getFirstPath = (path) => (Array.isArray(path) ? path[0] : path);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      navigate(`/${getFirstPath(pages[currentPage + 1].path)}`);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      navigate(`/${getFirstPath(pages[currentPage - 1].path)}`);
    }
  };

  return (
    <>
      <div
        className="page-content"
        style={{
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
          height: "70vh",
          justifyContent: "flex-start",
          alignItems: "center",
          alignContent: "space-around",
          border: "1px solid var(--colors-main7)",
          borderRadius: 11,
          padding: "20px",
          marginBottom: "20px",
          overflow: "hidden",
        }}
      >
        {pages[currentPage].content}
      </div>

      <BookNavigator>
        <StyledButton onClick={prevPage} disabled={currentPage === 0}>
          Previous
        </StyledButton>
        <h4>{pages[currentPage].title}</h4>
        <StyledButton
          onClick={nextPage}
          disabled={currentPage === pages.length - 1}
        >
          Next
        </StyledButton>
      </BookNavigator>
    </>
  );
}

Book.propTypes = {
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
};
