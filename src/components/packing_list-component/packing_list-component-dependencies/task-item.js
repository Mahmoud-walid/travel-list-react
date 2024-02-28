import React, { useState } from "react";

const TaskItem = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  // const { dataBase } = useContext(DataContext);

  const changeHandler = () => {
    setIsChecked(() => !isChecked);
    props.dataBase.packed = !isChecked;
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
