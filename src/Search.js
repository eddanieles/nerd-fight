import React, { Component } from 'react';
import $ from 'jquery';
import SuperHeroInfo from './SuperHeroInfo.js';
import BattleManager from './js/battlemanager.js';
import characters from './data/characters.js';
import messages from './data/messages.js';
import FilterCharacter from './FilterCharacter.js'

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      id:"",
      image: "",
      description: ""
    }
  }
  handleSubmit(e){
    // console.log(this.refs.superhero1.value);
    e.preventDefault();
    $.ajax({
        url: `http://gateway.marvel.com:80/v1/public/characters?name=${this.refs.superhero1.value}&apikey=2e264257579ec772309983d87144e044`,
        type: 'GET',
        success: function(response) {
          // console.log(response);
          this.setState({
            name: response.data.results[0].name,
            id: response.data.results[0].id,
            image: response.data.results[0].thumbnail.path,
            description: response.data.results[0].description
          });
        }.bind(this)
    })
  }
  render() {
    // BattleManager.addMessages(messages);
    // console.log(BattleManager.statBattle(characters[0], characters[1], 2));
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="1st Superhero">Search for Superhero!</label>
          <input type="text" name="superhero1" placeholder="1st Superhero" ref='superhero1'/>
          <br />
          <button>Search</button>
        </form>

        <SuperHeroInfo name={this.state.name} image={this.state.image} description={this.state.description} id={this.state.id}/>
        <FilterCharacter id={this.state.id} characterArray={this.props.characterArray}/>
      </div>
    )
  }
}

export default Search
