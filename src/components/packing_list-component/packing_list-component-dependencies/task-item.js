import React, { useContext, useState } from "react";
import { DataContext } from "../../../handlers/input-handlers";

const TaskItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const { dataPacked, updateDataPacked } = useContext(DataContext);

  const changeHandler = () => {
    setIsChecked(() => !isChecked);
    props.dataBase.packed = !isChecked;
    if (!isChecked) {
      updateDataPacked(dataPacked.concat(props.dataBase));
    } else {
      updateDataPacked(dataPacked.filter((item) => item !== props.dataBase));
    }
  };
  return (
    <li className="task-item">
      <input
        onChange={() => {
          changeHandler();
        }}
        type="checkbox"
        name="task-item"
      />
      <span style={{ textDecoration: isChecked ? "line-through" : "" }}>
        {props.dataBase.count} {props.dataBase.item}
      </span>
      <button>❌</button>
    </li>
  );
};

export default TaskItem;
