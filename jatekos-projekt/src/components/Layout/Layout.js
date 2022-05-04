import React from "react";
import MainArea from "../../containers/MainArea/MainArea";
import Aux from "../../hoc/ReactAux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Filter from "../../containers/FilterSection/Filter";

const layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <Filter />
      <MainArea></MainArea>
      <main>{props.children}</main>
    </Aux>
  );
};

export default layout;
