import React, { Component } from 'react';
import Search from './Search';



class Home extends Component {
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
        <Search/>
      </div>
    );
  }
}
export default Home;
