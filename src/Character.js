import React, { Component } from 'react';

class Character extends Component {
 render(){
   return (
     <div>
       <p>Name: {this.props.name}</p>
       <p><img src={`${this.props.image}/portrait_incredible.jpg`} alt=""/></p>
       <p>Description: {this.props.description}</p>
       <p>{this.props.hero}: {this.props.attributeNumber}</p>
     </div>
   );
 }
}

export default Character
