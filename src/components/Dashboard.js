import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { DataContext } from '../context/DataContext';
import styles from '../styles/Dashboard.module.css';

function Dashboard() {
  const { isLoggedIn } = useContext(AuthContext);
  const { weather, news, events } = useContext(DataContext);

  if (!isLoggedIn) {
    return <p>Please log in to view the dashboard.</p>;
  }

  return (
    <div className={styles.dashboard}>
      <h1>City Dashboard</h1>
      <div className={styles.section}>
        <h2>Weather</h2>
        <div className={styles.sectionContent}>
          {weather ? <p>{weather.description}</p> : <p className={styles.loader}>Loading...</p>}
        </div>
      </div>
      <div className={styles.section}>
        <h2>News</h2>
        <div className={styles.sectionContent}>
          {news.length > 0 ? news.map((item, index) => <p key={index}>{item.title}</p>) : <p className={styles.loader}>Loading...</p>}
        </div>
      </div>
      <div className={styles.section}>
        <h2>Events</h2>
        <div className={styles.sectionContent}>
          {events.length > 0 ? events.map((item, index) => <p key={index}>{item.name}</p>) : <p className={styles.loader}>Loading...</p>}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
