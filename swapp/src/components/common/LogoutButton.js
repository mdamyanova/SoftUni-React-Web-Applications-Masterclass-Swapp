import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'rebass';
import { useApolloClient } from '@apollo/react-hooks';
import { IoIosLogOut } from 'react-icons/io';
import styled from '@emotion/styled';

const LogoutButton = ({ path }) => {
  const StyledLogoutIcon = styled(IoIosLogOut)`
    width: 24px;
    height: 22px;
    color: var(--app-bar-font-color);
  `;

  const StyledLink = styled(Link)`
        border: 1px solid var(--outline-button-border-color);
        border-radius: 5px;
        background-color: var(--outline-button-background-color)};
        padding-top: 10px;
    `;

  const client = useApolloClient();

  const handleClick = e => {
    localStorage.removeItem('user');
    client.writeData({ data: { authenicated: false } });
  };

  return (
    <StyledLink variant='nav' href={path} onClick={handleClick}>
      {<StyledLogoutIcon />}
    </StyledLink>
  );
};

LogoutButton.propTypes = {
  path: PropTypes.string.isRequired
};

LogoutButton.defaultProps = {};

export default LogoutButton;
