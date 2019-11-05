import React from 'react';
import { Text } from 'rebass';
import PropTypes from 'prop-types';

const Error = ({ text }) => {
  return (
    <>
      <Text color='red'>{text}</Text>
    </>
  );
};

Error.propTypes = {
  text: PropTypes.string
};

Error.defaultProps = {
  text: ''
};

export default Error;
