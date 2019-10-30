import React from 'react';
import PropTypes from 'prop-types';
import { Heading } from 'rebass';

const ThemedHeading = ({ text, style }) => {
  return (
    <Heading
      sx={style}
      fontWeight={900}
      css={`
        color: var(--primary-heading-font-color);
      `}
    >
      {text}
    </Heading>
  );
};

ThemedHeading.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object
};

ThemedHeading.defaultProps = {
  style: {}
};

export default ThemedHeading;
