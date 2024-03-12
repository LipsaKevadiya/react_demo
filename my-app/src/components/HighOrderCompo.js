import { useState } from "react";

function Hoc() {
  return (
    <div>
      <h1>HOC</h1>
      <HOCRed cmp={Counter} />
      <HOCBlue cmp={Counter} />
    </div>
  );
}

function HOCRed(props) {
  return (
    <h2 style={{ backgroundColor: "pink" }}>
      Pink Counter
      <props.cmp />
    </h2>
  );
}
function HOCBlue(props) {
  return (
    <h2 style={{ backgroundColor: "blue" }}>
      Blue Counter
      <props.cmp />
    </h2>
  );
}
function Counter() {
  const [data, setData] = useState(0);

  return (
    <div>
      <h1>{data}</h1>
      <button onClick={() => setData(data + 1)}> Data Count- {data} </button>
    </div>
  );
}

export default Hoc;
