import { Component } from 'react';
import Feedback from './Feedback';

class App extends Component {
  state = {
    good: 3,
    neutral: 10,
    bad: 5,
  };
  render() {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Feedback
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={total}
        />
      </div>
    );
  }
}
export default App;
