import React, { Component } from 'react';
import styles from './styles/CharacterPage.style.css';
import CharacterDetails from '../../components/character/CharacterDetails';

class CharacterPage extends Component {
  state = {
    character: this.props.location.state,
  };


  navigationHandler = card => {
    this.props.history.push(`/starships/${card.id}`, card);
  };

  render() {
    return (
      <CharacterDetails character={this.state.character} />
    );
  }
}

export default CharacterPage;
