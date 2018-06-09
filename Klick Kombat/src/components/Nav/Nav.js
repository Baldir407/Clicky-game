import React from "react";
import NavMessage from "../NavMessage";
import "./Nav.css";

// Navbar component
// This displays the name of the game as well as the user's current score and their top score
const Nav = props => (
  <nav className="navbar">
    <ul>
      <li className="brand">
        <a href="/">KLICKY KOMBAT</a>
      </li>
      <NavMessage score={props.score} topScore={props.topScore} />
      <li>
        Score: {props.score} | Top Score: {props.topScore}
      </li>
    </ul>
  </nav>
);

export default Nav;
