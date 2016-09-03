import React, { Component } from 'react';
import $ from 'jquery';
import Character from './Character';


class Search extends Component {
 constructor(props){
   super(props);
   this.state = {
     name: "",
     id:"",
     image: "",
     description: ""
   }
 }
 handleSubmit(e){
   console.log(this.refs.superhero1.value);
   e.preventDefault();
   $.ajax({
       url: `http://gateway.marvel.com:80/v1/public/characters?name=${this.refs.superhero1.value}&apikey=2e264257579ec772309983d87144e044`,
       type: 'GET',
       success: function(response) {
         console.log(response);
         this.setState({
           name: response.data.results[0].name,
           id: response.data.results[0].id,
           image: response.data.results[0].thumbnail.path,
           description: response.data.results[0].description
         });
       }.bind(this)
   })
 }
 render() {
   return (
     <div>
       <form onSubmit={this.handleSubmit.bind(this)}>
         <label htmlFor="1st Superhero">Search for Superhero!</label>
         <input type="text" name="superhero1" placeholder="1st Superhero" ref='superhero1'/>
         <br />
         <button>Search</button>
       </form>

       <Character name={this.state.name} image={this.state.image} description={this.state.description} />
     </div>
   )
 }
}

export default Search
