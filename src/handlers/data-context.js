import React, { useState } from "react";
import { DataContext } from "./input-handlers";

export const DataProvider = ({ children }) => {
  const [dataBase, setDataBase] = useState([]);

  const updateDataBase = (newData) => {
    setDataBase(() => newData);
  };

  return (
    <DataContext.Provider value={{ dataBase, updateDataBase }}>
      {children}
    </DataContext.Provider>
  );
};
