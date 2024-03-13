import { useState } from "react";
import Child from "./ReactMemoChild";

function ReactMemoParent() {
  const [count, setCount] = useState(1);
  const [data, setData] = useState(0);

  return (
    <div>
      <Child count={count} />
      <button onClick={() => setData(data + 1)}> Data Count- {data} </button>
    </div>
  );
}

export default ReactMemoParent;

