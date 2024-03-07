import React, { Component } from "react";
class UseProp extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>props with class component</h2>
        <h3>Hello, {this.props.name} </h3>
        <h4>Email: {this.props.email}</h4>
      </div>
    );
  }
}
export default UseProp;
