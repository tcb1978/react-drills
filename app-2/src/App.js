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

  // render() {
  //   return (
  //     <div className="App">
  //       <h1>
  //         <ul>
  //           <li>{this.state.array[0]}</li>
  //           <li>{this.state.array[1]}</li>
  //           <li>{this.state.array[2]}</li>
  //           <li>{this.state.array[3]}</li>
  //           <li>{this.state.array[4]}</li>
  //         </ul>
  //       </h1>
  //     </div>
  //   );
  // }


  render() {
    let foods = this.state.array.map((element, index) => {
      return (
        <h1 key={index}>{element}</h1>
      )
    })

    return (
      <div className="App">
        {foods}
      </div>
    );
  }
}


export default App;
