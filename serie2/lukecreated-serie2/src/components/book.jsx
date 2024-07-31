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
    const pageIndex = pages.findIndex((page) => page.path === pagePath);
    if (pageIndex !== -1) {
      setCurrentPage(pageIndex);
    } else {
      navigate(`/${pages[0].path}`);
    }
  }, [pagePath, navigate, pages]);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      navigate(`/${pages[currentPage + 1].path}`);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      navigate(`/${pages[currentPage - 1].path}`);
    }
  };

  return (
    <>
      <div
        className="page-content"
        style={{
          minHeight: "300px",
          height: "70vh",
          border: "1px solid var(--colors-main7)",
          padding: "20px",
          marginBottom: "20px",
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
      path: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
};
