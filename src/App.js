import React from "react";
import "./App.css";
import axios from "axios";
import SearchChar from "./SearchBox";
// import SearchQuote from "./SearchQuote";
import Result from "./result";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      searchField: ""
    };
  }

  getChar = () => {
    axios
      .get(
        `https://www.breakingbadapi.com/api/characters?name=${
          this.state.searchField
        }`
      )
      .then(response => {
        const characters = response.data;
        console.log(response.data);
        this.setState({
          characters
        });
        console.log(this.state.searchField);
        console.log(response);
      });
  };

  componentDidMount() {
    axios
      .get(`https://www.breakingbadapi.com/api/characters`)
      .then(response => {
        this.setState({ characters: response });
        console.log(response);
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row col-md-12 ">
          <h1 align="center">BreakingBad MACHINE!</h1>
        </div>

        <div className="row col-md-6">
          <button
            className="btn btn-primary btn-block"
            onClick={this.showChars}
          >
            Show ALl Characters!
          </button>
          <SearchChar onClickMethod={this.getChar} />
          {/* <ShowAll /> */}
          <Result info={this.state.characters} />
        </div>
      </div>
    );
  }
}

export default App;

// getChar = searchField => {
//   this.setState({searchField},() => this.showChars());
// };
