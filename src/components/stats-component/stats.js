import React, { useContext, useState } from "react";
import { DataContext } from "../../handlers/input-handlers";

import "./statsStyle.css";

const Stats = () => {
  const { dataBase } = useContext(DataContext);
  const dataPacked = dataBase.filter((ele) => ele.packed === true);
  return (
    <div className="message">
      <span>
        💼 You have {dataBase.length} items on your list, and you already packed{" "}
        {dataPacked.length} (0%)
      </span>
    </div>
  );
};

export default Stats;
