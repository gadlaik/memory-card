import React from "react";
import "./App.css";
import chars from "./assets/characters.json";
import Header from "./components/Header";
import Game from "./components/Game";
import Footer from "./components/Footer";

function App() {
  return (
    <div id="container">
      <Header />
      <Game characters={chars} />
      <Footer />
    </div>
  );
}

export default App;
