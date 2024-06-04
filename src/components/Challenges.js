import React from 'react';
import Challenge from './Challenge';

const challenges = [
  {
    id: 1,
    task: "Create a component that displays 'Hello, World!'",
    solution: "<div>Hello, World!</div>"
  },
  {
    id: 2,
    task: "Create a button component that increments a counter",
    solution: "const [count, setCount] = useState(0); return <button onClick={() => setCount(count + 1)}>Click me</button>;"
  },
  // Add more challenges as needed
];

function Challenges() {
  return (
    <div>
      <h1>Challenges</h1>
      {challenges.map((challenge) => (
        <Challenge key={challenge.id} task={challenge.task} solution={challenge.solution} />
      ))}
    </div>
  );
}

export default Challenges;
