import React, { Component } from "react";
import CommonContext from "./context-api/CommonContext.js";
import Main from "./context-api/Main.js";
import UpdateButton from "./context-api/UpdateButton.js";
import Header from "./context-api/Header.js";
import Footer from "./context-api/Footer.js";

class Context extends Component {
  constructor() {
    super();
    this.updateColor = (color) => {
      this.setState({
        color: color,
      });
    };
    this.state = {
      color: "green",
      updateColor: this.updateColor,
    };
  }

  render() {
    return (
      <CommonContext.Provider value={this.state}>
        <Header />
        <CommonContext.Consumer>
          {({ color }) => (
            <h1 style={{ backgroundColor: color }}>example of context api</h1>
          )}
        </CommonContext.Consumer>
        <Main />
        <UpdateButton />
        <Footer />
      </CommonContext.Provider>
    );
  }
}
export default Context;
