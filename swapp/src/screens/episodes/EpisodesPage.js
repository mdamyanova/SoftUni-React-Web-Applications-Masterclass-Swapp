import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Tiles } from '@rebass/layout';
import { ALL_EPISODES_QUERY } from '../../queries/episodeQueries';
import Loading from '../../components/common/Loading';
import Error from '../../components/common/Error';
import EpisodesList from '../../components/episodes/EpisodesList';

const EpisodesPage = () => {
  const { data, loading, error } = useQuery(ALL_EPISODES_QUERY, {
    variables: { first: 99 }
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error text={error.message} />;
  }

  const {
    allEpisodes: { edges }
  } = data;

  return (
    <>
      <Tiles m={0} columns={[1, 2, 3]}>
        {edges
          .sort((a, b) => a.node.episodeId - b.node.episodeId)
          .map(episode => {
            return (
              <EpisodesList key={episode.node.id} episode={episode.node} />
            );
          })}
      </Tiles>
    </>
  );
};

export default EpisodesPage;
