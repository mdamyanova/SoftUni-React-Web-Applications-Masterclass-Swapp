import React, { Component } from 'react';

import './App.css';
import observer from './infrastructure/observer';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Navigation from './components/common/Navigation';
import Notification from './components/common/Notification';
import Routes from './Routes';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: ''
    };

    observer.subscribe(observer.events.loginUser, this.userLoggedIn);
  }

  userLoggedIn = username => this.setState({ username });

  render() {
    return (
      <div className='container'>
        <Header
          username={this.state.username}
          userLoggedIn={this.userLoggedIn}
        />
        <main className='content'>
          <Notification />
          <Navigation />
          <Routes />
        </main>
        <Footer />
      </div>
    );
  }
}
