import React, { useState } from "react";
import "./App.css";
import SWChars from "./assets/characters.json";
import Header from "./components/Header";
import Game from "./components/Game";
import Footer from "./components/Footer";

export default function App() {
  let [chars, setChars] = useState(SWChars);
  let [score, setScore] = useState(0);
  let [highScore, setHighScore] = useState(0);

  function handleClick(e) {
    chars.forEach((character) => {
      if (e.target.alt === character.name && character.clicked) {
        setChars(
          SWChars.map((char) => {
            return { ...char, order: Math.random() * 100 };
          }).sort((a, b) => a.order - b.order)
        );
        if (score > highScore) setHighScore(score);
        setScore(0);
      } else if (e.target.alt === character.name) {
        setChars(
          chars
            .map((char) => {
              if (e.target.alt === char.name) {
                return { ...char, clicked: !char.clicked };
              } else return char;
            })
            .map((char) => {
              return { ...char, order: Math.random() * 100 };
            })
            .sort((a, b) => a.order - b.order)
        );
        setScore(score + 1);
      }
    });
  }

  return (
    <div id="container">
      <Header score={score} highScore={highScore} />
      <Game characters={chars} handleClick={handleClick} />
      <Footer />
    </div>
  );
}
