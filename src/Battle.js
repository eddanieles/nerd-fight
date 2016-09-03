import React, { Component } from 'react';
import BattleManager from './js/battlemanager.js';
import characters from './data/characters.js';
import messages from './data/messages.js';

class Battle extends Component {

  handleClick(e){
    e.preventDefault();
    console.log(this.props.characterArray);
    BattleManager.addMessages(messages);
    let fightData = BattleManager.statBattle(this.props.characterArray[0], this.props.characterArray[1], 1).data[0];
    console.log(fightData);
  }
  render() {
    return(
      <div>
        <h3>Click button below to start fight.</h3>
        <button onClick={this.handleClick.bind(this)}>Fight!</button>
      </div>
    );
  }
}

export default Battle
