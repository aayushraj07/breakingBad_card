import React, { Component } from "react";

class SearchChar extends Component {
  state = {
    inputValue: ""
  };

  returnKeyWord = () => {
    this.props.onClickMethod(this.state.inputValue);
  };

  render() {
    return (
      <div className="">
        <input
          type="text"
          className="form-control"
          value={this.state.inputValue}
          onChange={event => {
            this.setState({ inputValue: event.target.value });
          }}
        />
        <button
          className="btn btn-primary bn-sm btn-block"
          onClick={this.returnKeyWord}
        >
          Enter Character Name for details
        </button>
      </div>
    );
  }
}
export default SearchChar;
