import React, { Component } from "react";

class WithState extends Component {
  constructor() {
    super(); //to call parent constructor - Component
    this.state = {
      data: 0,
    };//state will be ready before html // here we should not call api instead componentDidMount
  }
  apple() {
    this.setState({ data: this.state.data + 1 });
  }
  render() {
    return (
      <div>
        <h1>Hyyy</h1>
        <h1>{this.state.data}</h1>
        <button onClick={() => this.apple()}>Click me </button>
      </div>
    );
  }
}

export default WithState;
