import React from "react";

import Reuse from "./Reuse.js";

function ReuseCompo() {
  const students = [
    { username: "lipsa", id: 11, email: "lipsa@gmail.com" },
    { username: "nency", id: 22, email: "nency@gmail.com" },
    { username: "honey", id: 33, email: "honey@gmail.com" },
  ];
  return (
    // for Warning: Each child in a list should have a unique "key" prop, we use index.
    <div>
      <h1>Reuse Components</h1>

      <div>
        {students.map((data, i) => (
          <tr key={i}>
            <Reuse item={data} />
          </tr>
        ))}
      </div>
    </div>
  );
}

export default ReuseCompo;
