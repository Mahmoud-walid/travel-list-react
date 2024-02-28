import React, { useContext } from "react";
import { DataContext } from "../../../handlers/input-handlers";

const ClearBtn = () => {
  const { updateDataBase } = useContext(DataContext);
  return (
    <button onClick={() => updateDataBase([])} className="clear-btn">
      CLEAR LIST
    </button>
  );
};

export default ClearBtn;
