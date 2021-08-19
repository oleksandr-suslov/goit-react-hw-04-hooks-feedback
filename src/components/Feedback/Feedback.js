import React, { Component } from "react";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleBtnClick = (e) => {
    const label = e.target.textContent;
    this.setState((prevState) => ({ [label]: prevState[label] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.keys(this.state).reduce(
      (acc, value) => acc + this.state[value],
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    const result = this.countTotalFeedback();
    const { good } = this.state;
    const percentage = (good * 100) / result;
    return result === 0 ? 0 : Math.round(percentage);
  };

  render() {
    const key = Object.keys(this.state);
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={key}
            onLeaveFeedback={this.handleBtnClick}
          ></FeedbackOptions>
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="No feedback given"></Notification>
          ) : (
            <Statistics
              good={this.state[key[0]]}
              neutral={this.state[key[1]]}
              bad={this.state[key[2]]}
              total={total}
              positivePercentage={percentage}
            ></Statistics>
          )}
        </Section>
      </div>
    );
  }
}
