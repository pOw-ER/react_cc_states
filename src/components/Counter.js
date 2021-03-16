import React, { Component } from 'react'


class Counter extends Component {
  state = {
    counter: 0
  }
  decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  }
  increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  }
  reset = () => {
    this.setState({ counter: this.state.counter = 0 });
  }
  render() {
    return (
      <section id="counterSection">
        <div id="countDiv">
          <button onClick={this.decrement}>-</button>
          <div>{this.state.counter}</div>
          <button onClick={this.increment}>+</button>
        </div>
        <div id='resetDiv'>
          <button onClick={this.reset}>RESET</button>
        </div>
      </section>
    );
  }
}

export default Counter;
