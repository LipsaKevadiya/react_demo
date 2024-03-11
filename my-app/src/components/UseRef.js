import { useRef } from "react";

function UseRef() {
  let InputRef = useRef(null);

  function handleInput() {
    console.warn("handle input function");
    InputRef.current.value = "111111";
    InputRef.current.focus();
    InputRef.current.style.color = "pink";
    InputRef.current.style.backgroundColor = "black";
    InputRef.current.style.display = "none";
  }
  return (
    <div>
      <h1>UseRef hook for func compo</h1>
      <input type="text" ref={InputRef} />

      <button onClick={() => handleInput()}>Handle Input</button>
    </div>
  );
}

export default UseRef;
