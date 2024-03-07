import React, { Component } from "react";
//import React from "react";

class WithState extends Component {
  constructor() {
    super();
    this.state = {
      data: 0,
    };
  }
  apple(){
    this.setState({data:this.state.data+1})
  }
  render() {
    return (
      <div>
        <h1>Hyyy</h1>
        <h1>{this.state.data}</h1>
        <button onClick={()=>this.apple()}>Click me </button>
      </div>
    );
  }
}

export default WithState;
