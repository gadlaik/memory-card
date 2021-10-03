import React from "react";

export default function Game(props) {
  const allChars = props.characters.map((char) => (
    <img src={char.image} alt={char.name} key={char.id}></img>
  ));

  return <div id="game">{allChars}</div>;
}
