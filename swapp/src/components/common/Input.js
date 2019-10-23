import React from 'react';
import PropTypes from 'prop-types';
import './styles/Input.style.css';

const Input = props => {
  return (
    <input
      className='input'
      type={props.type}
      placeholder={props.placeholder}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number', 'email', 'password']),
  placeholder: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
};

export default Input;