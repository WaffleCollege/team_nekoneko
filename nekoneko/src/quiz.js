import React from 'react';
import './quiz.css'; 

function Quiz() {
  return (
    <div>
        <button onClick={() => window.history.back()}>戻る</button>
        <h2>クイズページ</h2>
      
    </div>
  );
}

export default Quiz;