import isEmpty from "lodash/isEmpty";
import { SET_ERROR } from "../actions/types";

const initialState = {
  errors: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        errors: ["loginError"]
      };
    default:
      return state;
  }
};
