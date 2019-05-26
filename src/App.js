import React from "react";
import "./App.css";
import axios from "axios";

class App extends React.Component{
  constructor(){
    super();
      this.state={
        characters : [],
        searchField : ''
      }
    }
    //
    // getUsers = async function() {
    //     const resp = await fetch('https://www.breakingbadapi.com/api/characters')
    //     const users = await resp.json()
    //     this.setState({characters:users})
    // }

    getChar = () =>{
      axios.get(`https://www.breakingbadapi.com/api/characters?name=${this.state.searchField}`)
           .then(response => {
             console.log(response);
           });
    };

    getSearch = search =>{
      this.setState({search},() => this.getChar());
    };



  render(){
    return(
    <div className="container-fluid">
      <div class="row">
      <form id="" >
        <button id='getChar' className="btn btn-primary mr-4">Show Characters </button>
        <input type="submit" className="btn btn-secondary" value="Submit"/>
      </form>
      // </div>
    </div>
  )
  }

}


export default App;
