import React, { Component } from 'react';
import $ from 'jquery';

class SuperHeroInfo extends Component {
  render(){
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Description: {this.props.description}</p>
        <p><img src={`${this.props.image}/portrait_incredible.jpg`} alt=""/></p>
      </div>
    );
  }
}

export default SuperHeroInfo
