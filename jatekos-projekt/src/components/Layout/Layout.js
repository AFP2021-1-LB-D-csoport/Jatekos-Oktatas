import React from "react";
import MainArea from "../../containers/MainArea/MainArea";
import Aux from "../../hoc/ReactAux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Filter from "../../containers/FilterSection/Filter";

const layout = (props) => (
  <Aux>
    <Toolbar />
    <div className="row">
      <Filter />
      <MainArea>Tartalom</MainArea>
      <main>{props.children}</main>
    </div>
  </Aux>
);

export default layout;
