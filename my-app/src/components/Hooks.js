import React, { useState, useEffect } from "react";

function Hooks() {
  const [data, setData] = useState(0);

  useEffect(() => {
    console.warn("useeffect");
  });
  return (
    <div>
        <h1>useeffect hook</h1>
      <h1>{data}</h1>
      <button onClick={()=>setData(data+1)}>update counter</button>
    </div>
  );
}

export default Hooks;
