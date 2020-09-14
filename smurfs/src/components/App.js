import React, { useState } from "react";
import { loadAPI, postAPI } from "../actions/action";
import { connect } from "react-redux";

import "./App.css";
import Profile from "./Profile";

function App(props) {
  const [formState, setFormState] = useState({
    name: "",
    age: 0,
    height: "",
    id: Date.now(),
  });

  const submitForm = (e) => {
    e.preventDefault();
    props.postAPI(formState);
  };

  const handleChanges = (e) => {
    // event.persist();
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <h1>SMURFS!</h1>

      <form onSubmit={submitForm}>
        <label htmlFor="name">
          Smurf Name
          <select
            value={formState.name}
            name="name"
            id="name"
            onChange={handleChanges}
          >
            <option value="">Choose Name</option>
            <option value="Smurfette">Smurfette</option>
            <option value="Clumsy">Clumsy</option>
            <option value="Hefty">Hefty</option>
          </select>
        </label>
        <label htmlFor="height">
          <input
            type="text"
            name="height"
            id="height"
            value={formState.height}
            onChange={handleChanges}
          />
        </label>
        <label htmlFor="age">
          <input
            type="text"
            name="age"
            id="age"
            value={formState.age}
            onChange={handleChanges}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {/* <Profile smurfs={state} /> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("App state", state);
  return { smurf: state.smurf };
};

export default connect(mapStateToProps, { loadAPI, postAPI })(App);
