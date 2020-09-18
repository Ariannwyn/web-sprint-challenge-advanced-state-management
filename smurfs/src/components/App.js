import React, { useEffect } from "react";
import { loadAPI, addSmurf, handleChanges } from "../store/action";
import { connect } from "react-redux";
import "./App.css";

import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";

function App(props) {
  console.log(props);
  useEffect(() => {
    props.loadAPI();
  }, []);

  return (
    <div className="App">
      <h1>Smurf App</h1>
      {props.isLoading && <h4>Loading smurf data...</h4>}
      {props.error && <p>Error {props.error}</p>}
      <SmurfForm
        addSmurf={addSmurf}
        handleChanges={handleChanges}
        values={props.values}
      />
      <SmurfList smurfs={props.smurfs} />
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("App state", state.values);
  return {
    isLoading: state.isLoading,
    smurfs: state.smurfs,
    error: state.error,
    values: {
      name: state.smurfs.name,
      age: state.smurfs.age,
      height: state.smurfs.height,
    },
  };
};

export default connect(mapStateToProps, { loadAPI, addSmurf, handleChanges })(
  App
);
