import { ADD_API } from "../actions/action";

export const initialState = {
  smurf: [],
};

export const reducer = (state = initialState, action) => {
  console.log("reducer data", action.payload);
  switch (action.type) {
    case ADD_API:
      return { ...state, smurf: action.payload };
    default:
      return state;
  }
};
