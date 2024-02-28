import React from "react";
import { handlerInputChange } from "../../../handlers/input-handlers";

const ItemInput = (props) => {
  // const [item, setItem] = useState("");
  return (
    <input
      onChange={(event) => {
        props.setItem(() => handlerInputChange(event));
        props.setIsExistText((isExistText) =>
          event.target.value === ""
            ? (isExistText = false)
            : (isExistText = true)
        );
      }}
      className="item-input"
      type="text"
      name="item"
      placeholder="Item..."
    />
  );
};

export default ItemInput;
