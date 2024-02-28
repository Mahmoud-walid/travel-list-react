import React, { useContext } from "react";
import { DataContext } from "../../handlers/input-handlers";

import "./statsStyle.css";

const Stats = () => {
  const { dataBase } = useContext(DataContext);
  const { dataPacked } = useContext(DataContext);
  console.log("stats", dataPacked);
  const dataPackedLength = dataPacked.length;
  const packedPercent = (total, picked) =>
    total === 0 && picked === 0 ? 0 : (picked / total) * 100;
  return (
    <div className="message">
      <span>
        💼 You have {dataBase.length} items on your list, and you already packed{" "}
        {dataPackedLength} ({packedPercent(dataBase.length, dataPackedLength)}%)
      </span>
    </div>
  );
};

export default Stats;
