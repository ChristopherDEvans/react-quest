import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import styles from '../styles/Events.module.css';
import Hints from './Hints';

const eventsHints = {
  DataFetching: 'The events data is fetched from an external API when the component mounts.',
  DataDisplay: 'Each event is displayed with a name and date.',
  EventItem: 'Hover over the event item to see more details.'
};

function Events() {
  const { events } = useContext(DataContext);

  return (
    <div className={styles.events}>
      <h1>Events</h1>
      <Hints hints={eventsHints} />
      {events.length > 0 ? (
        events.map((item, index) => (
          <div key={index} className={styles.eventItem}>
            <h2>{item.name}</h2>
            <p>{item.date}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Events;
