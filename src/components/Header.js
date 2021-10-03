import React from "react";

export default function Header(props) {
  return (
    <div id="header">
      <h1>Memory Game</h1>
      <h3>
        Score: {props.score === undefined ? "0 - 0" : props.score} High Score:{" "}
        {props.highscore === undefined ? "0" : props.highscore}
      </h3>
    </div>
  );
}
