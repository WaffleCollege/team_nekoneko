import React from 'react';
import './input.css'; 

function Input() {
  return (
    <div>
        <button onClick={() => window.history.back()}>戻る</button>
        <h1>Input</h1>
      
    </div>
  );
}

export default Input;