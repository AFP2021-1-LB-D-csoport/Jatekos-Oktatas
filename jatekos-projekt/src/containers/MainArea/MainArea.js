import React, { Component } from "react";
import Aux from "../../hoc/ReactAux";
import Games from "../../components/Games/Games";
import { Routes, Route } from "react-router-dom";

class MainArea extends Component {
  render() {
    return (
      <Aux>
        <Routes>
          <Route path="/games" exact element={<Games />} />
          <Route path="/highscores" exact render={() => <h1>Rekordok</h1>} />
        </Routes>
      </Aux>
    );
  }
}

export default MainArea;
