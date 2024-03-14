import React, { useEffect, useRef } from "react";

function PrevPropsChild(props) {
  const lastVal = useRef();

  useEffect(() => {
    lastVal.current = props.count;
    // before updating count , it takes lastVal of count
    // current is predefined property
  });

  const prevProps = lastVal.current;

  return (
    <div>
      <h1>Prev Props with Hooks</h1>
      <h2>current value {props.count}</h2>
      <h2>previous value {prevProps}</h2>
      <h2>diff between current val & prev val {props.count - prevProps}</h2>
    </div>
  );
}

export default PrevPropsChild;
