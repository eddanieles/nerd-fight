import React, { Component } from 'react';

class SuperHeroInfo extends Component {
  render(){
    return (
      <div className="character_box">
        <h3> {this.props.name}</h3>
        <p><img src={`${this.props.image}/portrait_incredible.jpg`} alt=""/></p>
        <p>{this.props.description}</p>
        {/* <p>ID: {this.props.id}</p> */}
      </div>
    );
  }
}

export default SuperHeroInfo
