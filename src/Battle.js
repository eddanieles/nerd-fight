import React, { Component } from 'react';
import BattleManager from './js/battlemanager.js';
import characters from './data/characters.js';
import messages from './data/messages.js';

class Battle extends Component {
  render() {
    return(
      <div>
        <h3>Click button below to start fight.</h3>
        <button>Fight!</button>
      </div>
    );
  }
}

export default Battle
