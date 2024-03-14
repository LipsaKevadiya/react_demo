// import { useRef } from "react";
import { useState } from "react";
import PrevPropsChild from "./PrevPropsChild";

function PrevPropsWithHooks() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <PrevPropsChild count={count} />
      <button onClick={() => setCount(Math.floor(Math.random() * 10))}>
        Update Count
      </button>
    </div>
  );
}

export default PrevPropsWithHooks;
