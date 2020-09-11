import React, { useEffect, useState } from "react";
import { loadAPI, postAPI } from "../actions/action";
import { connect } from "react-redux";
import axios from "axios";

import "./App.css";
import Profile from "./Profile";

function App({ state, loadAPI }) {
  const [formState, setFormState] = useState({
    name: "",
    age: 0,
    height: "",
  });

  const postAPI = (data) => {
    axios
      .post("http://localhost:3333/smurfs", formState)
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => console.log(error));
  };

  console.log("App props", state);
  useEffect(() => {
    loadAPI();
    postAPI();
  }, [loadAPI]);

  return (
    <div className="container">
      <h1>SMURFS!</h1>
      <form onSubmit={postAPI}>
        <label htmlFor="name">
          Smurf Name
          <select value={formState.name} name="name" id="name">
            <option value="">Choose Name</option>
            <option value="Student">Student</option>
            <option value="Professional">Professional</option>
            <option value="Instructor">Instructor</option>
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
