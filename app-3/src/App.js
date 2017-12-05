import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      array: ['spaghetti ', 'ice cream ', 'sushi ', 'bologna ', 'cheese '],
      text: '',
    }
    this.add = this.add.bind(this)
  }

  add(val) {
    
    this.setState({
      text: val
    })
  }

  render() {

    //filter through array and THEN populate the input
    //.startsWith

    let foods = this.state.array.filter(word => word.includes(this.state.text)).map((element, index) => {
      return (
        <h1 key={index}>{element}</h1>
      )
    })

    return (
      <div className="App">
        <input onChange={(event) => this.add(event.target.value)} />
        {foods}
      </div>
    );
  }
}

export default App;
