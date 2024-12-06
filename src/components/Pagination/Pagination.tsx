import React from "react";
import "./Pagination.css";

const Pagination = () => {
  return(
  <div className="pagination">
    <div></div>
    <div className="pagination-number">
      <span className="page-item active">1</span>
      <span className="page-item">2</span>
      <span className="page-item">3</span>
    </div>
    <div className="pagination-next">
      <span className="page-item next">Next →</span>
    </div>
  </div>
  );
};

export default Pagination;