import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Box } from 'rebass';
import { AUTHENTICATED_QUERY } from '../queries/userQueries';
import Routes from '../Routes';
import LoginPage from './login/LoginPage';

const StartScreen = () => {
  const authQuery = useQuery(AUTHENTICATED_QUERY).data;

  return (
    <Box className='background'>
      {authQuery.authenticated ? <Routes /> : <LoginPage />}
    </Box>
  );
};

export default StartScreen;
