import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Box, Text } from 'rebass';
import ThemedHeading from './ThemedHeading';

const TwoInlineTexts = ({ firstText, secondText, align }) => {
  const textStyle = { display: 'inline-block', fontSize: 1 };

  return (
    <Box sx={{ textAlign: align }}>
      <Text
        css={`
          color: var(--default-font-color);
        `}
        px={2}
        {...textStyle}
      >
        {firstText}
      </Text>
      <ThemedHeading style={{ ...textStyle }} text={secondText} />
    </Box>
  );
};

TwoInlineTexts.propTypes = {
  firstText: PropTypes.string.isRequired,
  secondText: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  align: PropTypes.string
};

TwoInlineTexts.defaultProps = {
  align: 'left'
};

export default TwoInlineTexts;
