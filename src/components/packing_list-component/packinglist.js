import React, { useContext } from "react";
import TaskItemsContainer from "./packing_list-component-dependencies/task-items-container";
import SortInput from "./packing_list-component-dependencies/sort-input";
import ClearBtn from "./packing_list-component-dependencies/clear-btn";
import { DataContext } from "../../handlers/input-handlers";

import "./packinglistStyle.css";

const Packinglist = () => {
  const { dataBase } = useContext(DataContext);
  // console.log(dataBase);
  return (
    <div className="packing-list">
      <TaskItemsContainer dataBase={dataBase} />
      <div className="packing-inputs">
        <SortInput />
        <ClearBtn />
      </div>
    </div>
  );
};

export default Packinglist;
