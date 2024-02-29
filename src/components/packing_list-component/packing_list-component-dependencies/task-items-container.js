import React, { useContext, useEffect, useState } from "react";
import TaskItem from "./task-item";
import { DataContext } from "../../../handlers/input-handlers";

const TaskItemsContainer = (props) => {
  const { sortOption } = useContext(DataContext);
  const [sorted, setSorted] = useState([]);

  const { dataBase } = props;
  useEffect(() => {
    const sortFunction = (a, b) => {
      if (sortOption === "inputOrder") return a.item.localeCompare(b.item);
      if (sortOption === "description") return b.item.localeCompare(a.item);
      if (sortOption === "packedStatus") {
        return a.packed && !b.packed
          ? 1
          : !a.packed && b.packed
          ? -1
          : a.item.localeCompare(b.item);
      }
    };
    const sortedArray = [...dataBase].sort(sortFunction);
    setSorted(sortedArray);
  }, [dataBase, sortOption]);
  return (
    <ul className="task-items-container">
      {sorted.map((ele, index) => {
        return <TaskItem key={index} dataBase={ele} />;
      })}
    </ul>
  );
};

export default TaskItemsContainer;
