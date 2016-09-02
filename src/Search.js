import React, { Component } from 'react';
import $ from 'jquery';
<<<<<<< HEAD
import BattleManager from './js/battlemanager.js';
import characters from './data/characters.js';
import messages from './data/messages.js';

console.log(characters);
BattleManager.addMessages(messages);
console.log( "statBattle() ", BattleManager.statBattle(characters[0], characters[1], 100));

=======
import SuperHeroInfo from './SuperHeroInfo.js';
>>>>>>> lake

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
<<<<<<< HEAD
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
=======
      name: "",
      id:"",
      image: "",
      description: ""
    }
  }
  handleSubmit(e){
    console.log(this.refs.superhero1.value);
    e.preventDefault();
    $.ajax({
        url: `http://gateway.marvel.com:80/v1/public/characters?name=${this.refs.superhero1.value}&apikey=2e264257579ec772309983d87144e044`,
        type: 'GET',
        success: function(response) {
          console.log(response);
          this.setState({
            name: response.data.results[0].name,
            id: response.data.results[0].id,
            image: response.data.results[0].thumbnail.path,
            description: response.data.results[0].description
          });
        }.bind(this)
    })
>>>>>>> lake
  }

  handleSubmit(event){
    event.preventDefault();
    this.getServerData();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
<<<<<<< HEAD
          <input type="text" name="character" placeholder="input character ID..." onChange={this.handleChange.bind(this)}/>
          <button>Search</button>
        </form>
        <Character
          name={this.state.name}
          id={this.state.id}
          image={this.state.image}/>
=======
          <label htmlFor="1st Superhero">Search for Superhero!</label>
          <input type="text" name="superhero1" placeholder="1st Superhero" ref='superhero1'/>
          <br />
          <button>Search</button>
        </form>

        <SuperHeroInfo name={this.state.name} image={this.state.image} description={this.state.description} />
>>>>>>> lake
      </div>
    )
  }
}

export default Search
