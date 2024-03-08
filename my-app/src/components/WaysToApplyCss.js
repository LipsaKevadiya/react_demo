import React from "react";
import "../styles.css";
import style from "../custom.module.css";

function WaysToApplyCss() {
  return (
    <div>
      <h1 className="style1">Hyy Way-1 to Apply CSS-normal stylesheet </h1>
      <h1 style={{ backgroundColor: "DodgerBlue", color: "lightblue" }}>
        Hyy Way-2 to Apply CSS-inline style
      </h1>
      <h1 className={style.style3}>Hyy Way-3 to Apply CSS-with module</h1>
    </div>
  );
}

export default WaysToApplyCss;
