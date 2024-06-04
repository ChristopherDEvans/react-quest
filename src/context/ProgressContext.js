import React, { createContext, useState } from 'react';

const ProgressContext = createContext();

function ProgressProvider({ children }) {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [points, setPoints] = useState(0);
  const [achievements, setAchievements] = useState([]);

  const completeLevel = () => {
    setCurrentLevel(currentLevel + 1);
    addAchievement(`Level ${currentLevel} completed`);
  };

  const addPoints = (pointsToAdd) => {
    setPoints(points + pointsToAdd);
  };

  const addAchievement = (achievement) => {
    setAchievements([...achievements, achievement]);
  };

  return (
    <ProgressContext.Provider value={{ currentLevel, points, achievements, completeLevel, addPoints, addAchievement }}>
      {children}
    </ProgressContext.Provider>
  );
}

export { ProgressContext, ProgressProvider };
