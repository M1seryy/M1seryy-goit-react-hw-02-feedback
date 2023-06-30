import React, { Component } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

class Feedback extends Component {
  state = {
    res: 0,
  };
  render() {
    let result = (100 * this.props.good) / this.props.total;
    this.setState({ res: Math.round(result) });
    return (
      <div>
        <Stack direction="row" spacing={2}>
          <Button variant="contained">Good</Button>
          <Button variant="contained">Neutral</Button>
          <Button variant="contained">Bad</Button>
        </Stack>
        <h1>Statistic</h1>
        <p>Good:{this.props.good}</p>
        <p>Neutral:{this.props.neutral}</p>
        <p>Bad:{this.props.bad}</p>
        <p>Total:{this.props.total}</p>
        <p>Posotive feedback:{this.state.res}%</p>
      </div>
    );
  }
}

export default Feedback;
