import React from 'react';
import { Box } from 'rebass';
import { useQuery } from '@apollo/react-hooks';
import EpisodesPage from './episodes/EpisodesPage';
import Routes from '../Routes';
import LoginPage from './login/LoginPage';
import { AUTHENTICATED_QUERY } from '../queries/userQueries';

const StartScreen = () => {
  const authQuery = useQuery(AUTHENTICATED_QUERY).data;
  return (
    <Box className='background'>
      {authQuery.authenticated ? <Routes /> : <LoginPage />}
    </Box>
  );
};

export default StartScreen;
