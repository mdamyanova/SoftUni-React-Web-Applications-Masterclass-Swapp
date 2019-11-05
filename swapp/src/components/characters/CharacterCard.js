import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import TwoInlineTexts from '../common/forms/TwoInlineTexts';
import BigImageCard from '../common/cards/BigImageCard';

const CharacterCard = ({ character }) => {
  return (
    <BigImageCard
      name={character.name}
      image={character.image}
      children={
        <Box py={2}>
          <TwoInlineTexts firstText='Height:' secondText={character.height} />
          <TwoInlineTexts firstText='Width:' secondText={character.mass} />
          <TwoInlineTexts
            firstText='Spеcies:'
            secondText={character.species.name}
          />
          <TwoInlineTexts
            firstText='Home World:'
            secondText={character.homeworld.name}
          />
        </Box>
      }
    />
  );
};

CharacterCard.propTypes = {
  character: PropTypes.object
};

CharacterCard.defaultProps = {
  character: {}
};

export default CharacterCard;
