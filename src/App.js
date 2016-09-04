import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Battle from './Battle';

class App extends Component {
  constructor(){
    super();
    this.state = {
      characterArray: []
    };
  }
  render() {
    return (
      <div>
        <div className="App">
          <Search characterArray={this.state.characterArray}/>
          <h1>Vs</h1>
          <Search characterArray={this.state.characterArray}/>
        </div>

        <Battle characterArray={this.state.characterArray}/>
      </div>
    );
  }
}

export default App;
