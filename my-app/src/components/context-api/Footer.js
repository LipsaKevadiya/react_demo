import React, { Component } from "react";
import CommonContext from "./CommonContext.js";

class Footer extends Component {
  render() {
    return (
      <CommonContext.Consumer>
        {({ color }) => <h1 className="footer" style={{backgroundColor:color}}>Footer page</h1>}
      </CommonContext.Consumer>
    );
  }
}
export default Footer;
