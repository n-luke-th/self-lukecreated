import { useState, useEffect, useMemo, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StyledButton } from "../primitives/buttons";
import BookNavigator from "../primitives/bookNavigator";
import PropTypes from "prop-types";

const Book = ({ pages }) => {
  const navigate = useNavigate();
  const { pagePath } = useParams();
  const [currentPage, setCurrentPage] = useState(0);

  const getFirstPath = useCallback(
    (path) => (Array.isArray(path) ? path[0] : path),
    []
  );

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
  }, [pagePath, navigate, pages, getFirstPath]);

  const nextPage = useCallback(() => {
    if (currentPage < pages.length - 1) {
      navigate(`/${getFirstPath(pages[currentPage + 1].path)}`);
    }
  }, [currentPage, navigate, pages, getFirstPath]);

  const prevPage = useCallback(() => {
    if (currentPage > 0) {
      navigate(`/${getFirstPath(pages[currentPage - 1].path)}`);
    }
  }, [currentPage, navigate, pages, getFirstPath]);

  const pageContent = useMemo(
    () => pages[currentPage].content,
    [pages, currentPage]
  );

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
          padding: "15px",
          marginBottom: "15px",
          overflow: "hidden",
        }}
      >
        {pageContent}
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
};

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

export default Book;
