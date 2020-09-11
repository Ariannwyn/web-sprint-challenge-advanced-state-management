import React, { useEffect } from "react";
import { loadAPI } from "../actions/action";
import { connect } from "react-redux";
import "./App.css";

function App({ state, loadAPI }) {
  useEffect(() => {
    loadAPI();
  }, [loadAPI]);

  return (
    <div className="App">
      <h1>SMURFS! W/Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("App state", state);
  return { state };
};

export default connect(mapStateToProps, { loadAPI })(App);
