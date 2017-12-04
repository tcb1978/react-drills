import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

    constructor() {
      super()
      this.state = {
        text: ''
      }
      this.add = this.add.bind(this)
    }

    add(val) {
      this.setState({
        text: val
      })
    }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <input onChange={(event) =>this.add(event.target.value)}/>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

export default App;