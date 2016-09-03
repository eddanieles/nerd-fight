import React, { Component } from 'react';
import $ from 'jquery';

class SuperHeroInfo extends Component {
  render(){
    return (
      <div className="character_box">
        <p>Name: {this.props.name}</p>
        <p><img src={`${this.props.image}/portrait_incredible.jpg`} alt=""/></p>
        <p>Description: {this.props.description}</p>
        {/* <p>ID: {this.props.id}</p> */}
      </div>
    );
  }
}

export default SuperHeroInfo
