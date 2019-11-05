import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'rebass';
import ThemedHeading from '../common/ThemedHeading';
import NormalText from '../common/NormalText';
import CardBlank from '../common/CardBlank';
import styled from '@emotion/styled';
import LinkTo from '../common/LinkTo';
import { FaAutoprefixer } from 'react-icons/fa';

const EpisodesList = ({ episode }) => {
    const StyledCardBlank = styled(CardBlank)`
        width: 300px;
    `;
    const StyledNormalText = styled(NormalText)`
        padding: 14px;
    `;
    return (
        <StyledCardBlank
            className="episodesList"
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
                                    lineHeight: '24px',
                                }}
                                text={episode.title}
                            />
                            <StyledNormalText
                                className="episodesCardText"
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
    episode: PropTypes.object.isRequired,
};

export default EpisodesList;