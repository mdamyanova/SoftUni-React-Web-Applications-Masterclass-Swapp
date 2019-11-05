import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'rebass';
import TwoInlineTexts from '../../components/common/forms/TwoInlineTexts';
import BigImageCard from '../../components/common/cards/BigImageCard';

const StarshipCard = ({ starship }) => {
  return (
    <BigImageCard
      name={starship.name}
      image={starship.image}
      children={
        <Box py={2}>
          <TwoInlineTexts
            firstText='Class:'
            secondText={starship.starshipClass}
          />
          <TwoInlineTexts firstText='Cost:' secondText={starship.cost} />
          <TwoInlineTexts firstText='Crew:' secondText={starship.crew} />
          <TwoInlineTexts
            firstText='Max Atmospheric Speed:'
            secondText={starship.maxAtmosphericSpeed}
          />
          <TwoInlineTexts
            firstText='Hyperdraive Rating:'
            secondText={starship.hyperdriveRating}
          />
        </Box>
      }
    />
  );
};

StarshipCard.propTypes = {
  starship: PropTypes.object.isRequired
};

StarshipCard.defaultProps = {};

export default StarshipCard;
