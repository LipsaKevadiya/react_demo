import React, { useEffect,useState } from "react";

function UseCallbackChild({ getItem }) {
  const [items, setItems] = useState([]);
  useEffect(()=>{
    setItems(getItem())
  },[getItem])
  return <div>
    { items&&items.map(item=>{
        return(
            <div key={item}>{item}</div>
        );
    })}
  </div>;
}

export default UseCallbackChild;
