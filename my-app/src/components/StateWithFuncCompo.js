import { useState } from "react";

function WithState() {
  const [data, setData] = useState("lipsa");
  function Update() {
    setData("lipsaaaa");
  }
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={Update}>Click Me</button>
    </div>
  );
}

export default WithState;

