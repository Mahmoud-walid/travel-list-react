import React from "react";
import { handlerInputChange } from "../../../handlers/input-handlers";

const CounterInput = (props) => {
  // const [count, setCount] = useState(0);

  const options = Array.from({ length: 20 }, (_, index) => index + 1);
  return (
    <select
      onClick={(event) => props.setCount(() => +handlerInputChange(event))}
      className="counter-input"
    >
      {options.map((ele) => (
        <option key={ele} value={ele}>
          {ele}
        </option>
      ))}
    </select>
  );
};

export default CounterInput;
