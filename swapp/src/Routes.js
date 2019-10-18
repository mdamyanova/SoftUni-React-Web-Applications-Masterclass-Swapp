import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from './components/user/LoginPage';
import Logout from './components/user/Logout';
import EpisodesPage from './components/episodes/EpisodesPage';
import EpisodePage from './components/episodes/EpisodePage';
import CharactersPage from './components/characters/CharactersPage';
import CharacterPage from './components/characters/CharacterPage';
import StarshipPage from './components/starships/StarshipPage';


const Routes = () => (
  <Switch>
    <Route path='/login' component={LoginPage} />
    <Route path="/logout" component={Logout} />
    <Route path="/episodes" component={EpisodesPage} />
    <Route path="/episodes/:episodeId" component={EpisodePage} />
    <Route path="/characters" component={CharactersPage} />
    <Route path="/characters/:characterId" component={CharacterPage} />
    <Route path="/starships/:starshipId" component={StarshipPage} />
    <Route component={EpisodesPage} />
  </Switch>
);

export default Routes;
