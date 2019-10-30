import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'rebass';
import ThemedHeading from '../common/ThemedHeading';
import NormalText from '../common/NormalText';
import CardBlank from '../common/CardBlank';

const EpisodesList = ({ episode }) => {
  return (
    <CardBlank
      className='episodesList'
      children={
        //TODO
        <a href='/episode/1'>
          <Image width={256} height={345} src={episode.src} />
          <ThemedHeading
            style={{
              fontSize: 4,
              padding: '8px',
              textAlign: 'left',
              height: '54px'
            }}
            text={episode.name}
          />
          <NormalText className='episodesCardText' text={episode.info} />
        </a>
      }
    ></CardBlank>
  );
};

EpisodesList.propTypes = {
  episode: PropTypes.object.isRequired
};

export default EpisodesList;
