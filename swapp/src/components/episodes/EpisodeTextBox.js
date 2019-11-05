import React from 'react';
import PropTypes from 'prop-types';
import NormalText from '../common/NormalText';
import CardBlank from '../common/CardBlank';

import TwoInlineTexts from '../common/TwoInlineTexts';

const EpisodеTextBox = ({ episode }) => {
    return (
        <CardBlank
            children={
                <>
                    <NormalText
                        style={{ textAlign: 'left' }}
                        text={episode.openingCrawl}
                    />
                    <TwoInlineTexts
                        firstText="Director:"
                        secondText={episode.director}
                    />
                    <TwoInlineTexts
                        firstText="Release Date:"
                        secondText={episode.releaseDate}
                    />
                </>
            }
        />
    );
};
EpisodеTextBox.propTypes = {
    body: PropTypes.object,
};
EpisodеTextBox.defaultProps = {
    body: {},
};
export default EpisodеTextBox;