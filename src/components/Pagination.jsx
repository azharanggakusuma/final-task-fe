/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Pagination({ currentPage, totalPages, onPageChange }) { 
  const pageNumbers = [];
  const maxPageButtons = 5;
  const halfMaxButtons = Math.floor(maxPageButtons / 2);

  let startPage = Math.max(1, currentPage - halfMaxButtons);
  let endPage = startPage + maxPageButtons - 1;

  if (endPage > totalPages) {
    endPage = totalPages;
    startPage = Math.max(1, endPage - maxPageButtons + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-center mt-10">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="mr-2 px-3 py-2 bg-gray-200 text-gray-500 rounded-l hover:bg-gray-300"
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-2 ml-2 ${
            currentPage === page
              ? "bg-secondary text-white hover:bg-primary"
              : "bg-gray-200 text-gray-500"
          } rounded hover:bg-gray-300`}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="ml-4 px-3 py-2 bg-gray-200 text-gray-500 rounded-r hover:bg-gray-300"
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default Pagination;
