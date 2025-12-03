import React, { useRef } from 'react';

function FocusInputButton() {
  const inputRef = useRef(null); 

  const handleFocusClick = () => {

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} /> 
      <button onClick={handleFocusClick}>Focus Input</button>
    </div>
  );
}

export default FocusInputButton;