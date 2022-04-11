import React, { Component } from "react";
import Aux from "../../hoc/ReactAux";
import Game from "../../components/Games/Game/Game";
import { Routes, Route } from "react-router-dom";

class MainArea extends Component {
  render() {
    return (
      <Aux>
        <Routes>
          <Route path="/games" exact element={<Game />} />
          <Route path="/highscores" exact render={() => <h1>Rekordok</h1>} />
        </Routes>
      </Aux>
    );
  }
}

export default MainArea;
