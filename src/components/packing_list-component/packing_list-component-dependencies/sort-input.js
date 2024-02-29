import React, { useContext } from "react";
import { DataContext } from "../../../handlers/input-handlers";

const SortInput = () => {
  const { dataBase, updateDataBase } = useContext(DataContext);
  const { setSortOption } = useContext(DataContext);

  const sortingHandler = (event) => {
    return setSortOption(() => event.target.value);
  };
  return (
    <select onChange={(event) => sortingHandler(event)} className="sort-input">
      <option value={"inputOrder"}>SORT BY INPUT ORDER</option>
      <option value={"description"}>SORT BY DESCRIPTION</option>
      <option value={"packedStatus"}>SORT BY PACKED STATUS</option>
    </select>
  );
};

export default SortInput;
