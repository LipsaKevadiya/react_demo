import { useState } from "react";

function ControlledCompo() {
  let [val, setVal] = useState("");
  return (
    <div>
      <h1>controlled components that handled with state</h1>
      <input
        type="text"
        value={val}
        onChange={(event) => setVal(event.target.value)}
      />
      <h2>Value is : {val}</h2>
    </div>
  );
}

export default ControlledCompo;
