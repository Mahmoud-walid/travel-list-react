import React, { useContext, useState } from "react";
import CounterInput from "./form-component-dependencies/counter-input";
import ItemInput from "./form-component-dependencies/item-input";
import AddBtn from "./form-component-dependencies/add-btn";

import "./formStyle.css";
import { DataContext } from "../../handlers/input-handlers";

const Form = () => {
  const [count, setCount] = useState(1);
  const [item, setItem] = useState("");
  const [isExistText, setIsExistText] = useState(false);
  // const [dataBase, setDataBase] = useState([]);

  const { dataBase, updateDataBase } = useContext(DataContext);

  const taskObject = { item, count };
  console.log("form", dataBase);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        // setDataBase(() => dataBase.concat(taskObject));
        isExistText && updateDataBase(dataBase.concat(taskObject));
      }}
      className="form"
    >
      <p>What do you need for your 🥰 trip?</p>
      <CounterInput setCount={setCount} />
      <ItemInput setIsExistText={setIsExistText} setItem={setItem} />
      <AddBtn formObject={{ count, item }} />
    </form>
  );
};

export default Form;
