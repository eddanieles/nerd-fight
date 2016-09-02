import React, { Component } from 'react';
import $ from 'jquery';
import characters from './data/characters.js';

class FilterCharacter extends Component {
  constructor(props){
    super(props);
    this.state = {
      characterArray: []
    }
  }
  handleClick(e){
    e.preventDefault();
    
  }
  render(){
    let characterArray = [];
    let superhero = characters.filter(character => character.id === this.props.id);
    console.log(superhero);
    return (
      <button onClick={this.handleClick.bind(this)}>Send to Battle</button>
    );
  }
}

export default FilterCharacter
