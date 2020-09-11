import React, { useEffect, useState } from "react";
import { loadAPI, postAPI } from "../actions/action";
import { connect } from "react-redux";
import axios from "axios";

import "./App.css";
import Profile from "./Profile";

export const POST_API = "POST_API";

function App({ state }) {
  const [formState, setFormState] = useState({
    name: "",
    age: 0,
    height: "",
    id: Date.now(),
  });

  const postAPI = (data) => (dispatch) => {
    axios
      .post("http://localhost:3333/smurfs", formState)
      .then((response) => {
        console.log("response", response);
        dispatch({
          type: POST_API,
          payload: response.data,
        });
      })
      .catch((error) => console.log(error));
  };

  console.log("formState", formState);
  useEffect(() => {
    loadAPI();
  }, [loadAPI]);

  const submitForm = (event) => {
    event.preventDefault();
    console.log("form submitted!");
    postAPI();
  };

  const handleChanges = (event) => {
    event.persist();
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
      id: Date.now(),
    });
    console.log("input changed!", event.target.value);
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
        <button type="submit">Submit</button>
      </form>
      <Profile smurfs={state} />
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("App state", state);
  return { state };
};

export default connect(mapStateToProps, { loadAPI })(App);
