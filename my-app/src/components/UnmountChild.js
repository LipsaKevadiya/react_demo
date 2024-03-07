import React, { Component } from "react";

class Child extends Component {
    componentWillUnmount(){
        alert("componentWillUnmount called")
    }
  render() {
    return (
      <div>
        <h1>child componentWillunmount</h1>
      </div>
    );
  }
}

export default Child;
