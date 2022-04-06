import React from "react";
import MainArea from "../../containers/MainArea/MainArea";
import Aux from "../../hoc/ReactAux";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = (props) => (
  <Aux>
    <Toolbar />
    <MainArea>Tartalom</MainArea>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
