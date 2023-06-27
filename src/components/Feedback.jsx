import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

class Feedback extends Component {
  state = {
    good: 3,
    neutral: 10,
    bad: 5,
  };
  countPositiveFeedbackPercentage = () => {
    let total = this.state.good + this.state.neutral + this.state.bad;
    let result = (100 * this.state.good) / total;
    return Math.round(result);
  };
  render() {
    return (
      <div>
        <Stack direction="row" spacing={2}>
          <Button variant="contained">Good</Button>
          <Button variant="contained">Neutral</Button>
          <Button variant="contained">Bad</Button>
        </Stack>
        <h1>Statistic</h1>
        <p>Good:{this.state.good}</p>
        <p>Neutral:{this.state.neutral}</p>
        <p>Bad:{this.state.bad}</p>
        <p>Total:{this.state.good + this.state.neutral + this.state.bad}</p>
        <p>Posotive feedback:{this.countPositiveFeedbackPercentage()}%</p>
      </div>
    );
  }
}

export default Feedback;
