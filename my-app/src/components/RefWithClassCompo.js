import React, { Component, createRef } from "react";
class Ref extends Component {
  constructor() {
    super();
    this.inputRef = createRef();
  }
 
  GetVal() {
    console.warn(this.inputRef.current.value);
    this.inputRef.current.style.color = "pink";
    this.inputRef.current.style.backgroundColor = "black";
  }
  render() {
    return (
      <div>
        <h2>Ref with class component</h2>
        <input type="text" ref={this.inputRef} />
        <button onClick={() => this.GetVal()}>Check ref</button>
      </div>
    );
  }
}
export default Ref;
