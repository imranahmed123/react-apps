import React, { useRef } from "react";

function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>TextInput App using useRef</h2>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
      <hr />
    </div>
  );
}

export default TextInput;
