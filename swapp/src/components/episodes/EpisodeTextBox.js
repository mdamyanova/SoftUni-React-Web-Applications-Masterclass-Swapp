import React from 'react';
import PropTypes from 'prop-types';
import NormalText from '../common/forms/NormalText';
import TwoInlineTexts from '../common/forms/TwoInlineTexts';
import CardBlank from '../common/cards/CardBlank';

const EpisodеTextBox = ({ episode }) => {
  return (
    <CardBlank
      className='themedCard'
      children={
        <>
          <NormalText
            style={{ textAlign: 'left' }}
            text={episode.openingCrawl}
          />
          <TwoInlineTexts firstText='Director:' secondText={episode.director} />
          <TwoInlineTexts
            firstText='Release Date:'
            secondText={episode.releaseDate}
          />
        </>
      }
    />
  );
};

EpisodеTextBox.propTypes = {
  body: PropTypes.object
};

EpisodеTextBox.defaultProps = {
  body: {}
};

export default EpisodеTextBox;
