import React from "react";

function Profile({ smurfs }) {
  return smurfs.smurf.map((item, index) => {
    console.log("item", item);
    return (
      <div className="card" key={index}>
        <h2>{item.name}</h2>
        <p>{item.age}</p>
        <p>{item.height}</p>
      </div>
    );
  });
}
export default Profile;
