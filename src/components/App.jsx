import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const totalFeedbacks = good + neutral + bad;
    return totalFeedbacks;
  }
  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const percentageOfGoodFeedback = (
      (good / (good + neutral + bad)) *
      100
    ).toFixed(2);
    return percentageOfGoodFeedback;
  }

  render(totalFeedback) {
    const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <h1>Please leave feedback</h1>

        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          ></FeedbackOptions>
        </Section>
        
          <Section title="Statistics">
          {(this.countTotalFeedback() !== 0) 
          ? (<Statistics
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={this.countTotalFeedback()} 
            positivePercentage={this.countPositiveFeedbackPercentage()}
            />)
          : (<Notification message="There is no feedback"></Notification>)
          }
        </Section>
      </div>
    );
  }
}
