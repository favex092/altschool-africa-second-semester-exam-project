import React from "react";

import { GrNext, GrPrevious } from "react-icons/gr";

const Pagination = ({
  repositoryApIResult,
  ReposPerPage,
  currentRepository,
  setcurrentRepository,
}) => {
  const PaginationNumber = [];

  for (
    let i = 1;
    i < Math.ceil(repositoryApIResult.length / ReposPerPage);
    i++
  ) {
    PaginationNumber.push(i);
  }

  const PageGetUrl = (val) => {
    setcurrentRepository(val);
  };

  const PageGetUrlByArrow = (num) => {
    if (num <= PaginationNumber.length && num > 0) {
      setcurrentRepository(num);
    } else {
      return;
    }
  };

  return (
    <div className="flex-box">
      <div className="button-controls">
        <h2
          style={{ cursor: "pointer" }}
          onClick={() => PageGetUrlByArrow(currentRepository - 1)}
        >
          <GrPrevious />
        </h2>
      </div>
      {PaginationNumber.map((data, index) => {
        return (
          <li
            className="boxes"
            onClick={() => PageGetUrl(data)}
            key={index}
          >
            {data}
          </li>
        );
      })}
      <div className="button-controls">
        <h2
          style={{ cursor: "pointer" }}
          onClick={() => PageGetUrlByArrow(currentRepository + 1)}
        >
          <GrNext />
        </h2>
      </div>
    </div>
  );
};

export default Pagination;