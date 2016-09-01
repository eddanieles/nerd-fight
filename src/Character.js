import React, { Component } from 'react';
import $ from 'jquery';

class Character extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      id:"",
      image: ""
    }
  }
  componentDidMount() {
    this.serverRequest = $.get("http://gateway.marvel.com:80/v1/public/characters/1011334?apikey=2e264257579ec772309983d87144e044", function (response) {
      console.log(response);
      this.setState({
        name: response.data.results[0].name,
        id: response.data.results[0].id,
        image: response.data.results[0].thumbnail.path
      });
    }.bind(this));
  }
  componentWillUnmount() {
    this.serverRequest.abort();
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
