import React, { createContext } from "react";

export const handlerInputChange = (event) => {
  const newItem = event.target.value;
  //   console.log(newItem);
  return newItem;
};

export const DataContext = createContext();
