import { useCallback, useState } from "react";
import UseCallbackChild from "./UseCallbackChild";

function UseCallbackParent() {
  const [countone, setCountone] = useState(0);
  const [counttwo, setCounttwo] = useState(0);

  const getItem = useCallback(() => {
    console.warn(counttwo + 1, counttwo - 1);
    console.warn("getItem");
    return [counttwo + 1, counttwo - 1];
  }, [counttwo]);

  return (
    <div>
      <button onClick={() => setCountone(countone + 1)}>
        Count One:{countone}
      </button>
      <button onClick={() => setCounttwo(counttwo + 1)}>
        Count Two:{counttwo}
      </button>
      <UseCallbackChild getItem={getItem} />
    </div>
  );
}

export default UseCallbackParent;
