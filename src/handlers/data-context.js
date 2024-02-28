import React, { useState } from "react";
import { DataContext } from "./input-handlers";

export const DataProvider = ({ children }) => {
  const [dataBase, setDataBase] = useState([]);
  const [dataPacked, setDataPacked] = useState([]);
  // const dataPacked = dataBase.filter((ele) => ele.packed === true);

  const updateDataPacked = (newDataPacked) => {
    setDataPacked(() => newDataPacked);
  };

  const updateDataBase = (newData) => {
    setDataBase(() => newData);
  };

  return (
    <DataContext.Provider
      value={{ dataBase, updateDataBase, dataPacked, updateDataPacked }}
    >
      {children}
    </DataContext.Provider>
  );
};
