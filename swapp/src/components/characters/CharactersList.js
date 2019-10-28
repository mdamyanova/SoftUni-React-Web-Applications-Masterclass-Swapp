import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles/CharactersList.style.css';

class CharactersList extends Component {
  renderCharacters(characters, Character, cardNavigation) {
    return characters.map(character => {
      return (
        <Character
          key={character.id}
          character={character}
          navigate={cardNavigation}
        />
      );
    });
  }
  render() {
    const {
      characters,
      component: Character,
      cardNavigation,
      direction
    } = this.props;

    return (
      <div className={styles.CardList} style={{ flexDirection: direction }}>
        {this.renderCharacters(characters, Character, cardNavigation)}
      </div>
    );
  }
}

CharactersList.propTypes = {
  characters: PropTypes.array,
  direction: PropTypes.oneOf(['column', 'row'])
};

CharactersList.defaultProps = {
  direction: 'row'
};

export default CharactersList;
