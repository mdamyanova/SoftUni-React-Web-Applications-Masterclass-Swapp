import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Text } from 'rebass';
import ThemedHeading from '../common/ThemedHeading';
import CardBlank from '../common/CardBlank';

const EpisodеCard = ({ episode }) => {
    return (
        <CardBlank
            className="themedCard"
            style={{ display: 'block', height: [154, 236] }}
            children={
                <>
                    <Image
                        width={[150, 232]}
                        height={[150, 232]}
                        src={episode.image}
                        sx={{ float: 'left' }}
                    />
                    <Card sx={{ textAlign: 'center' }}>
                        <ThemedHeading
                            style={{ fontSize: [3, 4], pt: [52, 88] }}
                            text={`Star Wars: Episode ` + episode.episodeId}
                        />
                        <Text
                            css={`
                            color: var(--default-font-color);`}
                            sx={{ fontSize: [2, 3], fontWeight: 800 }}
                        >
                            {episode.title}
                        </Text>
                    </Card>
                </>
            }
        ></CardBlank>
    );
};

EpisodеCard.propTypes = {
    episode: PropTypes.object,
};

EpisodеCard.defaultProps = {
    episode: {},
};

export default EpisodеCard;