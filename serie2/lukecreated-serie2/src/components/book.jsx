import StyledButton from "../primitives/button";
import BookNavigator from "../primitives/bookNavigator";
import { useState } from "react";
const pages = [
  { id: 1, content: <h1>Page 1 Content 你好</h1> },
  { id: 2, content: <h1>Page 2 Content 你好</h1> },
  { id: 3, content: <h1>Page 3 Content 你好</h1> },
];

export default function Book() {
  const [currentPage, setCurrentPage] = useState(0);
  const nextPage = () => {
    setCurrentPage((prev) => (prev < pages.length - 1 ? prev + 1 : prev));
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : prev));
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
        <h4>[[Page title]]</h4>
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
