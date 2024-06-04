import React, { useState, useContext } from 'react';
import { ProgressContext } from '../context/ProgressContext';
import CodeEditor from './CodeEditor';

function Challenge({ task, solution }) {
  const [userCode, setUserCode] = useState('');
  const { addPoints, completeLevel } = useContext(ProgressContext);

  const handleSubmit = () => {
    if (userCode.trim() === solution.trim()) {
      addPoints(100);
      completeLevel();
      alert('Challenge completed!');
    } else {
      alert('Try again!');
    }
  };

  return (
    <div>
      <h2>{task}</h2>
      <CodeEditor code={userCode} onChange={(code) => setUserCode(code)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Challenge;
