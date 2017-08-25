import React, { Component } from "react";

const style = {
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)"
};

export default class extends Component {
  state = {
    cows: null
  };

  componentDidMount() {
    fetch("cow-api/cow")
      .then(response => response.text())
      .then(cows => this.setState({ cows }));
  }

  render() {
    const { cows } = this.state;
    return cows
      ? <pre style={style} children={cows} />
      : <div style={style}>Loading cows...</div>;
  }
}
