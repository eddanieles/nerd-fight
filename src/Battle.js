import React, { Component } from 'react';
import BattleManager from './js/battlemanager.js';
import characters from './data/characters.js';
import messages from './data/messages.js';

class Battle extends Component {
  constructor(){
    super();
    this.state = {
      winner: "",
      loser: "",
      fightMessages: []
    }
  }
  handleClick(e){
    e.preventDefault();
    console.log(this.props.characterArray);
    BattleManager.addMessages(messages);
    let battleData = BattleManager.statBattle(this.props.characterArray[0], this.props.characterArray[1], 1).data[0];
    console.log(battleData);
    if (battleData.winner === "draw") {
      this.setState({
        winner: "draw",
        loser: "draw"
      })
    } else {
      this.setState({
        winner: battleData.winner.name,
        loser: battleData.loser.name
      })
    };
    let fightMessages = battleData.fightData.map((message) => message.message);
    console.log(fightMessages);
    this.setState({
      fightMessages: battleData.fightData.map((message) => <li>{message.message}</li>)
    });
  }
  render() {
    return(
      <div>
        <h3>Click button below to start fight.</h3>
        <button onClick={this.handleClick.bind(this)}>Fight!</button>
        <p>Winner is: {this.state.winner}</p>
        <p>Loser is: {this.state.loser}</p>
        <ul>
          {this.state.fightMessages}
        </ul>
      </div>
    );
  }
}

export default Battle
