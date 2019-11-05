import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './screens/login/LoginPage';
import EpisodesPage from './screens/episodes/EpisodesPage';
import EpisodePage from './screens/episodes/EpisodePage';
import CharactersPage from './screens/characters/CharactersPage';
import CharacterPage from './screens/characters/CharacterPage';
import StarshipPage from './screens/starships/StarshipPage';

const Routes = () => (
  <Switch>
    <Route path='/login' component={LoginPage} />
    <Route exact path="/episodes" component={EpisodesPage} />
    <Route path="/episodes/:filmId" component={EpisodePage} />
    <Route exact path="/characters" component={CharactersPage} />
    <Route path="/characters/:personId" component={CharacterPage} />
    <Route path="/starships/:starshipId" component={StarshipPage} />
    <Route component={EpisodesPage} />
  </Switch>
);

export default Routes;
