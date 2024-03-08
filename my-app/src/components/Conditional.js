import { useState } from "react";

function Conditional() {
  const [data] = useState(true);

  return <div>{data ? <h1>Hello if part</h1> : <h1> Hello else part</h1>}</div>;
}

export default Conditional;
