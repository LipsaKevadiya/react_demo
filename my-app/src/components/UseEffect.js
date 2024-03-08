import React, { useEffect } from "react";

function UseEffect(props) {
  useEffect(() => {
    console.warn("useeffect");
  }, [props.count]); // useEffect only applied on count not data.
  return (
    <div>
      <h1>Data:{props.data}</h1>
      <h1>Count:{props.count}</h1>
    </div>
  );
}

export default UseEffect;
