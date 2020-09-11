import { ADD_API } from "../actions/action";

export const initialState = {
  data: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_API:
      return state;
  }
};
