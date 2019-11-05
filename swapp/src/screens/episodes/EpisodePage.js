import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Box } from 'rebass';
import { Tiles } from '@rebass/layout';
import { EPISODE_QUERY } from '../../queries/episodeQueries';
import Loading from '../../components/common/Loading';
import Error from '../../components/common/Error';
import SolidButtons from '../../components/common/forms/SolidButton';
import EpisodeCard from '../../components/episodes/EpisodeCard';
import EpisodeTextBox from '../../components/episodes/EpisodeTextBox';
import SmallImageCard from '../../components/common/cards/SmallImageCard';

const EpisodеPage = () => {
  const { filmId } = useParams();

  const { data, loading, error, fetchMore } = useQuery(EPISODE_QUERY, {
    variables: { id: filmId, first: 5 }
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error text={error.message} />;
  }

  const { episode } = data;

  const loadMoreCharacters = () => {
    fetchMore({
      variables: {
        id: filmId,
        first: 5,
        after: episode.people.pageInfo.endCursor
      },
      updateQuery: (
        prev,
        {
          fetchMoreResult: {
            episode: { people }
          }
        }
      ) => {
        if (!people.edges.length) return prev;
        return {
          episode: {
            ...prev.episode,
            people: {
              ...people,
              edges: [...prev.episode.people.edges, ...people.edges]
            }
          }
        };
      }
    });
  };

  return (
    <>
      <Box textAlign='center'>
        <Tiles m={4} mx={(2, 4, 6)} sx={{ gridGap: 4, width: 'auto' }}>
          <EpisodeCard episode={episode} />
          <EpisodeTextBox episode={episode} />
          <Tiles columns={[1, 2, 3]}>
            {episode.people.edges.map(character => {
              return (
                <SmallImageCard
                  key={character.node.id}
                  to={`/characters/${character.node.id}`}
                  body={character.node}
                />
              );
            })}
          </Tiles>
        </Tiles>
        {episode.people.pageInfo.hasNextPage && (
          <SolidButtons onClick={loadMoreCharacters} text='Load More' />
        )}
      </Box>
    </>
  );
};

export default EpisodеPage;
