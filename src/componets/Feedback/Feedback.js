import React, { Component } from "react";

export default class Feedback extends Component {
  /* ... */

  state = {
    step: 1,
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleBtnGood = () => {
    this.setState((prevState) => ({ good: prevState.good + this.state.step }));
    console.log(this.state); // работает
  };

  handleBtnNeutral = () => {
    this.setState((prevState) => ({
      neutral: prevState.neutral + this.state.step,
    }));
    console.log(this.state); // работает
  };
  handleBtnBad = () => {
    this.setState((prevState) => ({ bad: prevState.bad + this.state.step }));
    console.log(this.state); // работает
  };
  render() {
    const key = Object.keys(this.state);
    return (
      <div>
        <div>
          <h2>Please leave feedback</h2>
          <button type="button" onClick={this.handleBtnGood}>
            {key[1]}
          </button>
          <button type="button" onClick={this.handleBtnNeutral}>
            {key[2]}
          </button>
          <button type="button" onClick={this.handleBtnBad}>
            {key[3]}
          </button>
        </div>
        <div>
          <h2>Statistics</h2>
          <ul>
            <li>
              <span>{key[1]}:</span>
              <span>{this.state[key[1]]}</span>
            </li>
            <li>
              <span>{key[2]}:</span>
              <span>{this.state[key[2]]}</span>
            </li>
            <li>
              <span>{key[3]}:</span>
              <span>{this.state[key[3]]}</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
