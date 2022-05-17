import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ onIncrement }) => {
  const buttonOptions = ['good', 'neutral', 'bad'];

  return (
    <ul className={styles.list}>
      {buttonOptions.map((key, index) => (
        <li key={index} className={styles.item}>
          <button className={styles.button} value={key} onClick={onIncrement}>
            {key}
          </button>
        </li>
      ))}
    </ul>
  );
};

Controls.propType = {
  onIncrement: PropTypes.func.isRequired,
};

export default Controls;
