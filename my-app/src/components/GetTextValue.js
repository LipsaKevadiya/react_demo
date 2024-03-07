import { useState } from "react";

function GetValue() {
  const [data, setData] = useState(null);
  const [text, setText] = useState(false);
  function GetData(event) {
    setData(event.target.value);
    setText(false);
  }
  return (
    <div>
      {text ? <h1>{data}</h1> : null}

      <input type="text" onChange={GetData} />
      <button onClick={() => setText(!text)}>print text</button>
    </div>
  );
}

export default GetValue;
