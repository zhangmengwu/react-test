import React, { Component } from 'react';
import logo from './logo.svg';
import first from "./1.png"
import './App.css';
import './common.css';
import Test from "./components/test/test"
import MyTest from "./components/myTest"
import Children from "./components/props.children/parent"
import Child from "./components/props.children/dad"
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Child/>
          <img src={logo} className="App-logo" alt="logo" />
          <Children/>
          <Test/>
          <MyTest num={10} obj={{a:1,b:2}}/>
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
