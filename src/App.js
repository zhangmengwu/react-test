import React, { Component } from 'react';
import logo from './logo.svg';
import first from "./1.png"
import './App.css';
import './common.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>hello React!</h1>
          <p>哈哈哈哈或或或</p>
            <img id="banner" className="show border" src={first} alt=""/>
        </header>
      </div>
    );
  }
}

export default App;
