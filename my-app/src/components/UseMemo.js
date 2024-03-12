import { useState, useMemo } from "react";

function UseMemo() {
  const [data, setData] = useState(0);
  const [item, setItem] = useState(10);

  const multiCountMemo = useMemo(
    function MultiCount() {
      console.warn("MultiCount called");

      return data * 5;
    },
    [data]
  );

  return (
    <div>
      <h1>Data Count : {data}</h1>
      <h1>Item Count : {item}</h1>
      <h2>{multiCountMemo}</h2>
      <button onClick={() => setData(data + 1)}>Updata Data Count</button>
      <button onClick={() => setItem(item * 10)}>Updata Item Count</button>
    </div>
  );
}

export default UseMemo;
