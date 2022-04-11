import React from "react";
import Aux from "../../hoc/ReactAux";

const filter = () => (
  <Aux>
    <form className="col-2 bg-dark text-light">
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Nehézségi szint</label>
        <select
          multiple
          className="form-control bg-dark text-light"
          id="exampleFormControlSelect1"
        >
          <option>1. osztály</option>
          <option>2. osztály</option>
          <option>3. osztály</option>
          <option>4. osztály</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="exampleFormControlSelect2">Tantárgy</label>
        <select
          multiple
          className="form-control bg-dark text-light"
          id="exampleFormControlSelect2"
        >
          <option>Matek</option>
          <option>Magyar</option>
          <option>Idegen nyelv</option>
        </select>
      </div>
    </form>
  </Aux>
);

export default filter;
