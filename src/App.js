import React, { Component } from 'react';
import InputTest from './InputTest';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputTest />
        <hr />
        <InputTest />
      </div>
    );
  }
}

export default App;
