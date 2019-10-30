import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'rebass';

const SwappLogo = ({ small }) => {
  const [theme, setTheme] = useState('light');
  const onLogoClick = () => {
    toggleTheme();
  };

  const toggleTheme = () => {
    const changeTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.add('color-theme-in-transition');
    setTheme(changeTheme);
    document.documentElement.setAttribute('data-theme', theme);
    window.setTimeout(() => {
      document.documentElement.classList.remove('color-theme-in-transition');
    }, 1000);
  };

  return (
    <Text
      onClick={onLogoClick}
      css={`
        color: var(--logo-font-color);
      `}
      fontFamily='DistantGalaxy'
      fontSize={small ? 25 : [50, 100]}
      textAlign={small ? 'left' : 'center'}
      width={small ? 'auto' : '100%'}
      style={{ cursor: 'pointer' }}
    >
      {' '}
      SWAPP{' '}
    </Text>
  );
};

SwappLogo.propTypes = {
  small: PropTypes.bool
};

SwappLogo.defaultProps = {
  small: true
};

export default SwappLogo;
