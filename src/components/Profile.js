import React, { useContext } from 'react';
import { ProgressContext } from '../context/ProgressContext';

function Profile() {
  const { currentLevel, points, achievements } = useContext(ProgressContext);

  return (
    <div>
      <h1>Profile</h1>
      <p>Current Level: {currentLevel}</p>
      <p>Points: {points}</p>
      <h2>Achievements</h2>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
