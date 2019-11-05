import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'rebass';
import styled from '@emotion/styled';
import ThemedHeading from '../common/forms/ThemedHeading';
import NormalText from '../common/forms/NormalText';
import LinkTo from '../common/navigation/LinkTo';
import CardBlank from '../common/cards/CardBlank';

const EpisodesList = ({ episode }) => {
  const StyledCardBlank = styled(CardBlank)`
    width: 300px;
  `;
  const StyledNormalText = styled(NormalText)`
    padding: 14px;
  `;
  return (
    <StyledCardBlank
      className='episodesList'
      children={
        <LinkTo
          to={`/episodes/${episode.id}`}
          children={
            <>
              <Image src={episode.image} />
              <ThemedHeading
                style={{
                  fontSize: 5,
                  padding: '16px',
                  textAlign: 'left',
                  height: '54px',
                  marginTop: '10px',
                  marginBottom: '10px',
                  lineHeight: '24px'
                }}
                text={episode.title}
              />
              <StyledNormalText
                className='episodesCardText'
                text={episode.openingCrawl}
              />
            </>
          }
        />
      }
    ></StyledCardBlank>
  );
};

EpisodesList.propTypes = {
  episode: PropTypes.object.isRequired
};

export default EpisodesList;
