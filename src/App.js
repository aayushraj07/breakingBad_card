import React from "react";
import "./App.css";
import axios from "axios";
import SearchChar from "./SearchBox";
import SearchQuote from "./SearchQuote";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      searchField: ""
    };
  }

  getChars = () => {
    axios
      .get(
        `https://www.breakingbadapi.com/api/characters?name=${
          this.state.searchField
        }`
      )
      .then(response => {
        console.log(response);
      });
  };

  getQuotes = () => {
    axios
      .get(
        `https://www.breakingbadapi.com/api/quotes?author=${
          this.state.searchField
        }`
      )
      .then(response => {
        console.log("aa");
      });
  };

  getChar = search => {
    this.setState(
      {
        search
      },
      () => this.getChars()
    ); // console.log(this.state.keyword);
  };

  getQuote = search => {
    this.setState(
      {
        search
      },
      () => this.getQuotes()
    );
  };

  render() {
    return (
      <div className="container-fluid ">
        <div className="row">
          <form>
            <SearchChar onClickMethod={this.getSearch} />
            <SearchQuote onClickMethod={this.getQuote} />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
