import React from 'react';
import { Image } from 'rebass';
import CardBlank from './CardBlank';
import ThemedHeading from './ThemedHeading';
import LintTo from './LinkTo';
import PropTypes from 'prop-types';

const SmallImageCard = ({ body, to }) => {
    return (
        <CardBlank
            style={{ height: '132px' }}
            hover
            children={
                <LintTo
                    to={to}
                    children={
                        <>
                            <Image
                                alt={body.name}
                                src={body.image}
                                sx={{ float: 'left', maxHeight: '100%' }}
                            />
                            <ThemedHeading
                                style={{
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                    whiteSpace: 'nowrap',
                                    fontSize: [3, 2, 3],
                                    lineHeight: '115px',
                                    textAlign: 'center',
                                }}
                                text={body.name}
                            />
                        </>
                    }
                />
            }
        />
    );
};
SmallImageCard.propTypes = {
    body: PropTypes.object.isRequired,
    to: PropTypes.string.isRequired,
};
SmallImageCard.defaultProps = {};
export default SmallImageCard;