import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'rebass';

const LinkTo = ({ to, children }) => {
  return (
    <Link as={RouterLink} variant='nav' to={to}>
      {children}
    </Link>
  );
};

LinkTo.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired
};

export default LinkTo;
