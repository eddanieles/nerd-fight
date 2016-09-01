import React, { Component } from 'react';
import Character from './Character';
import $ from 'jquery';

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      character: ''
    }
  }
  handleCharacter(e) {
    this.setState({character: e.target.value});
  }
  render() {
    return(
      <div>
        <form onSubmit={this.makeServerRequest.bind(this)}>
          <input type="text" name="character" placeholder="input character ID..." onChange={this.handleCharacter.bind(this)}/>
          <button>Search</button>
        </form>
      </div>
    )
  }
  makeServerRequest(e){
    // <Character id={this.state.character}/>
    console.log("Character ID: " + this.state.character);
    event.preventDefault();
  }
}

export default Search
