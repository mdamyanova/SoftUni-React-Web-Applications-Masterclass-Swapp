import React from 'react';
import './styles/Button.style.css';

const Button = props => {
  return (
    <button
      className='button'
      type={props.type}
      onClick={props.onClick}
    >
      <span>{props.children}</span>
    </button>
  );
};

export default Button;
