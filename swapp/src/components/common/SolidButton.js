import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'rebass';

const SolidButton = ({ text, onClick, style }) => {
  return (
    <Button
      fontWeight='bold'
      onClick={onClick}
      css={`
        background-color: var(--button-background-color);
        color: var(--button-font-color);
      `}
      sx={{ ...style }}
    >
      {text}
    </Button>
  );
};

SolidButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  style: PropTypes.object
};

SolidButton.defaultProps = {
  style: {}
};
export default SolidButton;
