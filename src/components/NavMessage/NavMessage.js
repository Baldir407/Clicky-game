import React, { Component } from "react";
import "./NavMessage.css";

// NavMessage renders an li tag containing an message for the user

class NavMessage extends Component {
  state = {
    message: "",
    animating: false
  };
// This displays a Korrect or Inkorrect message depending on the user clicking on an image they have yet to click
  componentWillReceiveProps({ score, topScore }) {
    const newState = { animating: true };
    if (score === 0 && topScore === 0) {
      newState.message = "";
    } else if (score === 0 && topScore > 0) {
      newState.message = "incorrect";
    } else {
      newState.message = "korrect";
    }
    this.setState(newState, () =>
      setTimeout(() => this.setState({ animating: false }), 500)
    );
  }
// If the user has picked correctly, they will be told so. If not, then they will be told so in the message bar
  renderMessage = () => {
    switch (this.state.message) {
    case "correct":
      return "KORRECT!";
    case "incorrect":
      return "FATALITY!";
    default:
      return "Klick to begin!";
    }
  };

  render() {
    return (
      <li className={this.state.animating ? this.state.message : ""}>
        {this.renderMessage()}
      </li>
    );
  }
}

export default NavMessage;
