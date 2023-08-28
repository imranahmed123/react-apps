import React, { useState, useCallback } from "react";

function MemoizedComponent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h2>Memoized Component using useCallback</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <hr />
    </div>
  );
}

export default MemoizedComponent;
