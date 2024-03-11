import { useRef } from "react";
import ForwardRefChild from "./ForwardRefChild";

function ForwardRef() {
  let InputRef = useRef(null);

  function updateInput() {
    InputRef.current.value = "111111";
    InputRef.current.focus();
    InputRef.current.style.color = "pink";
  }

  return (
    <div>
      <h1>ForwardRef in func compo</h1>
      {/* <input type="text" ref={InputRef} /> */}
      <ForwardRefChild ref={InputRef} />
      <button onClick={() => updateInput()}>Update Input</button>
    </div>
  );
}

export default ForwardRef;
