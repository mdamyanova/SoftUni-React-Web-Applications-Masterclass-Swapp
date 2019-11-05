import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Box, Text } from 'rebass';
import { Tiles } from '@rebass/layout';
import { PERSON_QUERY } from '../../queries/characterQueries';
import Loading from '../../components/common/Loading';
import Error from '../../components/common/Error';
import ThemedHeading from '../../components/common/forms/ThemedHeading';
import CharacterCard from '../../components/characters/CharacterCard';
import SmallImageCard from '../../components/common/cards/SmallImageCard';

const Character = () => {
  const { personId } = useParams();

  const { data, loading, error } = useQuery(PERSON_QUERY, {
    variables: { id: personId, first: 5 }
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error text={error.message} />;
  }

  const {
    person: { name, starships }
  } = data;

  return (
    <>
      <Box
        textAlign='center'
        m={4}
        mx={[3, 5, 6]}
        sx={{ gridGap: 4, width: 'auto' }}
      >
        <ThemedHeading style={{ fontSize: 6 }} text={name} />
        <hr style={{ border: '1px solid black' }} />
        <Tiles columns={[1, 2]} sx={{ gridGap: 5 }}>
          <CharacterCard character={data.person} />
          <Box>
            <Box>
              <Text
                css={`
                  color: var(--default-font-color);
                `}
                sx={{ fontSize: [5], fontWeight: 800 }}
              >
                Piloted Starships
              </Text>
              <hr
                style={{
                  border: '1px solid silver',
                  borderRadius: '5px',
                  width: '100%'
                }}
              />
            </Box>
            <Tiles columns={1} sx={{ gridGap: 4 }}>
              {starships.edges.map(starships => {
                return (
                  <SmallImageCard
                    key={starships.node.id}
                    to={`/starships/${starships.node.id}`}
                    body={starships.node}
                  />
                );
              })}
            </Tiles>
          </Box>
        </Tiles>
      </Box>
    </>
  );
};

export default Character;
