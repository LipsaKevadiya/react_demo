import React from "react";
import CommonContext from "./CommonContext.js";

function UpdateButton() {
  return (
    <CommonContext.Consumer>
      {({ updateColor }) => (
        <div>
          <button onClick={() => updateColor("grey")}>Update color grey</button>
          <button onClick={() => updateColor("blue")}>Update color blue</button>
          <button onClick={() => updateColor("pink")}>Update color pink</button>
        </div>
      )}
    </CommonContext.Consumer>
  );
}
export default UpdateButton;
