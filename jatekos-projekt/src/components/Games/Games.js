import React, { Component } from "react";
import Game from "./Game/Game";
import Aux from "../../hoc/ReactAux";
import MemoryGame from "./MemoryGame/MemoryGame";

class Games extends Component {
  render() {
    return (
      <Aux>
        <MemoryGame />
        <Game title="Szorzótábla" />
        <Game title="Pasziánsz" />
        <Game title="Párkereső" />
      </Aux>
    );
  }
}

export default Games;
