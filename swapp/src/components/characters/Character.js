import React from 'react';
import styles from './styles/Character.style.css';

const Character = props => {
  return (
    <div
      className='character'
      onClick={() => props.navigate(props.character)}
    >
      <img className='image' src={props.character.image} alt={props.character.name} />
      <div>
        <p className='text'>{props.character.name}</p>
      </div>
    </div>
  );
};

export default Character;