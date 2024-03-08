import React, { PureComponent } from "react";
// PureComponent stops re-rendering for same state and props, optimize performance.  
class PureCompo extends PureComponent {
  constructor() {
    super();
    this.state = {
      count: 1,
    };
  }
  render() {
    console.warn("checking re-rendering");
    return (
      <div>
        <h1>Pure component {this.state.count}</h1>

        <button onClick={() => this.setState({ count: this.state.count })}>
          Update Me
        </button>
      </div>
    );
  }
}
export default PureCompo;
