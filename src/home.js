import React, { Component } from 'react';
import Search from './Search';
import Searchtwo from './Searchtwo';



class Home extends Component {

  constructor(props){
    super(props);
    this.state = {
      characters: []
    };
  }

  render(){
    return (
      <div>
        <header>
          <h1 id="app-name">Nerd Combat!</h1>
          <img id="home-image" src={`https://marvelheroes.com/sites/default/files/header-heroes.png`} alt="Marvel Characters"/>
        </header>
        <div className="Description">
          <p id="description">Let's Get Started!</p>
        </div>
        <Search characters={this.state.characters}/>
        <Searchtwo characters={this.state.characters}/>
      </div>
    );
  }
}
export default Home;
