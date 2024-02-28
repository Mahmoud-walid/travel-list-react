import React from "react";
import TaskItem from "./task-item";

const TaskItemsContainer = (props) => {
  return (
    <ul className="task-items-container">
      {props.dataBase.map((ele, index) => {
        return <TaskItem key={index} dataBase={ele} />;
      })}
    </ul>
  );
};

export default TaskItemsContainer;
