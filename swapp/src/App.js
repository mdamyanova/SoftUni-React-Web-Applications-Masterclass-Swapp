import React, { Component } from 'react';

import './App.css';
import observer from './infrastructure/observer';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Routes from './Routes';
import LoginForm from './components/common/LoginForm';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      theme: 'light'
    };
    this.toggleTheme = this.toggleTheme.bind(this);
    observer.subscribe(observer.events.loginUser, this.userLoggedIn);
  }

  toggleTheme() {
    const theme = this.state.theme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.add('color-theme-in-transition');
    this.setState({ theme });
    document.documentElement.setAttribute('data-theme', theme);
    window.setTimeout(() => {
      document.documentElement.classList.remove('color-theme-in-transition');
    }, 1000);
  }

  userLoggedIn = username => this.setState({ username });

  render() {
    return (
      <div className='container'>
        <Header
          toggleTheme={this.toggleTheme}
          username={this.state.username}
          userLoggedIn={this.userLoggedIn}
        />
        <main className='content'>
          <LoginForm />
          <Routes />
        </main>
      </div>
    );
  }
}
