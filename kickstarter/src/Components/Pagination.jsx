import React from "react";
import './Pagination.css'; 

const maxPagesToShow = 5; 

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPaginationItems = () => {
    const pageNumbers = [];
    let startPage, endPage;

    if (totalPages <= maxPagesToShow) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = maxPagesToShow;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - maxPagesToShow + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }

    const paginationItems = [];

    if (startPage > 1) {
      paginationItems.push(1);
      if (startPage > 2) paginationItems.push("...");
    }

    paginationItems.push(...pageNumbers);

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) paginationItems.push("...");
      paginationItems.push(totalPages);
    }

    return paginationItems;
  };

  return (
    <div className="pagination-container">
      <ul className="pagination-list">
        <li
          className={`pagination-button ${currentPage === 1 ? "disabled" : ""}`}
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        >
          {"<"}
        </li>

        {getPaginationItems().map((item, index) => (
          <li
            key={index}
            className={`pagination-item ${item === currentPage ? "active" : ""} ${item === "..." ? "disabled" : ""}`}
            onClick={() =>
              item !== "..." && item !== currentPage && onPageChange(item)
            }
          >
            {item}
          </li>
        ))}

        <li
          className={`pagination-button ${currentPage === totalPages ? "disabled" : ""}`}
          onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        >
          {">"}
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
