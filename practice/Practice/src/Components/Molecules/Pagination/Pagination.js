import React from "react";
import "./Pagination.css";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, previousPage } from "../../../Actions/Actions";
const Pagination = () => {
  const currentPage = useSelector((state) => state.currentpage);
  const dispatch = useDispatch();
  const handlePrevious = () => {
    dispatch(previousPage());
  };

  const handleNext = () => {
    dispatch(nextPage());
  };
  return (
    <div className="pagination">
      <button
        className="pagination-button"
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Pervious
      </button>
      <button className="pagination-button">{currentPage}</button>
      <button className="pagination-button" onClick={handleNext}>
        Next{" "}
      </button>
    </div>
  );
};

export default Pagination;
