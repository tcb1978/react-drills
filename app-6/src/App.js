import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

class App extends Component {
  constructor () {
    super()
    this.state = {
      toDos: [],
      value: ''
    }
  }

  handleToDo(val) {
    this.setState({
      value: val
    })
  }

  addToDo(val){
    let arr = this.state.toDos.slice()
    arr.push(val)
    this.setState({
      toDos : arr,
      value: ''
    })
  }

  render() {
    return (
      <div className="App">
        Enter New Task <input onChange={(event) => this.handleToDo(event.target.value)} value={this.state.value} />
        <button onClick={() => this.addToDo(this.state.value)}>Add</button>
        <Todo toDos={ this.state.toDos} />
      </div>
    )
  }
}

export default App;
