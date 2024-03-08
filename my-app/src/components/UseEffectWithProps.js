import React, { useState } from "react";
import UseEffect from "./UseEffect.js";

function UseEffectWithProps() {
  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);

  return (
    <div>
      <UseEffect count={count} data={data} />
      <h1>UseEffect With Props</h1>
      <button onClick={() => setData(data + 1)}>update data</button>
      <button onClick={() => setCount(count + 1)}>update counter</button>
    </div>
  );
}

export default UseEffectWithProps;
