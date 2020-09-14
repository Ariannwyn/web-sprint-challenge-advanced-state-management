import axios from "axios";
export const LOADING = "LOADING";
export const START = "START";
export const ADD_API = "ADD_API";
export const POST_API = "POST_API";

export const loadAPI = (data) => (dispatch) => {
  dispatch({ type: LOADING });
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

export const postAPI = (data) => (dispatch) => {
  dispatch({ type: LOADING });
  axios
    .post("http://localhost:3333/smurfs", data)
    .then((response) => {
      console.log("response", response);
      dispatch({
        type: POST_API,
        payload: response.data,
      });
    })
    .catch((error) => console.log(error));
};
