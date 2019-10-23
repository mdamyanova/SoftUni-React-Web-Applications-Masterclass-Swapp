import React from 'react';
import styles from './styles/Button.style.css';

const Button = props => {
  return (
    <button
      className={styles.Button}
      type={props.type}
      onClick={props.onClick}
    >
      <span>{props.children}</span>
    </button>
  );
};

export default Button;
