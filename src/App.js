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
          <Search characterArray={this.state.characterArray}/>
        </div>

        <Battle />
      </div>
    );
  }
}

export default App;
