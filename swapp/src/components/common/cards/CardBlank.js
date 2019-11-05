import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'rebass';

const CardBlank = ({ className, children, style }) => {
  return (
    <Card
      sx={{
        ...style
      }}
      className={className}
      css={`
        background-color: var(--card-background-color);
        display: inline-block;
        margin: 50px;
        margin-left: 75px;
        border: 2px solid;
        border-radius: 5px;
        border-color: var(--card-border-color);
      `}
    >
      {children}
    </Card>
  );
};

CardBlank.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

CardBlank.defaultProps = {
  className: '',
  style: {},
  hover: false
};

export default CardBlank;
