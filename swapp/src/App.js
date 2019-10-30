import React, { Component } from 'react';
import Header from './components/common/Header';
import StartScreen from './screens/StartScreen';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <main className='content'>
          <StartScreen />
        </main>
      </div>
    );
  }
}
