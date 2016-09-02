import React, { Component } from 'react';
import $ from 'jquery';

class Character extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: this.props.name,
      id: this.props.id,
      image: this.props.image
    }
  }

  render() {
    return (
      <div>
        <p>Name: {this.state.name}</p>
        <p>Character ID: {this.state.id}</p>
        <p><img src={`${this.state.image}/portrait_incredible.jpg`} alt=""/></p>
      </div>
      );
    }
}

export default Character
