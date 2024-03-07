import React, { Component } from "react";

class ShouldComponentUpdateMethod extends Component {
  constructor() {
    super();
    console.warn("constructor");
    this.state = {
      count: 0,
    };
  }
  shouldComponentUpdate() {
    console.warn("shouldComponentUpdate", this.state.count);
    if (this.state.count > 5 && this.state.count < 10) {
      return true; // will allow to update in state in h2 tag, by default it will be false.
    }
  }
  render() {
    console.warn("render");
    return (
      <div>
        <h2>shouldComponentUpdate {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Update here
        </button>
      </div>
    );
  }
}
export default ShouldComponentUpdateMethod;
