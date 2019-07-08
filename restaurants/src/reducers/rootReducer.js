import { combineReducers } from "redux";

import auth from "../reducers/auth";
import errors from "../reducers/errors"

export default combineReducers({
  auth,
  errors
});
