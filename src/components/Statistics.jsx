import React, { Component } from 'react';
import Section from './Section';

class Statistic extends Component {
  render() {
    let result = (100 * this.props.good) / this.props.total;
    return (
      <div>
        <Section title="Statistic"/>
        <p>Good:{this.props.good}</p>
        <p>Neutral:{this.props.neutral}</p>
        <p>Bad:{this.props.bad}</p>
        <p>Total:{this.props.total}</p>
        <p>Posotive feedback:{Math.round(result)}%</p>
      </div>
    );
  }
}

export default Statistic;
