import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { ALL_EPISODES } from '../../queries/episodeQueries';

const EpisodesPage = () => {
  const { data, error, loading } = useQuery(ALL_EPISODES);

  console.log(error);
  
  return (
   <div>EpisodesPage</div>
  );
};

export default EpisodesPage;
