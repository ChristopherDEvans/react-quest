import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Hints from './Hints';
import styles from '../styles/Weather.module.css';

const weatherHints = {
  DataFetching: 'The weather data is fetched from an external API when the component mounts.',
  DataDisplay: 'The temperature and description are displayed dynamically based on fetched data.'
};

function Weather() {
  const { weather } = useContext(DataContext);

  return (
    <div className={styles.weather}>
      <h1>Weather</h1>
      <Hints hints={weatherHints} />
      {weather ? (
        <div>
          <p>Temperature: {weather.temperature}°C</p>
          <p>Description: {weather.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Weather;
