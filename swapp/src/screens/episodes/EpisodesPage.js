import React from 'react';
import { Redirect } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import { AUTHENTICATED_QUERY } from '../../queries/userQueries';

const EpisodesPage = () => {
  const authQuery = useQuery(AUTHENTICATED_QUERY).data;
  if (!authQuery.authenticated) {
      return <Redirect to='/login' />;
     } 
 
  return (
    <div>EpisodesPage</div>
  );
};

export default EpisodesPage;
