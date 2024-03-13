import React from "react";

const Child = (props) => {
  return <div>Child :{props.data}</div>;
};

export default React.memo(Child);
