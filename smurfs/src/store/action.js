import axios from "axios";

export const START = "START";
export const ADD_API = "ADD_API";
export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_ERROR = "FETCH_SMURF_ERROR";
export const HANDLE_CHANGES = "HANDLE_CHANGES";

export const loadAPI = () => {
  return (dispatch) => {
    dispatch({ type: START });
    axios
      .get("http://localhost:3333/smurfs")
      .then((response) => {
        console.log("API", response.data);
        dispatch({
          type: "ADD_API",
          payload: response.data,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const addSmurf = (smurf) => {
  console.log("action add", smurf);
  return (dispatch) => {
    dispatch({ type: FETCH_SMURF_START });
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then((response) => {
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_SMURF_ERROR, payload: error.message });
      });
  };
};

export const handleChanges = (e) => {
  console.log("changes", e);
  return (dispatch) => {
    dispatch({ type: HANDLE_CHANGES, payload: e });
  };
};
