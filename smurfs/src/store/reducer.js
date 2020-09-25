import {
  ADD_API,
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_ERROR,
  HANDLE_CHANGES,
} from "./action";

const initialState = {
  isLoading: false,
  smurfs: [],
  error: "",
  values: {
    name: "",
    age: "",
    height: "",
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        isLoading: false,
        smurfs: action.payload,
        error: "",
        values: {
          name: action.payload.name,
          age: action.payload.age,
          height: action.payload.height,
        },
      };
    case FETCH_SMURF_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case HANDLE_CHANGES:
      console.log("handle changes", action.payload.target);
      const name = action.payload.target.name;
      const value = action.payload.target.value;
      return {
        ...state,
        values: {
          ...state.values,
          [name]: value,
        },
      };
    default:
      return state;
  }
};
