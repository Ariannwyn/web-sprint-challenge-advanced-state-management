import { LOADING, ADD_API, POST_API } from "../actions/action";

export const initialState = {
  isLoading: false,
  smurf: {
    name: "",
    age: "",
    height: "",
    id: null,
  },
};

export const reducer = (state = initialState, action) => {
  console.log("reducer data", action.payload);
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_API:
      return { ...state, smurf: action.payload, isLoading: false };
    case POST_API:
      return { ...state, smurf: action.payload, isLoading: false };
    default:
      return state;
  }
};
