import React, { Component } from 'react';
import $ from 'jquery';
import characters from './data/characters.js';

class FilterCharacter extends Component {
  constructor(){
    super();
    this.state = {
      fighterName: "",
      readyToBattle: 'After choosing a character, click the "Send to Battle" Button'
    }
  }
  handleClick(e){
    e.preventDefault();
    let superhero = characters.filter(character => character.id === this.props.id);
    console.log(superhero[0]);
    this.props.characterArray.push(superhero[0]);
    console.log(this.props.characterArray);
    this.setState({
      fighterName: superhero[0].name,
      readyToBattle: " is ready to fight!"
    })
  }
  render(){

    return (
      <div>
        <button onClick={this.handleClick.bind(this)}>Send to Battle</button>
        <p>{this.state.fighterName}{this.state.readyToBattle}</p>
      </div>
    );
  }
}

export default FilterCharacter
