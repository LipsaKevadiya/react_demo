import React, { Component } from "react";
import UseProp from "./PropsWithClassCompo.js";

class Simplee extends Component {
  constructor() {
    super();
    this.state = {
      name: "aemi",
    };
  }
  render() {
    return (
      <div>
        {/* <h1>Hello Class Component</h1> */}
        <UseProp name={this.state.name} email="aemi@gmail.com" />
        <button onClick={() => this.setState({ name: "lipsa" })}>
          Update Me
        </button>
      </div>
    );
  }
}
export default Simplee;
