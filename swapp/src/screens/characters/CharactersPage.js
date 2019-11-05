import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Box } from 'rebass';
import { Tiles } from '@rebass/layout';
import { ALL_PEOPLE_QUERY } from '../../queries/characterQueries';
import Loading from '../../components/common/Loading';
import Error from '../../components/common/Error';
import SolidButtons from '../../components/common/forms/SolidButton';
import SmallImageCard from '../../components/common/cards/SmallImageCard';

const CharactersPage = () => {
  const { data, loading, error, fetchMore } = useQuery(ALL_PEOPLE_QUERY, {
    variables: { first: 12 }
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error text={error.message} />;
  }

  const {
    allPeople: { edges, pageInfo }
  } = data;

  const loadMoreCharacters = () => {
    fetchMore({
      variables: { first: 12, after: pageInfo.endCursor },
      updateQuery: (prev, { fetchMoreResult: { allPeople } }) => {
        if (!allPeople.edges.length) return prev;
        return {
          allPeople: {
            ...allPeople,
            edges: [...prev.allPeople.edges, ...allPeople.edges]
          }
        };
      }
    });
  };

  return (
    <>
      <Tiles padding={4} columns={[1, 2, 3]}>
        {edges.map(character => {
          return (
            <SmallImageCard
              key={character.node.id}
              body={character.node}
              to={`/characters/${character.node.id}`}
            />
          );
        })}
      </Tiles>
      {pageInfo.hasNextPage && (
        <Box sx={{ textAlign: 'center' }}>
          <SolidButtons
            style={{}}
            onClick={loadMoreCharacters}
            text='Load More'
          />
        </Box>
      )}
    </>
  );
};

export default CharactersPage;
