import React from 'react';
import { Input } from '@rebass/forms';

const InputField = props => {
  return (
    <Input
      name={props.name}
      id={props.name}
      type={props.type}
      placeholder={props.name}
      css={`
        background-color: var(--input-background-color);
        color: var(--input-font-color);
        border-color: var(--input-border-color);
        border-radius: 5px;
      `}
      onChange={props.onChange}
    />
  );
};

export default InputField;
