import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "1.6rem" }}>
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        style={styles.button}
      >
        Previous
      </button>
      <span style={{ margin: "0.6rem", fontSize: "16px" }}>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        style={styles.button}
      >
        Next
      </button>
    </div>
  );
};

const styles = {
  button: {
    padding: "0.6rem 1rem",
    margin: "0 5px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #4CAF50",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

export default Pagination;
