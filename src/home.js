import React, { Component } from 'react';


class Home extends Component {
  render(){
    return (
      <div className="Home">
        <header>
          <h1>Nerd Combat!</h1>
          <img src={`https://marvelheroes.com/sites/default/files/header-heroes.png`} alt="Marvel Characters"/>
        </header>
        <div className="Description">
          <h2>Nerd Combat is an all out brawl!</h2>
          <p>Are you ready to combat like a real villain?!</p>
          <p>Let's Get Started!</p>
        </div>
        <button type="text">START</button>
      </div>
    );
  }
}

export default Home;
