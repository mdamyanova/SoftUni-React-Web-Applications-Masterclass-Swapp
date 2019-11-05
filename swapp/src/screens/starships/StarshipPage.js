import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import { Box, Text } from 'rebass';
import { Tiles } from '@rebass/layout';
import { STARSHIP_QUERY } from '../../queries/starshipQueries';
import Loading from '../../components/common/Loading';
import Error from '../../components/common/Error';
import ThemedHeading from '../../components/common/forms/ThemedHeading';
import StarshipCard from '../../components/starships/StarshipCard';


// TODO - Radar
const StarshipPage = () => {
  const { starshipId } = useParams();

  const { data, loading, error } = useQuery(STARSHIP_QUERY, {
    variables: { id: starshipId }
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error text={error.message} />;
  }

  const { starship } = data;

  return (
    <>
      <Box
        textAlign='center'
        m={4}
        mx={[3, 5, 6]}
        sx={{ gridGap: 4, width: 'auto' }}
      >
        <ThemedHeading style={{ fontSize: 6 }} text={starship.name} />
        <Text
          css={`
            color: var(--default-font-color);
          `}
          sx={{ fontSize: [5], fontWeight: 800 }}
        >
          ({starship.model})
        </Text>
        <hr style={{ border: '1px solid black' }} />
        <Tiles columns={[1, 2]} sx={{ gridGap: 5 }}>
          <StarshipCard starship={starship} />

          <Box>
            <Box mb={[4, 3, 5]}>
              <Text
                css={`
                  color: var(--default-font-color);
                `}
                sx={{ fontSize: [3], fontWeight: 800 }}
              >
                Compared to Starship Class Max
              </Text>
            </Box>
          </Box>
        </Tiles>
      </Box>
    </>
  );
};

export default StarshipPage;
