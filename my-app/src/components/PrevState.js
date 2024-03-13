import { useState } from "react";

function PrevState() {
  const [count, setCount] = useState(1);
  function Update() {
    let random = Math.floor(Math.random() * 10);
    setCount((prev) => {
      console.warn(prev);
      if (prev < 5) {
        alert("low value");
      }
      return random;
    });
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={Update}>Click Me To Update Count</button>
    </div>
  );
}

export default PrevState;
