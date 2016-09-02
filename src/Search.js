import React, { Component } from 'react';
import Character from './Character';
import $ from 'jquery';
import BattleManager from './js/battlemanager.js';
import characters from './data/characters.js';
import messages from './data/messages.js';

console.log(characters);
BattleManager.addMessages(messages);
console.log( "statBattle() ", BattleManager.statBattle(characters[0], characters[1], 100));


class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      userInput: ''
    }
  }

  handleChange(event) {
    this.setState({userInput: event.target.value});
  }

  getServerData() {
    $.get(`http://gateway.marvel.com/v1/public/characters?name=${this.state.userInput}&apikey=2e264257579ec772309983d87144e044`, function (response) {
      console.log(response);
      this.setState({
        name: response.data.results[0].name,
        id: response.data.results[0].id,
        image: response.data.results[0].thumbnail.path
      });
    }.bind(this));
  }

  getCharacterId(userSearch) {
    return characters.filter(character => character.name.includes(userSearch))[0];
  }

  handleSubmit(event){
    event.preventDefault();
    this.getServerData();
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="character" placeholder="input character ID..." onChange={this.handleChange.bind(this)}/>
          <button>Search</button>
        </form>
        <Character
          name={this.state.name}
          id={this.state.id}
          image={this.state.image}/>
      </div>
    )
  }
}

export default Search
