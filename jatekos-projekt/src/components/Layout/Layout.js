import React from "react";
import Aux from "../../hoc/ReactAux";

const layout = (props) => (
  <Aux>
    <div>Menüsor</div>
    <main>{props.children}</main>
  </Aux>
);

export default layout;
