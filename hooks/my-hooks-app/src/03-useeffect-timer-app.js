import React, { useState, useEffect } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div>
      <h2>Timer App using useEffect</h2>
      <p>Seconds: {seconds}</p>
      <hr />
    </div>
  );
}

export default Timer;
