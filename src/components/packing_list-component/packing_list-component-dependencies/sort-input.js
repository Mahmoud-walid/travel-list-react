import React from "react";

const SortInput = () => {
  return (
    <select className="sort-input">
      <option>SORT BY INPUT ORDER</option>
      <option>SORT BY DESCRIPTION</option>
      <option>SORT BY PACKED STATUS</option>
    </select>
  );
};

export default SortInput;
