import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      array: ['spaghetti ', 'ice cream ', 'sushi ', 'bologna ', 'cheese ']
    }
  }

  render() {
    return (
      <div className="App">
        <h1>
          <ul>
            <li>{this.state.array[0]}</li>
            <li>{this.state.array[1]}</li>
            <li>{this.state.array[2]}</li>
            <li>{this.state.array[3]}</li>
            <li>{this.state.array[4]}</li>
          </ul>
        </h1>
      </div>
    );
  }
}

export default App;
