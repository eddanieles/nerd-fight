import React, { Component } from 'react';
import $ from 'jquery';
import characters from './data/characters.js';

class FilterCharacter extends Component {
  handleClick(e){
    e.preventDefault();
    let superhero = characters.filter(character => character.id === this.props.id);
    console.log(superhero[0]);
    this.props.characterArray.push(superhero[0]);
    console.log(this.props.characterArray);
  }
  render(){

    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Send to Battle</button>
      </div>
    );
  }
}

export default FilterCharacter
