import React, { Component } from 'react'

class Todo extends Component {
  state = {
    isComplete: true,
    isDetails: true
  }
  checkTodo = () => {
    this.setState({ isComplete: !this.state.isComplete });
  }
  checkTodo2 = () => {
    this.setState({ isDetails: !this.state.isDetails });
  }
  render() {
    return (
      <div id='todos'>
        <div id='todo'>
          <p>Why is React great?</p>
          <div onClick={this.checkTodo} className='check'>{this.state.isComplete ? '+' : '-'}</div>
        </div>
        <div id="second" style={this.state.isComplete ? { borderTop: '', display: 'none' } : { borderTop: '1px solid #fff', display: 'flex' }}>
          <p>{this.state.isComplete === false ? 'Fast learning curve' : ''}</p>
          {this.state.isComplete ? null : <div onClick={this.checkTodo2} className='check'>{this.state.isDetails ? '+' : '-'}</div>}
        </div>
        <p>{this.state.isDetails ? '' : "React is very a simple and lightweight library that only deals with the view layer. It is not a beast like other MV* frameworks such as Angular or Ember. Any Javascript developer can understand the basics and start developing an awesome web application after only a couple of days reading tutorial. As the React guide says ‘Thinking in React’ may be a little different than you used to since it brings a new approach to the table, but it will become much easier and natural as you gain experience with it."}
        </p>
      </div>
    );
  }
}

export default Todo;
