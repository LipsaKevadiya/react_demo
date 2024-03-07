import React, { Component } from "react";
import Child from "./UnmountChild";

class Unmount extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <div>
        {
            this.state.show ?   <Child /> : <h2>child component removed</h2>
        }
       
        <button onClick={()=>this.setState({show:!this.state.show})}> Toggle </button>
      </div>
    );
  }
}

export default Unmount;
