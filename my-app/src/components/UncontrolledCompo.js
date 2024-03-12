import React, { useRef } from "react";
import "../FormStyles.css";

function UncontrolledCompo() {
  let InputRef = useRef(null);
  let InputRef2 = useRef(null);

  function handleSubmt(e) {
    e.preventDefault();
    console.warn("input field 1 value", InputRef.current.value);
    console.warn("input field 2 value", InputRef2.current.value);
    let input = document.getElementById("input3").value;
    console.warn("input field 3 value", input);
  }
  return (
    <div className="your-form">
      <h1>uncontrolled components that handled directly through DOM</h1>
      <form onSubmit={handleSubmt}>
        <input type="text" ref={InputRef} />
        <input type="text" ref={InputRef2} />
        <input type="text" id="input3" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledCompo;
