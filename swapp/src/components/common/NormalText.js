import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'rebass';

const NormalText = ({ text, className, style }) => {
  return (
    <Text
      p={2}
      className={className}
      sx={{ ...style }}
      css={`
        color: var(--default-font-color);
      `}
    >
      {text}
    </Text>
  );
};

NormalText.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

NormalText.defaultProps = {
  className: '',
  style: {}
};

export default NormalText;
