import React from 'react';

function Tutorial({ steps }) {
  return (
    <div>
      <h2>Tutorial</h2>
      {steps.map((step, index) => (
        <div key={index}>
          <h3>Step {index + 1}</h3>
          <p>{step}</p>
        </div>
      ))}
    </div>
  );
}

export default Tutorial;
