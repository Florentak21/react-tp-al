import React, { useState } from "react";

interface PaginationProps {
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <div className="flex justify-between items-center">
      <button
        className={`px-4 py-2 text-sm border border-[#ff335f] ${
          currentPage === 1
            ? "invisible"
            : "hover:bg-[#ff335f] hover:text-white text-[#ff335f]"
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ← Previous
      </button>

      <div className="flex gap-1">
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`cursor-pointer px-4 py-2 border border-[#ff335f] ${
              currentPage === index + 1
                ? "bg-[#ff335f] text-white"
                : "hover:bg-[#ff335f] hover:text-white text-[#ff335f]"
            }`}
          >
            {index + 1}
          </span>
        ))}
      </div>

      <button
        className={`px-4 py-2 text-sm border border-[#ff335f] ${
          currentPage === totalPages
            ? "invisible"
            : "hover:bg-[#ff335f] hover:text-white text-[#ff335f]"
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next →
      </button>
    </div>
  );
};

export default Pagination;