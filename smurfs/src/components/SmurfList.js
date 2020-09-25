import React from "react";

const Smurf = (props) => {
  return (
    <div className="Smurf-card">
      <h3>Name: {props.smurf.name}</h3>
      <h5>Age: {props.smurf.age}</h5>
      <h5>Height: {props.smurf.height}</h5>
    </div>
  );
};

const SmurfsList = (props) => {
  console.log(props);
  return (
    <div>
      {props.smurfs.map((smurf) => {
        return <Smurf key={smurf.id} smurf={smurf} />;
      })}
    </div>
  );
};

export default SmurfsList;
