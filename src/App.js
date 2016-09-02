import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Character from './Character';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Search/>
        <Character/>
      </div>
    );
  }
}

export default App;
