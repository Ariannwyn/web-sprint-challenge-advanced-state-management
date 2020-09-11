import axios from "axios";
export const START = "START";
export const ADD_API = "ADD_API";

export const loadAPI = (data) => {
  return (dispatch) => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((response) => {
        console.log("API", response.data);
        dispatch({
          type: ADD_API,
          payload: response.data,
        });
      })
      .catch((err) => console.log(err));
  };
};
