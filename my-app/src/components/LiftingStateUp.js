import React from "react";
import User from "./User.js";

function LiftingStateUp() {
  // recieving data from child component.
  function ParentAlert(data) {
    alert(data);
  }

  return (
    <div>
      <User alert={ParentAlert} />
    </div>
  );
}

export default LiftingStateUp;
