import React, { useContext } from "react";
import { DataContext } from "../../../handlers/input-handlers";

const SortInput = () => {
  const { dataBase, updateDataBase } = useContext(DataContext);
  // const [orderedDataBase, setOrderedDataBase] = useState([]);
  const sortHandler = (event) => {
    const valueOption = event.target.value;
    const dataOrder = [...dataBase];

    if (valueOption === "inputOrder") {
      // Sort by input order (assuming inputOrder is a unique identifier)
      dataOrder.sort();
    }

    if (valueOption === "description") {
      // Sort by description (assuming description is a string)
      dataOrder.sort((a, b) => a.item.localeCompare(b.item));
    }

    if (valueOption === "packedStatus") {
      // Sort by packed status (assuming packed is a boolean)
      dataOrder.sort((a, b) => (a.packed === b.packed ? 0 : a.packed ? 1 : -1));
    }

    updateDataBase(dataOrder);
  };
  return (
    <select
      onChange={(event) => {
        console.log(event.target.value);
        sortHandler(event);
      }}
      className="sort-input"
    >
      <option value={"inputOrder"}>SORT BY INPUT ORDER</option>
      <option value={"description"}>SORT BY DESCRIPTION</option>
      <option value={"packedStatus"}>SORT BY PACKED STATUS</option>
    </select>
  );
};

export default SortInput;
