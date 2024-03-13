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
        <div>
          <input type="text" ref={InputRef} />
        </div>
        <div>
          <input type="text" ref={InputRef2} />
        </div>
        <div>
          {" "}
          <input type="text" id="input3" />
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}

export default UncontrolledCompo;
