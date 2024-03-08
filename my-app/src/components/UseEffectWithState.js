import React, { useState, useEffect } from "react";

function UseEffectWithState() {
  const [data, setData] = useState(10);
  const [count, setCount] = useState(100);

  useEffect(() => {
    console.warn("useeffect");
  }, [data]);
  useEffect(() => {
    alert("count is" + count);
  }, [count]);
  return (
    <div>
      <h1>Data:{data}</h1>
      <h1>Count:{count}</h1>

      <button onClick={() => setData(data + 1)}>update data</button>
      <button onClick={() => setCount(count + 1)}>update counter</button>
    </div>
  );
}

export default UseEffectWithState;
