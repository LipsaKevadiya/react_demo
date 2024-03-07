import React, { Component } from "react";

class LifeCycle extends Component {
  constructor() {
    super();
    console.warn("constructor");
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    console.warn("componentDidMount");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.warn("componentDidUpdate", prevState, this.state.count);
    if(this.state.count<10){
        this.setState({ count: this.state.count+1 })
    }
    if (prevState === this.state.count) {
      alert("same state");
    }
  }
  render() {
    console.warn("render");
    return (
      <div>
        <h2>componentDidUpdate</h2>
        <button
          onClick={() => {
            this.setState({ count: 1 });
          }}
        >
          Update here
        </button>
      </div>
    );
  }
}
export default LifeCycle;
// consturctor , render, componentDidMount and then onClick each time we click only render, componentDidUpdate will call.
