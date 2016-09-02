import React, { Component } from 'react';
import $ from 'jquery';

class Character extends Component {

  render() {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <img src={`${this.props.image}/portrait_incredible.jpg`} alt=""/>
      </div>
      );
    }
}

export default Character
