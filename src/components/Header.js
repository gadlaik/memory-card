import React from "react";

export default function Header(props) {
  return (
    <div id="header">
      <h1>Memory Game</h1>
      <h3>
        Score: {props.score} High Score: {props.highScore}
      </h3>
    </div>
  );
}
