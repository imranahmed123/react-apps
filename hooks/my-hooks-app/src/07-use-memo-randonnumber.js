import React, { useState, useMemo } from "react";

function RandomNumber() {
  const [count, setCount] = useState(0);

  const random = useMemo(() => {
    console.log("Generating random number...");
    return Math.random();
  }, [count]);

  return (
    <div>
      <h2>Random Number App using useMemo</h2>
      <p>Random: {random}</p>
      <button onClick={() => setCount(count + 1)}>Generate Random</button>
    </div>
  );
}

export default RandomNumber;
