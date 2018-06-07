import React, { Component } from 'react';
import Landing from './components/landing'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          CHUCK NORRIS LIVES
        </header>
        <Landing />
      </div>
    );
  }
}

export default App;
