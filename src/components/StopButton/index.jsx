import React from 'react';
import styles from './stopbutton.module.css';

const StopButton = ({ onClick }) => {
  return (
    <button className={styles.stopButton} onClick={onClick}>
      Stop
    </button>
  );
};

export default StopButton;