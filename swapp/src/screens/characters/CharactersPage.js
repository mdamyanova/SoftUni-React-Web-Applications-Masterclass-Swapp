import React, { Component, Fragment } from 'react';
import CharactersList from '../../components/characters/CharactersList';
import Character from '../../components/characters/Character';

class Characters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters: []
    };
  }

  async componentDidMount() {
    try {
      // GET Characters
     
    } catch (e) {
      this.setState({ characters: [] });
    }
  }

  navigationHandler = card => {
    this.props.history.push(`/characters/${card.id}`, card);
  };

  render() {
    return (
      <Fragment>
        <div>Characters Page</div>
        <CharactersList
          characters={this.state.characters}
          component={Character}
          cardNavigation={this.navigationHandler}
        />
      </Fragment>
    );
  }
}

export default Characters;
