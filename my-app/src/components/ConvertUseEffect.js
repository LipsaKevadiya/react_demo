import React, { useState, useEffect } from "react";

const nums = new Array(30_000).fill(0).map((_, i) => {
  return {
    index: i,
    isMagical: i === 29_000,
  };
});

function ConvertUseEffect() {
  const [count, setCount] = useState(0);
  const [numbers, setNumbers] = useState(nums);
  const [magical, setMagical] = useState(null);

  useEffect(() => {
    setMagical(numbers.find((item) => item.isMagical === true));
  }, [numbers]);

  return (
    <div>
      <span>Magical number is {magical ? magical.index : null}</span>
      <button
        onClick={() => {
          setCount((count) => count + 1);
          if (count === 5) {
            setNumbers(
              new Array(10_000).fill(0).map((_, i) => {
                return {
                  index: i,
                  isMagical: i === 9_000,
                };
              })
            );
          }
        }}
      >
        count is {count}
      </button>
    </div>
  );
}

export default ConvertUseEffect;
