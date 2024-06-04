
import React from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import styles from '../styles/Hints.module.css';

function Hints({ hints }) {
  return (
    <div className={styles.hintsContainer}>
      {Object.keys(hints).map((hintKey, index) => (
        <OverlayTrigger
          key={index}
          placement="right"
          overlay={<Tooltip id={`tooltip-${index}`}>{hints[hintKey]}</Tooltip>}
        >
          <span className={styles.hintItem}>{hintKey}</span>
        </OverlayTrigger>
      ))}
    </div>
  );
}

export default Hints;
